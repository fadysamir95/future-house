# Brand assets

- `source/future-house-logo-original.jpg` – the original logo as supplied (never modify).
- `logo-black*.png`, `logo-white*.png` – transparent versions extracted from the JPG (black for light backgrounds, white for dark). The JPG is about 990 px wide, so **do not use these above ~600 px wide**.
- `favicon.ico`, `favicon-16.png`, `favicon-32.png` – house mark on the brand green, made only for small sizes (no upscaling).
- `og-image.jpg` – 1200 x 630 social-sharing image.

When the vector logo is available, drop in `favicon.svg` (house mark) and `logo.svg`;
`tools/build.mjs` automatically adds `<link rel="icon" type="image/svg+xml">` when `images/brand/favicon.svg` exists.
