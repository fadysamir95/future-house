#!/usr/bin/env node
/* Writes docs/image-inventory.md from tools/media.mjs:
 *   - summary, duplicates, items that need confirmation
 *   - the complete inventory of every file in images/social_media_images/
 *   - the permanent original -> new filename mapping with website location
 * Run: node tools/export-images-doc.mjs */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATALOG, USED, CATEGORIES, byFile } from './media.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'images/social_media_images');
if (!existsSync(SRC)) { console.error("The original library images/social_media_images/ was deleted at the client's request (2026-11-24). To re-export or re-inventory images, restore the JPEGs into that folder (re-download them from the official social channels); the optimised site copies in images/<folder>/ are unaffected."); process.exit(1); }
const MANIFEST = JSON.parse(readFileSync(join(ROOT, 'tools/media-manifest.json'), 'utf8'));

/* minimal JPEG header reader (no dependencies) */
function jpegSize(buf) {
	let i = 2;
	while (i < buf.length) {
		if (buf[i] !== 0xff) { i++; continue; }
		const m = buf[i + 1];
		if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
		i += 2 + buf.readUInt16BE(i + 2);
	}
	return { w: 0, h: 0 };
}

const files = readdirSync(SRC);
const known = new Set(CATALOG.map((c) => c.file));
const missing = files.filter((f) => !known.has(f)), extra = CATALOG.filter((c) => !files.includes(c.file));
if (missing.length || extra.length) throw new Error(`Catalog mismatch. Not catalogued: ${missing.join(', ')}; catalogued but absent: ${extra.map((e) => e.file).join(', ')}`);

const info = {};
const hashes = {};
for (const f of files) {
	const buf = readFileSync(join(SRC, f));
	info[f] = { ...jpegSize(buf), kb: Math.round(buf.length / 1024) };
	const h = createHash('md5').update(buf).digest('hex');
	(hashes[h] = hashes[h] || []).push(f);
}
const exactDupes = Object.values(hashes).filter((a) => a.length > 1);
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const count = (fn) => CATALOG.filter(fn).length;

let md = `# Social media image library: inventory and placement

Generated from \`tools/media.mjs\` by \`tools/export-images-doc.mjs\`. **The originals in \`images/social_media_images/\` are never modified, renamed or deleted**; website copies are made by \`tools/optimize-images.mjs\`.

## Summary

| | Count |
|---|---|
| Images in the library | ${CATALOG.length} (${files.filter((f) => f.startsWith('fb_')).length} Facebook, ${files.filter((f) => f.startsWith('ig_')).length} Instagram) |
| Used on the website | ${count((c) => c.decision === 'USE')} |
| Held, waiting for confirmation | ${count((c) => c.decision === 'HOLD')} |
| Not used (see reason per file) | ${count((c) => c.decision === 'SKIP')} |
| Exact duplicates | ${count((c) => c.decision === 'DUP')} |

Orientation: nearly all files are portrait or square social posters (not landscape photography), so none is suitable as a full-width hero background. Sizes: ${[...new Set(files.map((f) => `${info[f].w}x${info[f].h}`))].length} different dimensions; the four \`ig_\` files are low-resolution story frames (about 360 x 640).

### By category

| Category | Images | Used |
|---|---|---|
${Object.entries(CATEGORIES).map(([n, name]) => `| ${n}. ${name} | ${count((c) => c.cat === +n)} | ${count((c) => c.cat === +n && c.decision === 'USE')} |`).join('\n')}

## Duplicates and near-duplicates

- **Exact duplicates (identical bytes):** ${exactDupes.length ? exactDupes.map((a) => a.join(' = ')).join('; ') : 'none'}.
- **Visually similar sets (same template, different content):** the monochrome campaign posters (fb_004-009, 011), the rank cards (fb_025-031, fb_053-058, fb_069-076), the promotion cards (fb_087-097) and the carousel slides (fb_077-083). They are not duplicates; each shows a different person, message or slide.

## Needs your confirmation

1. **Second phone number.** Posters fb_001, 002, 003, 016, 017 and 038 print **01096440002**, which is different from the website phone (+20 155 338 2233, also printed on many posters) and from the WhatsApp number now on the site. They are held back until the company confirms which numbers are official.
2. **Staff names, photos and titles.** The Team page republishes announcements from the company's own channels. Please confirm each person agrees to appear on the website, that titles are current, and the correct spellings (the posts vary: Adham Elkady / El Kady, Asma Abdo / Abdou, Rodaina / Rodina, Zeinab / Zienb, Habiba / Habibah). Names are shown exactly as printed.
3. **Top performers.** fb_025-029 and fb_030 are shown as the Q2 2026 announcement because fb_030 states "Q2 (2026)" and the six cards share one design. fb_031 (a second "Rank 5", Alyaa Kamel) is held: confirm whether it is a tie or another list.
4. **Founding date.** fb_018 says "5 years" and fb_065 says "4 years"; the company profile says 2019. Confirm the milestone before using fb_065.
5. **Third-party developments.** The Developments page shows campaign posters for projects by other developers (Madinet Masr, La Vista, MMG, and others). Confirm Future House may show them and their brand marks, and that the "offers may have changed" disclaimer is acceptable. No price, down-payment or instalment claim is repeated in website text.
6. **Education content.** The Insights page rewrites the "5 keys" carousel and the first-time-buyer posts in neutral language (no growth or return guarantees) and marks it as general information. Please review.
7. **Higher-resolution originals.** ig_3 (Alex West gate) and ig_5 (Muruj under construction) look like authentic site photographs but are only about 360 x 640. Send the originals to use them.

## Complete inventory

| Original | Size | Category | Description | Embedded text | Decision | Placement / reason | New file | English alt | Arabic alt |
|---|---|---|---|---|---|---|---|---|---|
${CATALOG.map((c) => {
	const u = byFile(c.file);
	return `| ${c.file} | ${info[c.file].w}x${info[c.file].h} | ${cell(c.category)} | ${cell(c.desc)} | ${cell(c.text)} | ${c.decision} | ${cell(c.note)} | ${u ? `${u.folder}/${u.newName}` : ''} | ${u ? cell(u.alt.en) : ''} | ${u ? cell(u.alt.ar) : ''} |`;
}).join('\n')}

## Original to new filename mapping (images used on the website)

Each image is published as \`<new name>-640.webp\` (cards) and \`<new name>-1080.webp\` (full size, linked from the card so poster text stays readable).

| Original | New filename (images/...) | Website location | Published size |
|---|---|---|---|
${USED.map((u) => {
	const c = CATALOG.find((x) => x.file === u.file), m = MANIFEST[u.newName];
	return `| ${u.file} | ${u.folder}/${u.newName}.webp | ${cell(c.note)} | ${m ? `${m.sizes[1080].w}x${m.sizes[1080].h}, ${Math.round(m.sizes[1080].bytes / 1024)} KB (full) / ${Math.round(m.sizes[640].bytes / 1024)} KB (card)` : 'not yet generated'} |`;
}).join('\n')}
`;
writeFileSync(join(ROOT, 'docs/image-inventory.md'), md);
console.log(`wrote docs/image-inventory.md: ${CATALOG.length} images, ${USED.length} used`);
