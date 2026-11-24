# Illustrative images (placeholders)

These images are **generic stock photography that shipped with the website template**.
They are *not* Future House projects or listings, and the site labels them
"Illustrative image" / "صورة توضيحية" wherever they appear.

| File | Used on | Replace with |
|---|---|---|
| `hero-1920.jpg`, `hero-960.jpg` | Home hero, call-to-action bands | Authentic Future House property or Alexandria / New Cairo photo (landscape, 3:2, at least 1920 px wide) |
| `about-living-room.jpg` | About page | Authentic office or property photo (about 1000 x 533) |

To replace: save the new photo over the same file name (same dimensions or larger) and,
once the image is genuinely a Future House photo, delete its label by removing the
`illustrative-tag` / `figcaption` markup in `tools/build.mjs`, then run `node tools/build.mjs`.
Elements that carry a placeholder image have a `data-replaceable-image` attribute for easy searching.
