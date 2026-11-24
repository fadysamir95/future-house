#!/usr/bin/env node
/* Future House – static page generator (no dependencies).
 *
 *   node tools/build.mjs
 *
 * Writes the English pages (repo root), the Arabic pages (/ar), 404.html,
 * sitemap.xml and robots.txt. All company facts live in the COMPANY object
 * below, so the header, footer, contact page and structured data cannot drift
 * apart. The generated HTML is committed; the site itself stays plain static
 * HTML/CSS/JS and can be hosted anywhere.
 */
import { writeFileSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://futurehouseegy.com';
const YEAR = new Date().getFullYear();
const TODAY = new Date().toISOString().slice(0, 10);

import { COMPANY, SOCIAL, PAGES, T, TEAM, TESTIMONIALS } from './copy.mjs';

const ILLUSTRATIVE = { en: 'Illustrative image', ar: 'صورة توضيحية' };

/* --------------------------------------------------------------- helpers */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const OTHER = { en: 'ar', ar: 'en' };
const fileOf = (page, lang) => (lang === 'ar' ? `ar/${page}.html` : `${page}.html`);
const urlOf = (page, lang) => {
	if (page === 'index') return lang === 'ar' ? `${SITE}/ar/` : `${SITE}/`;
	return `${SITE}/${fileOf(page, lang)}`;
};
/* Scroll-reveal hook: elements get data-reveal (+ stagger index); css/motion.css + js/site.js do the rest.
   Content stays visible without JavaScript (the hidden state only exists under html.js). */
const rv = (i = 0, kind = '') => ` data-reveal${kind ? `="${kind}"` : ''} style="--i:${i}"`;
const ltr = (s) => `<span class="ltr-num" dir="ltr">${esc(s)}</span>`;

function socialIcon(s, lang, size = '') {
	const label = T[lang].followOn(s.label[lang]);
	const inner = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${s.svg}"/></svg>`;
	return `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${esc(label)}" title="${esc(s.label[lang])}">${inner}</a></li>`;
}
const socialList = (lang, cls = '') =>
	`<ul class="fh-social ${cls}">${SOCIAL.map((s) => socialIcon(s, lang)).join('')}</ul>`;

const waLink = (lang) => `https://wa.me/${COMPANY.wa}?text=${encodeURIComponent(T[lang].waGreeting)}`;

/* -------------------------------------------------------------- fragments */
function head(page, lang, extra = {}) {
	const t = T[lang];
	const m = extra.meta || t.meta[page];
	const pre = lang === 'ar' ? '../' : '';
	const canonical = urlOf(page, lang);
	const alt = ['en', 'ar'].map((l) => `<link rel="alternate" hreflang="${l}" href="${urlOf(page, l)}">`).join('\n') +
		`\n<link rel="alternate" hreflang="x-default" href="${urlOf(page, 'en')}">`;
	const ogImg = `${SITE}/images/brand/og-image.jpg`;
	return `<!DOCTYPE html>
<html lang="${lang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.desc)}">
<meta name="theme-color" content="#0a312c">
<script>document.documentElement.classList.add('js')</script>
<link rel="canonical" href="${canonical}">
${alt}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(COMPANY.name[lang])}">
<meta property="og:title" content="${esc(m.title)}">
<meta property="og:description" content="${esc(m.desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(t.logoAlt)}">
<meta property="og:locale" content="${t.locale}">
<meta property="og:locale:alternate" content="${T[OTHER[lang]].locale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(m.title)}">
<meta name="twitter:description" content="${esc(m.desc)}">
<meta name="twitter:image" content="${ogImg}">
<link rel="icon" href="${pre}favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="${pre}images/brand/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="${pre}images/brand/favicon-16.png">
${existsSync(join(ROOT, 'images/brand/favicon.svg')) ? `<link rel="icon" href="${pre}images/brand/favicon.svg" type="image/svg+xml">
` : ''}<link rel="preload" href="${pre}fonts/web/${lang === 'ar' ? 'cairo-arabic-var' : 'lato-latin-400'}.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${pre}css/fonts.css">
<link rel="stylesheet" href="${pre}css/bootstrap.css">
<link rel="stylesheet" href="${pre}css/font-awesome.css">
<link rel="stylesheet" href="${pre}css/flaticon.css">
<link rel="stylesheet" href="${pre}css/style.css">
<link rel="stylesheet" href="${pre}css/responsive.css">
<link rel="stylesheet" href="${pre}css/brand.css">
<link rel="stylesheet" href="${pre}css/motion.css">${lang === 'ar' ? `\n<link rel="stylesheet" href="${pre}css/rtl.css">` : ''}
${extra.jsonld ? `<script type="application/ld+json">${JSON.stringify(extra.jsonld)}</script>` : ''}
</head>`;
}

function header(page, lang) {
	const t = T[lang];
	const pre = lang === 'ar' ? '../' : '';
	const other = OTHER[lang];
	const switchHref = lang === 'en' ? `ar/${page}.html` : `../${page}.html`;
	const nav = PAGES.map((p) =>
		`<li${p === page ? ' class="current"' : ''}><a href="${p}.html"${p === page ? ' aria-current="page"' : ''}>${esc(t.nav[p])}</a></li>`).join('\n\t\t\t\t\t\t\t\t\t');
	return `<body>
<a class="skip-link" href="#main">${esc(t.skip)}</a>
<div class="page-wrapper">

<header class="main-header">
	<div class="header-top">
		<div class="auto-container">
			<div class="top-right">
				<ul>
					<li class="hide-sm"><span class="fa fa-envelope-o" aria-hidden="true"></span><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></li>
					<li><span class="fa fa-phone" aria-hidden="true"></span><a href="tel:${COMPANY.phoneTel}" aria-label="${esc(t.callLabel)} ${COMPANY.phoneDisplay}">${ltr(COMPANY.phoneDisplay)}</a></li>
					<li class="hide-sm"><span class="fa fa-whatsapp" aria-hidden="true"></span><a href="${waLink(lang)}" target="_blank" rel="noopener noreferrer">${esc(t.waLabel)}</a></li>
				</ul>
				${socialList(lang)}
			</div>
		</div>
	</div>

	<div class="main-box">
		<div class="auto-container">
			<div class="outer-container clearfix">
				<div class="logo-box">
					<div class="logo"><a href="index.html"><img src="${pre}images/brand/logo-black-300.png" srcset="${pre}images/brand/logo-black-300.png 300w, ${pre}images/brand/logo-black-600.png 600w" sizes="190px" width="190" height="60" alt="${esc(t.logoAlt)}"></a></div>
				</div>
				<button type="button" class="fh-menu-btn" aria-expanded="false" aria-controls="primary-nav" aria-label="${esc(t.menuOpen)}" data-open="${esc(t.menuOpen)}" data-close="${esc(t.menuClose)}"><span class="fa fa-bars" aria-hidden="true"></span></button>
				<div class="nav-outer clearfix">
					<nav class="main-menu" id="primary-nav" aria-label="${esc(t.mainNav)}">
						<ul class="navigation clearfix">
							${nav}
							<li><a class="lang-switch" href="${switchHref}" hreflang="${other}" lang="${other}" title="${esc(t.switchTitle)}">${esc(t.switchLabel)}</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>

<main id="main" tabindex="-1">
`;
}

function footer(lang) {
	const t = T[lang];
	const pre = lang === 'ar' ? '../' : '';
	const links = PAGES.map((p) => `<li><a href="${p}.html">${esc(t.nav[p])}</a></li>`).join('');
	return `</main>

<footer class="main-footer">
	<div class="auto-container">
		<div class="widgets-section">
			<div class="row clearfix">
				<div class="footer-column col-md-5 col-sm-12 col-xs-12">
					<div class="footer-widget about-widget">
						<div class="footer-logo"><figure><a href="index.html"><img src="${pre}images/brand/logo-white-300.png" srcset="${pre}images/brand/logo-white-300.png 300w, ${pre}images/brand/logo-white-600.png 600w" sizes="210px" width="210" height="66" alt="${esc(t.logoAlt)}" loading="lazy"></a></figure></div>
						<div class="widget-content">
							<p class="text">${esc(t.footer.about)}</p>
							<ul class="contact-info">
								<li><span class="icon fa fa-map-marker" aria-hidden="true"></span><a href="${COMPANY.mapsUrl}" target="_blank" rel="noopener noreferrer">${esc(COMPANY.address[lang])}</a></li>
								<li><span class="icon fa fa-phone" aria-hidden="true"></span><a href="tel:${COMPANY.phoneTel}">${ltr(COMPANY.phoneDisplay)}</a></li>
								<li><span class="icon fa fa-whatsapp" aria-hidden="true"></span><a href="${waLink(lang)}" target="_blank" rel="noopener noreferrer">${esc(t.waLabel)} ${ltr(COMPANY.phoneDisplay)}</a></li>
								<li><span class="icon fa fa-envelope-o" aria-hidden="true"></span><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-column col-md-3 col-sm-6 col-xs-12">
					<div class="footer-widget">
						<h2 class="fh-foot-title">${esc(t.footer.links)}</h2>
						<ul class="fh-foot-links">${links}</ul>
					</div>
				</div>
				<div class="footer-column col-md-4 col-sm-6 col-xs-12">
					<div class="footer-widget">
						<h2 class="fh-foot-title">${esc(t.footer.follow)}</h2>
						${socialList(lang, 'large')}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="auto-container">
			<div class="clearfix">
				<div class="pull-left"><div class="copyright">&copy; ${YEAR} <a href="index.html">${esc(COMPANY.name[lang])}</a>. ${esc(t.footer.rights)}</div></div>
			</div>
		</div>
	</div>
</footer>

</div>

<button type="button" class="scroll-to-top" aria-label="${esc(t.toTop)}"><span class="fa fa-long-arrow-up" aria-hidden="true"></span></button>

<script src="${pre}js/site.js" defer></script>
</body>
</html>
`;
}

function pageTitle(page, lang, title) {
	const t = T[lang];
	const crumbs = page === 'index' ? '' : `
<section class="page-info">
	<div class="auto-container clearfix">
		<nav aria-label="${esc(t.breadcrumb)}">
			<ol class="bread-crumb clearfix">
				<li><a href="index.html">${esc(t.home)}</a></li>
				<li aria-current="page">${esc(title)}</li>
			</ol>
		</nav>
	</div>
</section>`;
	return `<section class="page-title">
	<div class="auto-container">
		<h1>${esc(title)}</h1>
	</div>
</section>${crumbs}
`;
}

/* Optional sections: render only when authentic content has been added in copy.mjs */
const teamSection = (lang) => !TEAM.length ? '' : `<section class="fh-section"><div class="auto-container"><div class="fh-section-head"><h2>${esc(T[lang].teamTitle || (lang === 'ar' ? 'فريقنا' : 'Our Team'))}</h2></div><div class="row fh-row-equal">${TEAM.map((m) => `<div class="col-md-3 col-sm-6"><div class="fh-card text-center"><img src="${lang === 'ar' ? '../' : ''}${m.photo}" alt="${esc(m.name[lang])}" width="160" height="160" loading="lazy" style="border-radius:50%;margin-bottom:14px"><h3>${esc(m.name[lang])}</h3><p>${esc(m.role[lang])}</p></div></div>`).join('')}</div></div></section>`;
const testimonialSection = (lang) => !TESTIMONIALS.length ? '' : `<section class="fh-section tint"><div class="auto-container"><div class="fh-section-head"><h2>${lang === 'ar' ? 'آراء عملائنا' : 'What Our Clients Say'}</h2></div><div class="row fh-row-equal">${TESTIMONIALS.map((q) => `<div class="col-md-4 col-sm-12"><figure class="fh-card"><blockquote>${esc(q.quote[lang])}</blockquote><figcaption><strong>${esc(q.author[lang])}</strong>, ${esc(q.role[lang])}</figcaption></figure></div>`).join('')}</div></div></section>`;

const ctaBand = (lang, reveal = false) => {
	const t = T[lang];
	const pre = lang === 'ar' ? '../' : '';
	return `<section class="call-to-action" style="background-image:linear-gradient(rgba(10,49,44,.72),rgba(10,49,44,.82)),url(${pre}images/illustrative/hero-960.jpg);">
	<div class="auto-container">
		<div class="row"${reveal ? rv(0) : ''}>
			<div class="text">${esc(t.cta.text)}</div>
			<h2>${esc(t.cta.h2)}</h2>
			<div class="actions">
				<a class="theme-btn btn-ecru" href="${waLink(lang)}" target="_blank" rel="noopener noreferrer">${esc(t.cta.c1)}</a>
				<a class="theme-btn btn-outline-light" href="contact.html">${esc(t.cta.c2)}</a>
			</div>
		</div>
	</div>
</section>
`;
};

const serviceCard = (s, i, lang, reveal = false) => {
	const pre = lang === 'ar' ? '../' : '';
	return `<div class="service-block-two col-lg-4 col-md-6 col-sm-12 col-xs-12"${reveal ? rv(i % 3) : ''}>
	<div class="inner-box">
		<div class="image-layer" style="background-image:url(${pre}images/resource/service-block-two-bg.jpg)"></div>
		<div class="icon-box"><span class="${s.icon}" aria-hidden="true"></span></div>
		<h3>${esc(s.h)}</h3>
		<div class="text">${esc(s.t)}</div>
		<div class="bottom-icon"><span class="${s.icon}" aria-hidden="true"></span></div>
	</div>
</div>`;
};

/* ---------------------------------------------------------------- schema */
function orgSchema(lang) {
	const t = T[lang];
	return {
		'@type': ['RealEstateAgent', 'Organization'],
		'@id': `${SITE}/#organization`,
		name: 'Future House',
		alternateName: 'فيوتشر هاوس',
		url: `${SITE}/`,
		logo: { '@type': 'ImageObject', url: `${SITE}/images/brand/logo-black.png` },
		image: `${SITE}/images/brand/og-image.jpg`,
		description: t.welcome.text,
		foundingDate: COMPANY.founded,
		email: COMPANY.email,
		telephone: COMPANY.phoneTel,
		address: {
			'@type': 'PostalAddress',
			streetAddress: lang === 'ar' ? 'رشدي، أبو قير، مبنى 405 ب' : 'Roushdy, Abu Qir, Building 405 B',
			addressLocality: lang === 'ar' ? 'الإسكندرية' : 'Alexandria',
			addressCountry: 'EG'
		},
		areaServed: [
			{ '@type': 'City', name: lang === 'ar' ? 'الإسكندرية' : 'Alexandria' },
			{ '@type': 'City', name: lang === 'ar' ? 'القاهرة الجديدة' : 'New Cairo' }
		],
		sameAs: SOCIAL.map((s) => s.url)
	};
}
const websiteSchema = (lang) => ({
	'@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'Future House',
	inLanguage: ['en', 'ar'], publisher: { '@id': `${SITE}/#organization` }
});
const breadcrumb = (page, lang) => ({
	'@type': 'BreadcrumbList',
	itemListElement: [
		{ '@type': 'ListItem', position: 1, name: T[lang].home, item: urlOf('index', lang) },
		{ '@type': 'ListItem', position: 2, name: T[lang].nav[page], item: urlOf(page, lang) }
	]
});

/* ----------------------------------------------------------------- pages */
function pageIndex(lang) {
	const t = T[lang];
	const pre = lang === 'ar' ? '../' : '';
	const jsonld = { '@context': 'https://schema.org', '@graph': [orgSchema(lang), websiteSchema(lang), { '@type': 'WebPage', url: urlOf('index', lang), name: t.meta.index.title, inLanguage: lang, isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': `${SITE}/#organization` } }] };
	const values = t.values.map((v, i) => `<div class="service-block-one"${rv(i)}>
	<div class="inner-box">
		<div class="icon-box"><span class="${v.icon}" aria-hidden="true"></span></div>
		<h3>${esc(v.h)}</h3>
		<div class="category">${esc(v.cat)}</div>
		<div class="text">${esc(v.t)}</div>
	</div>
</div>`).join('\n');
	const areaIcons = ['fa-map-marker', 'fa-building-o', 'fa-compass'];
	const areas = t.areas.items.map((a, i) => `<div class="col-md-4 col-sm-12"${rv(i)}><div class="fh-card"><div class="icon"><span class="fa ${areaIcons[i]}" aria-hidden="true"></span></div><h3>${esc(a.h)}</h3><p>${esc(a.t)}</p></div></div>`).join('\n');
	const channels = SOCIAL.map((s, i) => {
		const icon = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${s.svg}"/></svg>`;
		const verb = s.id === 'youtube' || s.id === 'tiktok' ? t.channels.watch : t.channels.follow;
		return `<div class="col-md-4 col-sm-6 col-xs-12"${rv(i % 3)}><div class="fh-card"><div class="icon">${icon}</div><h3>${esc(s.label[lang])}</h3><p><span dir="ltr">${esc(s.handle)}</span></p><a class="more" href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(verb)} <span class="sr-only-text">${esc(s.label[lang])}</span></a></div></div>`;
	}).join('\n');
	return head('index', lang, { jsonld }) + header('index', lang) + `
<section class="hero">
	<img src="${pre}images/illustrative/hero-1920.jpg" srcset="${pre}images/illustrative/hero-960.jpg 960w, ${pre}images/illustrative/hero-1920.jpg 1920w" sizes="100vw" alt="" width="1920" height="1280" fetchpriority="high" class="hero-bg">
	<span class="illustrative-tag" data-replaceable-image>${esc(ILLUSTRATIVE[lang])}</span>
	<div class="auto-container">
		<span class="eyebrow">${esc(t.hero.eyebrow)}</span>
		<h1>${esc(t.hero.h1)}</h1>
		<p class="lead-text">${esc(t.hero.lead)}</p>
		<div class="actions">
			<a class="theme-btn btn-style-one" href="#services-sec">${esc(t.hero.cta1)}</a>
			<a class="theme-btn btn-style-two" href="${waLink(lang)}" target="_blank" rel="noopener noreferrer">${esc(t.hero.cta2)}</a>
		</div>
	</div>
</section>

<section class="welcome-section">
	<div class="auto-container">
		<div class="row clearfix">
			<div class="col-md-6 col-sm-12 col-xs-12 welcome-column">
				<div class="inner-content"${rv(0, 'inline-start')}>
					<h2>${esc(t.welcome.h2)}</h2>
					<h3>${esc(t.welcome.h3)}</h3>
					<p class="text">${esc(t.welcome.text)}</p>
					<p><a class="theme-btn btn-style-one" href="about-us.html">${esc(t.welcome.link)}</a></p>
				</div>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12 service-column">
${values}
			</div>
		</div>
	</div>
</section>

<section class="best-service-section" id="services-sec">
	<div class="auto-container">
		<div class="fh-section-head"${rv()}>
			<div class="sub-title">${esc(t.servicesSec.sub)}</div>
			<h2>${esc(t.servicesSec.h2)}</h2>
		</div>
		<div class="row clearfix">
${t.services.map((s, i) => serviceCard(s, i, lang, true)).join('\n')}
		</div>
		<p class="text-center"${rv()}><a class="theme-btn btn-style-one" href="services.html">${esc(t.servicesSec.all)}</a></p>
	</div>
</section>

<section class="fh-section tint">
	<div class="auto-container">
		<div class="fh-section-head"${rv()}><div class="sub-title">${esc(t.areas.sub)}</div><h2>${esc(t.areas.h2)}</h2></div>
		<div class="row fh-row-equal">
${areas}
		</div>
	</div>
</section>

<section class="fh-section">
	<div class="auto-container">
		<div class="fh-section-head"${rv()}><div class="sub-title">${esc(t.channels.sub)}</div><h2>${esc(t.channels.h2)}</h2><p>${esc(t.channels.p)}</p></div>
		<div class="row fh-row-equal">
${channels}
		</div>
	</div>
</section>

${teamSection(lang)}${testimonialSection(lang)}${ctaBand(lang, true)}` + footer(lang);
}

function pageAbout(lang) {
	const t = T[lang]; const a = t.about;
	const jsonld = { '@context': 'https://schema.org', '@graph': [{ '@type': 'AboutPage', url: urlOf('about-us', lang), name: t.meta['about-us'].title, inLanguage: lang, about: { '@id': `${SITE}/#organization` } }, breadcrumb('about-us', lang)] };
	const facts = a.facts.map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${esc(v)}</li>`).join('');
	const steps = a.steps.map((s) => `<li><h3>${esc(s.h)}</h3><p>${esc(s.t)}</p></li>`).join('');
	return head('about-us', lang, { jsonld }) + header('about-us', lang) + pageTitle('about-us', lang, a.title) + `
<section class="fh-section">
	<div class="auto-container">
		<div class="row">
			<div class="col-md-7 col-sm-12">
				<div class="fh-section-head start"><h2 style="font-size:30px">${esc(a.h2)}</h2></div>
				<p style="font-size:17px">${esc(a.p1)}</p>
				<p style="font-size:17px">${esc(a.p2)}</p>
				<p style="font-size:17px"><strong>${esc(a.p3)}</strong></p>
				<p><a class="theme-btn btn-style-one" href="services.html">${esc(a.servicesLink)}</a></p>
			</div>
			<div class="col-md-5 col-sm-12">
				<figure class="fh-figure" data-replaceable-image><img src="${lang === 'ar' ? '../' : ''}images/illustrative/about-living-room.jpg" width="1000" height="533" alt="" loading="lazy"><figcaption>${esc(ILLUSTRATIVE[lang])}</figcaption></figure>
				<div class="fh-card">
					<h3>${esc(a.factsTitle)}</h3>
					<ul style="list-style:none;padding:0;margin:0;line-height:2.1">${facts}</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="fh-section tint">
	<div class="auto-container">
		<div class="fh-section-head"><div class="sub-title">${esc(a.howSub)}</div><h2>${esc(a.howH2)}</h2></div>
		<div class="row"><div class="col-md-8 col-md-offset-2 col-sm-12"><ol class="fh-steps">${steps}</ol></div></div>
	</div>
</section>

${ctaBand(lang)}` + footer(lang);
}

function pageServices(lang) {
	const t = T[lang]; const s = t.servicesPage;
	const jsonld = { '@context': 'https://schema.org', '@graph': [{ '@type': 'WebPage', url: urlOf('services', lang), name: t.meta.services.title, inLanguage: lang, about: { '@id': `${SITE}/#organization` } }, breadcrumb('services', lang)] };
	return head('services', lang, { jsonld }) + header('services', lang) + pageTitle('services', lang, s.title) + `
<section class="best-service-section">
	<div class="auto-container">
		<div class="fh-section-head"><div class="sub-title">${esc(s.sub)}</div><h2>${esc(s.h2)}</h2><p>${esc(s.p)}</p></div>
		<div class="row clearfix">
${t.services.map((x, i) => serviceCard(x, i, lang)).join('\n')}
		</div>
	</div>
</section>

${ctaBand(lang)}` + footer(lang);
}

function fill(str, lang) {
	return str.replace('{phone}', COMPANY.phoneDisplay).replace('{email}', COMPANY.email).replace('{address}', COMPANY.address[lang]);
}

function pageFaqs(lang) {
	const t = T[lang]; const f = t.faq;
	const items = f.items.map(([q, a]) => [q, fill(a, lang)]);
	const jsonld = { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', inLanguage: lang, mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }, breadcrumb('faqs', lang)] };
	const list = items.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><div class="answer"><p>${esc(a)}</p></div></details>`).join('\n');
	return head('faqs', lang, { jsonld }) + header('faqs', lang) + pageTitle('faqs', lang, f.title) + `
<section class="fh-section">
	<div class="auto-container">
		<div class="fh-section-head"><div class="sub-title">${esc(f.sub)}</div><h2>${esc(f.h2)}</h2></div>
		<div class="fh-faq">
${list}
		</div>
	</div>
</section>

${ctaBand(lang)}` + footer(lang);
}

function pageContact(lang) {
	const t = T[lang]; const c = t.contact; const f = c.f;
	const jsonld = { '@context': 'https://schema.org', '@graph': [{ '@type': 'ContactPage', url: urlOf('contact', lang), name: t.meta.contact.title, inLanguage: lang, about: { '@id': `${SITE}/#organization` } }, breadcrumb('contact', lang)] };
	const opts = c.interests.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join('');
	return head('contact', lang, { jsonld }) + header('contact', lang) + pageTitle('contact', lang, c.title) + `
<section class="fh-section">
	<div class="auto-container">
		<div class="fh-section-head"><div class="sub-title">${esc(c.sub)}</div><h2>${esc(c.h2)}</h2><p>${esc(c.p)}</p></div>
		<div class="row">
			<div class="col-md-5 col-sm-12 col-xs-12">
				<h2 style="font-size:22px;font-weight:700;margin-bottom:6px">${esc(c.detailsH)}</h2>
				<ul class="fh-contact-list">
					<li><span class="ico fa fa-map-marker" aria-hidden="true"></span><div><h3>${esc(t.addrLabel)}</h3><p>${esc(COMPANY.address[lang])}<br><a href="${COMPANY.mapsUrl}" target="_blank" rel="noopener noreferrer">${esc(c.openMap)}</a></p></div></li>
					<li><span class="ico fa fa-phone" aria-hidden="true"></span><div><h3>${esc(t.callLabel)}</h3><p><a href="tel:${COMPANY.phoneTel}">${ltr(COMPANY.phoneDisplay)}</a></p></div></li>
					<li><span class="ico fa fa-whatsapp" aria-hidden="true"></span><div><h3>${esc(t.waLabel)}</h3><p><a href="${waLink(lang)}" target="_blank" rel="noopener noreferrer">${ltr(COMPANY.phoneDisplay)}</a></p></div></li>
					<li><span class="ico fa fa-envelope-o" aria-hidden="true"></span><div><h3>${esc(t.emailLabel)}</h3><p><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></p></div></li>${COMPANY.hours ? `
					<li><span class="ico fa fa-clock-o" aria-hidden="true"></span><div><h3>${lang === 'ar' ? 'ساعات العمل' : 'Opening hours'}</h3><p>${esc(COMPANY.hours[lang])}</p></div></li>` : ''}
				</ul>
				<h2 style="font-size:22px;font-weight:700;margin:28px 0 14px">${esc(c.followH)}</h2>
				${socialList(lang, 'on-light large')}
			</div>
			<div class="col-md-7 col-sm-12 col-xs-12">
				<h2 style="font-size:22px;font-weight:700;margin-bottom:18px">${esc(c.formH)}</h2>
				<form id="contact-form" class="fh-form" novalidate data-wa="${COMPANY.wa}" data-messages="${esc(JSON.stringify(t.formMsg))}">
					<div class="field"><label for="f-name">${esc(f.name)} <span class="req" aria-hidden="true">*</span><span class="sr-only-text"> (${esc(f.req)})</span></label><input id="f-name" name="name" type="text" autocomplete="name" required aria-describedby="f-name-error"><div class="error" id="f-name-error" aria-live="polite"></div></div>
					<div class="field"><label for="f-phone">${esc(f.phone)} <span class="req" aria-hidden="true">*</span><span class="sr-only-text"> (${esc(f.req)})</span></label><input id="f-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required aria-describedby="f-phone-error"><div class="error" id="f-phone-error" aria-live="polite"></div></div>
					<div class="field"><label for="f-email">${esc(f.email)}</label><input id="f-email" name="email" type="email" autocomplete="email" aria-describedby="f-email-error"><div class="error" id="f-email-error" aria-live="polite"></div></div>
					<div class="field"><label for="f-interest">${esc(f.interest)}</label><select id="f-interest" name="interest" aria-describedby="f-interest-error">${opts}</select><div class="error" id="f-interest-error" aria-live="polite"></div></div>
					<div class="field"><label for="f-message">${esc(f.msg)} <span class="req" aria-hidden="true">*</span><span class="sr-only-text"> (${esc(f.req)})</span></label><textarea id="f-message" name="message" required aria-describedby="f-message-error"></textarea><div class="error" id="f-message-error" aria-live="polite"></div></div>
					<button type="submit" class="theme-btn btn-style-one">${esc(f.send)}</button>
					<p class="hint">${esc(c.hint.replace('{email}', COMPANY.email))}</p>
					<div class="form-status" role="status" aria-live="polite"></div>
				</form>
			</div>
		</div>
	</div>
</section>
` + footer(lang);
}

function page404() {
	const en = T.en.notFound; const ar = T.ar.notFound;
	return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(en.title)}</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="stylesheet" href="/css/fonts.css">
<style>
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f6f2e4;color:#212121;font-family:Montserrat,Cairo,sans-serif;text-align:center;padding:24px}
img{width:240px;height:auto;margin-bottom:24px}h1{color:#0a312c;margin:0 0 8px}p{margin:0 0 20px;font-size:17px}
a{display:inline-block;margin:6px;padding:12px 26px;background:#0a312c;color:#fff;text-decoration:none;border-radius:3px;font-weight:700}
a:focus-visible{outline:3px solid #b8860b;outline-offset:2px}
</style>
</head>
<body>
<main>
<img src="/images/brand/logo-black-300.png" width="240" height="76" alt="Future House">
<h1>${esc(en.h1)} <span lang="ar">| ${esc(ar.h1)}</span></h1>
<p>${esc(en.p)}</p>
<p lang="ar" dir="rtl">${esc(ar.p)}</p>
<a href="/">${esc(en.home)}</a><a href="/ar/" lang="ar">${esc(ar.home)}</a>
</main>
</body>
</html>
`;
}

/* ------------------------------------------------------------------ emit */
const builders = { index: pageIndex, 'about-us': pageAbout, services: pageServices, faqs: pageFaqs, contact: pageContact };
function write(rel, content) {
	const full = join(ROOT, rel);
	mkdirSync(dirname(full), { recursive: true });
	writeFileSync(full, content, 'utf8');
	console.log('wrote', rel);
}

for (const lang of ['en', 'ar']) for (const p of PAGES) write(fileOf(p, lang), builders[p](lang));
write('404.html', page404());
/* Browsers and crawlers request /favicon.ico by default: keep a copy at the site root (source: images/brand/favicon.ico) */
copyFileSync(join(ROOT, 'images/brand/favicon.ico'), join(ROOT, 'favicon.ico'));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['en', 'ar'].flatMap((lang) => PAGES.map((p) => `	<url>
		<loc>${urlOf(p, lang)}</loc>
		<lastmod>${TODAY}</lastmod>
${['en', 'ar'].map((l) => `		<xhtml:link rel="alternate" hreflang="${l}" href="${urlOf(p, l)}"/>`).join('\n')}
		<xhtml:link rel="alternate" hreflang="x-default" href="${urlOf(p, 'en')}"/>
	</url>`)).join('\n')}
</urlset>
`;
write('sitemap.xml', sitemap);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
