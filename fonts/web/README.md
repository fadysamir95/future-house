# Self-hosted web fonts

Lato, Montserrat and Cairo (Google Fonts), all licensed under the SIL Open Font License 1.1,
which permits self-hosting and redistribution. Only the Latin and Arabic subsets, WOFF2 format.

| File | Weights | Used for |
|---|---|---|
| `lato-latin-400/700.woff2` | 400, 700 | English body text |
| `montserrat-latin-var.woff2` | 400-700 | English headings, buttons, navigation |
| `cairo-arabic-var.woff2`, `cairo-latin-var.woff2` | 400-700 | All Arabic text (and Latin characters inside Arabic pages) |

`css/fonts.css` declares them with `font-display: swap`. Regenerate with `node tools/fetch-fonts.mjs`.
