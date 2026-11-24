#!/usr/bin/env node
/* Static checks for the generated pages: local links/assets resolve, ids are
   unique and referenced ids exist, one <h1>, images have alt, SEO tags present. */
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
import { PAGES, LEGAL, ANALYTICS } from './copy.mjs';
const root = process.env.VALIDATE_ROOT ? path.resolve(process.env.VALIDATE_ROOT) : path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = [...PAGES, ...LEGAL].flatMap((p) => [`${p}.html`, `ar/${p}.html`]).concat('404.html');
let errors = 0; const err = (f, m) => { errors++; console.log(`✗ ${f}: ${m}`); };
for (const f of pages) {
	const html = fs.readFileSync(path.join(root, f), 'utf8');
	const dir = path.posix.dirname(f);
	for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
		let u = m[1].split('#')[0].split('?')[0];
		if (!u || /^(https?:|mailto:|tel:|data:)/.test(u)) continue;
		const target = u.startsWith('/') ? u.slice(1) : path.posix.normalize(path.posix.join(dir, u));
		const t = target.endsWith('/') ? target + 'index.html' : target;
		if (!fs.existsSync(path.join(root, t))) err(f, `missing local target ${m[1]}`);
	}
	for (const m of html.matchAll(/srcset="([^"]+)"/g)) for (const part of m[1].split(',')) {
		const u = part.trim().split(/\s+/)[0]; if (!u || /^https?:/.test(u)) continue;
		const target = u.startsWith('/') ? u.slice(1) : path.posix.normalize(path.posix.join(dir, u));
		if (!fs.existsSync(path.join(root, target))) err(f, `missing srcset target ${u}`);
	}
	for (const m of html.matchAll(/<img[^>]*>/g)) {
		const tag = m[0]; if (/class="hero-bg"/.test(tag)) continue;           // decorative hero photo (alt="")
		const alt = (tag.match(/\salt="([^"]*)"/) || [])[1];
		if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) err(f, `img without width/height: ${tag.slice(0, 80)}`);
		if (/images\/(projects|team|achievements|marketing|insights)\//.test(tag)) {
			if (!alt || alt.length < 20) err(f, `informative image with weak alt text: ${tag.slice(0, 90)}`);
			if (!/loading="lazy"/.test(tag)) err(f, 'below-the-fold image without loading=lazy');
			if (f.startsWith('ar/') && !/[\u0600-\u06FF]/.test(alt || '')) err(f, 'Arabic page image has a non-Arabic alt');
			if (!f.startsWith('ar/') && /[\u0600-\u06FF]/.test(alt || '')) err(f, 'English page image has Arabic alt text');
		}
	}
	for (const m of html.matchAll(/href="#([^"]+)"/g)) if (!html.includes(`id="${m[1]}"`)) err(f, `anchor #${m[1]} has no target`);
	const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
	ids.filter((x, i) => ids.indexOf(x) !== i).forEach((d) => err(f, `duplicate id ${d}`));
	for (const m of html.matchAll(/aria-(?:controls|describedby)="([^"]+)"/g)) m[1].split(' ').forEach((id) => { if (!ids.includes(id)) err(f, `aria ref to missing id ${id}`); });
	for (const m of html.matchAll(/<label for="([^"]+)"/g)) if (!ids.includes(m[1])) err(f, `label for missing id ${m[1]}`);
	/* analytics: one GTM container only, never loaded statically, only via js/consent.js after consent */
	if (f !== '404.html') {
		const ids = [...html.matchAll(/GTM-[A-Z0-9]+/g)].map((m) => m[0]);
		const tags = (html.match(/<script[^>]*data-gtm-id=/g) || []).length;
		if (ANALYTICS.gtmId && (tags !== 1 || ids.length !== 1 || ids[0] !== ANALYTICS.gtmId)) err(f, `expected exactly one GTM container (${ANALYTICS.gtmId}), found tags=${tags} ids=${ids.join(',')}`);
		if (/googletagmanager\.com|google-analytics\.com|gtag\/js/.test(html)) err(f, 'analytics script referenced statically (must load only through js/consent.js after consent)');
	} else if (/GTM-|googletagmanager/.test(html)) err(f, '404 page must not carry analytics');
	const h1 = (html.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) err(f, `${h1} <h1> elements`);
	for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(m[0])) err(f, `img without alt: ${m[0].slice(0, 70)}`);
	for (const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) if (!/rel="[^"]*noopener/.test(m[0])) err(f, 'target=_blank without noopener');
	if (f !== '404.html') {
		for (const [re, name] of [[/<html lang="(en|ar)" dir="(ltr|rtl)"/, 'lang/dir'], [/<title>[^<]{10,}<\/title>/, 'title'], [/<meta name="description" content="[^"]{60,170}"/, 'description 60-170 chars'], [/<link rel="canonical" href="https:\/\/futurehouseegy\.com\//, 'canonical'], [/hreflang="x-default"/, 'hreflang x-default'], [/property="og:image"/, 'og:image'], [/name="twitter:card"/, 'twitter:card'], [/application\/ld\+json/, 'JSON-LD']])
			if (!re.test(html)) err(f, `missing ${name}`);
		const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
		try { JSON.parse(ld[1]); } catch { err(f, 'invalid JSON-LD'); }
	}
	if (/(youremail|Decorators|lorem|Dhaka|Australia|\+1800)/i.test(html)) err(f, 'template/outdated placeholder text found');
}
console.log(errors ? `\n${errors} problem(s)` : `\n✓ ${pages.length} pages OK`);
process.exit(errors ? 1 : 0);
