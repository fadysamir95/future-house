#!/usr/bin/env node
/* Writes docs/arabic-copy-review.md: every visible English string next to its
   Arabic counterpart, for native-speaker proofreading before launch.
   Run: node tools/export-copy.mjs   (re-run after editing tools/copy.mjs) */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { T, COMPANY } from './copy.mjs';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const flat = (o, p = '', out = {}) => {
	for (const [k, v] of Object.entries(o)) {
		const key = p ? `${p}.${k}` : k;
		if (typeof v === 'function') continue;
		if (Array.isArray(v)) v.forEach((x, i) => (typeof x === 'object' && !Array.isArray(x) ? flat(x, `${key}[${i}]`, out) : Array.isArray(x) ? x.forEach((y, j) => (out[`${key}[${i}][${j}]`] = y)) : (out[`${key}[${i}]`] = x)));
		else if (typeof v === 'object') flat(v, key, out);
		else out[key] = v;
	}
	return out;
};
const en = flat(T.en), ar = flat(T.ar);
const skip = /^(dir|locale|langName)$/;
const cell = (s) => String(s ?? '').replace(/\|/g, '\|').replace(/\n/g, ' ');
let md = `# Arabic copy review sheet

Generated from \`tools/copy.mjs\`. Please proofread the **Arabic** column and send back corrections; they are applied in \`tools/copy.mjs\`, then \`node tools/build.mjs\` regenerates the site.

## What to check
- Natural, professional Arabic suitable for the **Egyptian real estate market** (Modern Standard Arabic, not dialect).
- Meaning matches the English column. The English is the approved source; it only states confirmed facts.
- Terminology: "تسويق وسمسرة عقارية" (marketing & brokerage), "وحدات سكنية" (residential units), "الإيجار" (rental), "عقارات استثمارية" (investment properties).
- Brand name is always **${COMPANY.name.ar}** (confirmed spelling). Latin "Future House" appears only in the logo and technical metadata.
- Addresses/phones: Arabic address is "${COMPANY.address.ar}". Phone numbers stay in Latin digits on purpose, and are displayed left-to-right inside Arabic text.
- Strings containing \`{phone}\`, \`{email}\`, \`{address}\` are filled in automatically.

## Decisions already made (please confirm)
| Topic | Choice |
|---|---|
| "Real Estate Marketing & Brokerage" | تسويق وسمسرة عقارية |
| "Residential Properties" | وحدات سكنية |
| "Rentals" | الإيجار |
| Site name in titles | فيوتشر هاوس |
| Quote "Your Future House is our mission" (from the Instagram bio) | «بيتك المستقبلي هو مهمتنا» |

## Copy
| Key | English | Arabic | Reviewer notes |
|---|---|---|---|
`;
for (const k of Object.keys(en)) {
	if (skip.test(k) || /^(switchLabel|switchTitle)$/.test(k)) continue;
	if (en[k] === ar[k] && !/[A-Za-z]{3,}/.test(String(en[k]))) continue;
	md += `| \`${k}\` | ${cell(en[k])} | ${cell(ar[k])} | |\n`;
}
mkdirSync(join(ROOT, 'docs'), { recursive: true });
writeFileSync(join(ROOT, 'docs/arabic-copy-review.md'), md);
console.log('wrote docs/arabic-copy-review.md', Object.keys(en).length, 'strings');
