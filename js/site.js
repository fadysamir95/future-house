/* Future House – site behaviour (vanilla JS, no dependencies)
   - mobile navigation toggle
   - scroll-to-top button
   - contact form: validates, then opens a pre-filled WhatsApp chat
   The site is static (no server-side form handler), so WhatsApp is the
   delivery channel; a mailto: fallback is offered as well. */
(function () {
	'use strict';

	var doc = document;
	var lang = (doc.documentElement.lang || 'en').slice(0, 2);

	/* ---------- Mobile navigation ---------- */
	var header = doc.querySelector('.main-header');
	var menuBtn = doc.querySelector('.fh-menu-btn');
	if (header && menuBtn) {
		var setMenu = function (open) {
			header.classList.toggle('fh-menu-open', open);
			menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
			menuBtn.setAttribute('aria-label', open ? menuBtn.getAttribute('data-close') : menuBtn.getAttribute('data-open'));
			var icon = menuBtn.querySelector('.fa');
			if (icon) { icon.className = 'fa ' + (open ? 'fa-times' : 'fa-bars'); }
		};
		menuBtn.addEventListener('click', function () {
			setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
		});
		doc.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
				setMenu(false);
				menuBtn.focus();
			}
		});
		window.addEventListener('resize', function () {
			if (window.innerWidth >= 1024) { setMenu(false); }
		});
	}

	/* ---------- Scroll to top ---------- */
	var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
	var toTop = doc.querySelector('.scroll-to-top');
	if (toTop) {
		var toggleTop = function () {
			toTop.classList.toggle('is-visible', window.pageYOffset > 400);
		};
		window.addEventListener('scroll', toggleTop, { passive: true });
		toggleTop();
		toTop.addEventListener('click', function () {
			window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
			var skip = doc.getElementById('main');
			if (skip) { skip.focus({ preventScroll: true }); }
		});
	}

	/* ---------- Motion (styles live in css/motion.css) ----------
	   1. Scroll reveals: [data-reveal] elements get .is-visible once, when they
	      enter the viewport (IntersectionObserver, no scroll listeners).
	   2. Gentle hero parallax: one rAF-throttled passive listener, transform-only,
	      desktop only, paused while the hero is off-screen.
	   Reduced-motion users and browsers without IntersectionObserver get all
	   content immediately; without JS the .js class never exists, so nothing is hidden. */
	var revealItems = doc.querySelectorAll('[data-reveal]');
	if (revealItems.length) {
		var show = function (el) { el.classList.add('is-visible'); };
		if (reduce || !('IntersectionObserver' in window)) {
			Array.prototype.forEach.call(revealItems, show);
		} else {
			var io = new IntersectionObserver(function (entries) {
				entries.forEach(function (en) {
					if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
				});
			}, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
			Array.prototype.forEach.call(revealItems, function (el) { io.observe(el); });
			/* keyboard users tabbing into a not-yet-revealed block see it immediately */
			doc.addEventListener('focusin', function (e) {
				var el = e.target.closest && e.target.closest('[data-reveal]');
				if (el) { show(el); }
			});
		}
	}

	var hero = doc.querySelector('.hero');
	var heroBg = hero && hero.querySelector('.hero-bg');
	if (heroBg && !reduce && window.CSS && CSS.supports('translate', '0 1px') && 'IntersectionObserver' in window) {
		var heroVisible = true, queued = false;
		new IntersectionObserver(function (en) { heroVisible = en[0].isIntersecting; }).observe(hero);
		var parallax = function () {
			queued = false;
			if (!heroVisible || window.innerWidth < 768) { return; }
			var y = Math.min(window.pageYOffset, hero.offsetHeight);
			heroBg.style.setProperty('--py', Math.min(80, y * 0.13).toFixed(1) + 'px');
		};
		window.addEventListener('scroll', function () {
			if (!queued) { queued = true; window.requestAnimationFrame(parallax); }
		}, { passive: true });
	}

	/* ---------- Contact form ----------
	   Delivery is isolated in deliver(): by default it opens a pre-filled WhatsApp
	   chat (the site has no backend). To switch to email delivery later, add
	   data-endpoint="https://..." to the <form>; the same validated data is then
	   POSTed as JSON and the WhatsApp step is skipped. All wording comes from the
	   data-messages attribute generated from tools/copy.mjs. */
	var form = doc.getElementById('contact-form');
	if (!form) { return; }

	var msg = {};
	try { msg = JSON.parse(form.getAttribute('data-messages') || '{}'); } catch (e) { msg = {}; }
	var status = form.querySelector('.form-status');
	var WA = form.getAttribute('data-wa');
	var submitBtn = form.querySelector('button[type="submit"]');

	function say(text, link) {
		status.textContent = text;
		if (link) {
			status.appendChild(doc.createTextNode(' '));
			var a = doc.createElement('a');
			a.href = link;
			a.target = '_blank';
			a.rel = 'noopener noreferrer';
			a.textContent = msg.fallback;
			status.appendChild(a);
		}
		status.className = 'form-status show';
	}

	function setError(field, text) {
		var err = doc.getElementById(field.id + '-error');
		if (text) {
			field.setAttribute('aria-invalid', 'true');
			if (err) { err.textContent = text; }
		} else {
			field.removeAttribute('aria-invalid');
			if (err) { err.textContent = ''; }
		}
	}

	function check(field) {
		var v = field.value.trim();
		if (field.required && !v) { setError(field, msg.required); return false; }
		if (v && field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setError(field, msg.email); return false; }
		if (v && field.type === 'tel' && !/^\+?[\d\s()-]{7,}$/.test(v)) { setError(field, msg.phone); return false; }
		setError(field, '');
		return true;
	}

	function whatsappText(d) {
		var lines = [msg.greeting, '', msg.name + ': ' + d.name, msg.phoneLbl + ': ' + d.phone];
		if (d.email) { lines.push(msg.emailLbl + ': ' + d.email); }
		if (d.interest) { lines.push(msg.interest + ': ' + d.interest); }
		lines.push('', msg.message + ':', d.message);
		return lines.join('\n');
	}

	function deliver(d) {
		var endpoint = form.getAttribute('data-endpoint');
		if (endpoint) {
			submitBtn.disabled = true;
			fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
				.then(function (r) { if (!r.ok) { throw new Error(r.status); } say(msg.sent); form.reset(); })
				.catch(function () { say(msg.failed); })
				.then(function () { submitBtn.disabled = false; });
			return;
		}
		var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(whatsappText(d));
		say(msg.opening, url);
		window.open(url, '_blank', 'noopener');
	}

	var fields = Array.prototype.slice.call(form.querySelectorAll('input, select, textarea'));
	fields.forEach(function (f) {
		f.addEventListener('blur', function () { check(f); });
		f.addEventListener('input', function () { if (f.getAttribute('aria-invalid')) { check(f); } });
	});

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		var firstBad = null;
		fields.forEach(function (f) { if (!check(f) && !firstBad) { firstBad = f; } });
		if (firstBad) {
			say(msg.summary);
			firstBad.focus();
			return;
		}
		var el = form.elements;
		deliver({
			name: el.name.value.trim(), phone: el.phone.value.trim(), email: el.email.value.trim(),
			interest: el.interest.value, message: el.message.value.trim(), lang: lang
		});
	});
}());
