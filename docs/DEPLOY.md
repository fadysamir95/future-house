# Deploying futurehouseegy.com

The site is plain static HTML/CSS/JS. **Upload the contents of `dist/`** to the web root, not the project folder.

```
node tools/build.mjs        # only if you edited copy or templates (regenerates the pages)
node tools/make-dist.mjs    # writes a clean dist/ (143 files, about 10 MB)
VALIDATE_ROOT=dist node tools/validate.mjs   # checks dist/ on its own: expect "17 pages OK"
```

`make-dist` starts from every page and follows each link, image, font and `url()` reference, so `dist/` contains exactly what the live site uses and nothing else. It is recreated each run and ignored by git.

## What goes live (the contents of `dist/`)

| Path | What |
|---|---|
| `index.html`, `about-us.html`, `services.html`, `projects.html`, `team.html`, `insights.html`, `faqs.html`, `contact.html` | English pages |
| `ar/` (same 8 pages) | Arabic pages |
| `404.html` | Error page (bilingual, `noindex`) |
| `robots.txt`, `sitemap.xml` | Crawler files (point to `https://futurehouseegy.com/`) |
| `favicon.ico` | Root favicon (browsers and crawlers request `/favicon.ico` by default) |
| `css/` | `bootstrap`, `font-awesome`, `flaticon`, `style`, `responsive`, `brand`, `motion`, `rtl`, `fonts` |
| `js/site.js` | The only script (menu, scroll-to-top, contact form, animations) |
| `fonts/` | Self-hosted Lato, Montserrat, Cairo (WOFF2) and the icon fonts |
| `images/brand/` | Logos, favicons, social-sharing image |
| `images/{projects,team,achievements,marketing,insights}/` | Optimised WebP (640 and 1080 px) |
| `images/illustrative/`, `images/resource/`, `images/icons/` | Hero photos (illustrative), card background, small UI icons |

## Deliberately NOT published

`tools/`, `docs/` (internal notes, Arabic review sheet, staff-consent notes), `.git`, `.gitignore`, `palette.png`, all `README.md` files, `images/brand/source/` (original logo JPG), `images/illustrative/source/` (2.7 MB hero original), `images/resource/source/` (2.7 MB card-background original), `images/icons/social/*.svg` (build inputs; the icons are inlined in the pages) and unused logo variants.

## Server settings to configure

1. **HTTPS** everywhere; redirect `http://` to `https://` and `www.` to the bare domain (canonical URLs use `https://futurehouseegy.com/`).
2. **Index and 404:** serve `index.html` at `/` and `ar/index.html` at `/ar/`; use `404.html` as the not-found page (it uses root-relative paths, so the site must live at the domain root).
3. **Compression:** gzip or Brotli for HTML, CSS, JS, SVG and fonts.
4. **Caching:** long cache (for example one year, `immutable`) for `/images/`, `/fonts/`, `/css/` and `/js/`; short cache (minutes) for the HTML pages. If you change an image or CSS file, rename it or add a version query to the reference.
5. Optional security headers: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.

## After the site is live

1. Open `https://futurehouseegy.com/`, `/ar/`, `/projects.html`, `/ar/contact.html`, `/robots.txt` and `/sitemap.xml`; check one wrong URL shows the 404 page.
2. **Google Search Console:** add the domain, submit `https://futurehouseegy.com/sitemap.xml`, then use URL Inspection on the home page and `/ar/`. Add Bing Webmaster Tools.
3. **Google Business Profile:** create or claim it (Roushdy address, confirmed phone, website link). Keep name, address and phone identical on the site, Google, Facebook and LinkedIn.
4. Put `https://futurehouseegy.com` in the bio of every social profile.
5. Run PageSpeed Insights on the home page and `/ar/` (mobile) and check Search Console's "Page indexing" and "Core Web Vitals" reports after a few days.
6. Test the contact form on a real phone (it opens WhatsApp with the message pre-filled).

## Still to confirm with the company (see `docs/image-inventory.md`)

Official phone numbers, staff consent for the Team page, permission to show third-party developer posters, and the native-Arabic proofreading of `docs/arabic-copy-review.md`.
