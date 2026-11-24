#!/usr/bin/env node
/* Static checks for the generated pages: local links/assets resolve, ids are
   unique and referenced ids exist, one <h1>, images have alt, SEO tags present. */
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = ['index', 'about-us', 'services', 'faqs', 'contact'].flatMap((p) => [`${p}.html`, `ar/${p}.html`]).concat('404.html');
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
	for (const m of html.matchAll(/href="#([^"]+)"/g)) if (!html.includes(`id="${m[1]}"`)) err(f, `anchor #${m[1]} has no target`);
	const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
	ids.filter((x, i) => ids.indexOf(x) !== i).forEach((d) => err(f, `duplicate id ${d}`));
	for (const m of html.matchAll(/aria-(?:controls|describedby)="([^"]+)"/g)) m[1].split(' ').forEach((id) => { if (!ids.includes(id)) err(f, `aria ref to missing id ${id}`); });
	for (const m of html.matchAll(/<label for="([^"]+)"/g)) if (!ids.includes(m[1])) err(f, `label for missing id ${m[1]}`);
	const h1 = (html.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) err(f, `${h1} <h1> elements`);
	for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(m[0])) err(f, `img without alt: ${m[0].slice(0, 70)}`);
	for (const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) if (!/rel="[^"]*noopener/.test(m[0])) err(f, 'target=_blank without noopener');
	if (f !== '404.html') {
		for (const [re, name] of [[/<html lang="(en|ar)" dir="(ltr|rtl)"/, 'lang/dir'], [/<title>[^<]{10,}<\/title>/, 'title'], [/<meta name="description" content="[^"]{60,170}"/, 'description 60-170 chars'], [/<link rel="canonical" href="https:\/\/futurehouseegy\.com\//, 'canonical'], [/hreflang="x-default"/, 'hreflang x-default'], [/property="og:image"/, 'og:image'], [/name="twitter:card"/, 'twitter:card'], [/application\/ld\+json/, 'JSON-LD']])
			if (!re.test(html)) err(f, `missing ${name}`);
		const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
		try { JSON.parse(ld[1]); } catch { err(f, 'invalid JSON-LD'); }
	}
	if (/(youremail|Decorators|lorem|Dhaka|Australia|\+1800|Smouha)/i.test(html)) err(f, 'template/outdated placeholder text found');
}
console.log(errors ? `\n${errors} problem(s)` : `\n✓ ${pages.length} pages OK`);
process.exit(errors ? 1 : 0);
