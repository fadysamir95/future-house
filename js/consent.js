/* Future House: cookie consent + Google Tag Manager loader (vanilla JS, no dependencies).
 *
 * BASIC consent mode: Google Tag Manager (and therefore every Google tag) is NOT requested
 * from the network until the visitor presses "Accept". "Reject" (or no answer) keeps the
 * site completely free of analytics code and cookies. The choice is remembered in
 * localStorage ("fh_consent") for 12 months and can be changed at any time from the
 * "Cookie settings" button in the footer.
 *
 * What this file does NOT do: it never sends a page_view and never contains a GA4
 * Measurement ID. GA4 is configured inside the GTM container; this file only loads that
 * container (one page load = one container load = one GA4 page_view), and pushes a few
 * descriptive values and interaction events into window.dataLayer for GTM to use.
 *
 * Configuration comes from the script tag: <script src="js/consent.js" data-gtm-id="GTM-XXXX" defer>
 * (generated from ANALYTICS.gtmId in tools/copy.mjs). No id = no analytics at all. */
(function () {
	'use strict';

	var script = document.currentScript || document.querySelector('script[data-gtm-id]');
	var GTM_ID = script && script.getAttribute('data-gtm-id');
	var banner = document.getElementById('fh-consent');
	if (!GTM_ID || !/^GTM-[A-Z0-9]+$/.test(GTM_ID) || !banner) { return; }

	var KEY = 'fh_consent', VERSION = 1, MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
	/* Analytics runs only on these hostnames, so test and preview deployments never pollute the data.
	   Remove the review host at launch. (window.__FH_ANALYTICS_HOSTS lets tests override the list.) */
	var HOSTS = window.__FH_ANALYTICS_HOSTS || ['futurehouseegy.com', 'www.futurehouseegy.com', 'futurehouseegy.vercel.app'];
	if (HOSTS.indexOf(location.hostname) === -1) { return; }

	var doc = document, html = doc.documentElement;
	var loaded = false;

	/* ---------- stored choice ---------- */
	function readChoice() {
		try {
			var s = JSON.parse(window.localStorage.getItem(KEY) || 'null');
			if (s && s.v === VERSION && (s.analytics === 'granted' || s.analytics === 'denied') && Date.now() - s.ts < MAX_AGE_MS) { return s.analytics; }
		} catch (e) { /* storage unavailable: treated as "no choice" */ }
		return null;
	}
	function saveChoice(value) {
		try { window.localStorage.setItem(KEY, JSON.stringify({ v: VERSION, analytics: value, ts: Date.now() })); } catch (e) { /* ignore */ }
	}

	/* ---------- load Google Tag Manager (once) ---------- */
	function loadGtm() {
		if (loaded || window.__fhGtmLoaded) { return; }
		loaded = window.__fhGtmLoaded = true;
		var dl = window.dataLayer = window.dataLayer || [];
		function gtag() { dl.push(arguments); }
		/* The visitor opted in to analytics only; advertising signals stay denied. */
		gtag('consent', 'default', {
			analytics_storage: 'granted', functionality_storage: 'granted', security_storage: 'granted',
			ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
		});
		/* descriptive values for GA4 custom dimensions (no personal data, no event) */
		dl.push({ page_language: (html.lang || 'en').slice(0, 2), page_type: html.getAttribute('data-page') || 'page' });
		dl.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
		var first = doc.getElementsByTagName('script')[0], tag = doc.createElement('script');
		tag.async = true;
		tag.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID);
		if (first && first.parentNode) { first.parentNode.insertBefore(tag, first); } else { doc.head.appendChild(tag); }
	}

	/* ---------- withdraw: remove Google Analytics cookies and stop tracking ---------- */
	function deleteAnalyticsCookies() {
		var host = location.hostname, parts = host.split('.'), domains = ['', host, '.' + host];
		for (var i = 1; i < parts.length - 1; i++) { domains.push('.' + parts.slice(i).join('.')); }
		doc.cookie.split(';').forEach(function (c) {
			var name = c.split('=')[0].trim();
			if (!/^(_ga|_gid|_gat|_gcl)/.test(name)) { return; }
			domains.forEach(function (d) { doc.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : ''); });
		});
	}

	/* ---------- banner ---------- */
	function showBanner() { banner.hidden = false; }
	function hideBanner() { banner.hidden = true; }
	function choose(value) {
		var was = readChoice();
		saveChoice(value);
		hideBanner();
		if (value === 'granted') { loadGtm(); return; }
		if (loaded || was === 'granted') {
			if (window.dataLayer) { window.dataLayer.push(['consent', 'update', { analytics_storage: 'denied' }]); }
			deleteAnalyticsCookies();
			window.location.reload();                                   // the loaded container cannot be unloaded: reload without it
		}
	}
	banner.addEventListener('click', function (e) {
		var b = e.target.closest && e.target.closest('[data-fh-consent]');
		if (b) { choose(b.getAttribute('data-fh-consent')); }
	});
	doc.addEventListener('click', function (e) {
		var o = e.target.closest && e.target.closest('[data-fh-consent-open]');
		if (o) { showBanner(); var f = banner.querySelector('[data-fh-consent]'); if (f) { f.focus(); } }
	});

	/* ---------- interaction events (only ever pushed after consent) ---------- */
	function track(name, params) {
		if (!loaded || !window.dataLayer) { return; }
		var o = { event: name };
		for (var k in params) { if (Object.prototype.hasOwnProperty.call(params, k)) { o[k] = params[k]; } }
		window.dataLayer.push(o);
	}
	window.fhTrack = track;                                              // used by js/site.js for the contact form

	var SOCIAL = { 'facebook.com': 'facebook', 'instagram.com': 'instagram', 'linkedin.com': 'linkedin', 'tiktok.com': 'tiktok', 'youtube.com': 'youtube', 'threads.com': 'threads' };
	doc.addEventListener('click', function (e) {
		if (!loaded) { return; }
		var a = e.target.closest && e.target.closest('a[href]');
		if (!a) { return; }
		var href = a.getAttribute('href') || '', where = a.closest('footer') ? 'footer' : (a.closest('header') ? 'header' : 'content');
		if (a.classList.contains('fh-ask')) {
			var card = a.closest('figure'), h = card && card.querySelector('h3');
			track('project_enquiry', { project_name: h ? h.textContent.trim() : '', link_location: where });
		} else if (/^https:\/\/wa\.me\//.test(href)) {
			track('whatsapp_click', { link_location: where });
		} else if (/^tel:/.test(href)) {
			track('phone_click', { link_location: where });
		} else if (/^mailto:/.test(href)) {
			track('email_click', { link_location: where });
		} else if (a.classList.contains('lang-switch')) {
			track('language_switch', { to_language: a.getAttribute('hreflang') || '' });
		} else if (/^https?:\/\//.test(href)) {
			var h2 = a.hostname.replace(/^www\./, '');
			if (SOCIAL[h2]) { track('social_click', { social_network: SOCIAL[h2], link_location: where }); }
		}
	});

	/* ---------- start ---------- */
	var choice = readChoice();
	if (choice === 'granted') { loadGtm(); } else if (choice === null) { showBanner(); }
}());
