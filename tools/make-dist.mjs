#!/usr/bin/env node
/* Builds dist/ : a clean copy of exactly the files the live website needs.
 *
 *   node tools/build.mjs        (regenerate pages first, if you edited copy)
 *   node tools/make-dist.mjs    (writes dist/)
 *   VALIDATE_ROOT=dist node tools/validate.mjs   (checks dist/ on its own)
 *
 * Upload the CONTENTS of dist/ to the web root. It never contains tools/, docs/,
 * source images, README files, .git or anything else that is not reachable from a page.
 * How it works: start from every .html page, follow href/src/srcset/url()/@import
 * references through HTML and CSS, then add the few files that are only referenced by
 * absolute URL (social-sharing image, schema logo, root favicon, robots, sitemap). Nothing
 * is deleted from the project; dist/ is simply recreated each run.
 */
import { readdirSync, readFileSync, statSync, mkdirSync, copyFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, join, posix, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SKIP_DIRS = new Set(['.git', 'dist', 'tools', 'docs', 'node_modules', '.tmp-edge-profile']);

const all = [];
(function walk(d) {
	for (const e of readdirSync(d, { withFileTypes: true })) {
		if (SKIP_DIRS.has(e.name)) continue;
		const p = join(d, e.name);
		e.isDirectory() ? walk(p) : all.push(p.slice(ROOT.length + 1).split(sep).join('/'));
	}
})(ROOT);

const seen = new Set();
const queue = all.filter((f) => f.endsWith('.html'));
queue.forEach((f) => seen.add(f));
const ref = /(?:href|src|srcset|data-[a-z-]+)=["']([^"']+)["']|url\(\s*['"]?([^'")]+)['"]?\s*\)|@import\s+['"]([^'"]+)['"]/g;
const resolve = (from, r) => {
	r = r.split('#')[0].split('?')[0].trim();
	if (!r || /^(https?:|mailto:|tel:|data:|\/\/)/.test(r)) return null;
	return r.startsWith('/') ? r.slice(1) : posix.normalize(posix.join(posix.dirname(from), r));
};
while (queue.length) {
	const f = queue.pop();
	if (!/\.(html|css)$/.test(f)) continue;
	const text = readFileSync(join(ROOT, f), 'utf8');
	for (const m of text.matchAll(ref)) {
		const parts = /srcset/.test(m[0]) && (m[1] || '').includes(',') ? m[1].split(',').map((s) => s.trim().split(/\s+/)[0]) : [m[1] || m[2] || m[3]];
		for (const c of parts) {
			const r = c && resolve(f, c);
			if (r && all.includes(r) && !seen.has(r)) { seen.add(r); queue.push(r); }
		}
	}
}
/* referenced only by absolute URL (og:image, JSON-LD logo) or by crawlers */
for (const f of ['robots.txt', 'sitemap.xml', 'favicon.ico', '404.html', 'images/brand/og-image.jpg', 'images/brand/logo-black.png']) {
	if (!all.includes(f)) throw new Error(`Expected deploy file is missing: ${f}`);
	seen.add(f);
}

rmSync(DIST, { recursive: true, force: true });
let bytes = 0;
const byTop = {};
for (const f of [...seen].sort()) {
	const to = join(DIST, f);
	mkdirSync(dirname(to), { recursive: true });
	copyFileSync(join(ROOT, f), to);
	const size = statSync(to).size; bytes += size;
	const top = f.includes('/') ? f.split('/').slice(0, f.startsWith('images/') ? 2 : 1).join('/') : '(root files)';
	byTop[top] = byTop[top] || { n: 0, b: 0 }; byTop[top].n++; byTop[top].b += size;
}
const excluded = all.filter((f) => !seen.has(f));
console.log(`dist/: ${seen.size} files, ${(bytes / 1048576).toFixed(1)} MB\n`);
for (const [k, v] of Object.entries(byTop).sort()) console.log(`  ${k.padEnd(28)} ${String(v.n).padStart(4)} files  ${(v.b / 1024).toFixed(0).padStart(6)} KB`);
console.log(`\nLeft out (not needed by the live site): ${excluded.length} project files, plus tools/ docs/ .git`);
excluded.forEach((f) => console.log('  - ' + f));
