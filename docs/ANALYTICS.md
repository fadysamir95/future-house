# Analytics: final configuration (GTM + GA4 + cookie consent)

Status: **documented and decided, not yet deployed or published.** Nothing in this file has been pushed, deployed or published to Google Tag Manager yet. The website code is unchanged by the decisions below.

## 1. Final architecture

```
Visitor ──> website (static HTML on Vercel)
              │  js/consent.js  (every page)
              │    • Basic consent mode: NOTHING from Google is requested until "Accept"
              │    • on Accept (or a stored "granted"): dataLayer + consent defaults, then loads GTM-T6RKB2PP once
              ▼
        Google Tag Manager container  GTM-T6RKB2PP   (the ONLY container on the site)
              │  Google tag (G-3MY48ED91V)  +  one GA4 event tag per interaction
              ▼
        GA4 property "Future House Website"  ·  stream 16406088137  ·  G-3MY48ED91V
```

| Item | Value |
|---|---|
| GTM container (website) | `GTM-T6RKB2PP`, set only in `tools/copy.mjs` (`ANALYTICS.gtmId`) |
| GA4 property / stream | "Future House Website", stream ID `16406088137` |
| GA4 Measurement ID | `G-3MY48ED91V`. It lives **inside GTM only**, never in the website code. |
| Old container | `GTM-PLNBGWCN`. **Not used by the website.** Kept (not deleted) until confirmed unused elsewhere. |
| Owner | the client's Google account (property and GTM account); developer access is read-only Viewer if needed |

## 2. Decisions (agreed)

1. **Reuse the existing GA4 property and Measurement ID** `G-3MY48ED91V`. The old container's Google tag already pointed at this same stream, so it is one property: no new property or stream, no data lost. **Never create another property or stream.**
2. **`GTM-T6RKB2PP` is the only container** on the website. A validator rule fails the build if a page has no container, a second container, or a Google script written directly into the HTML.
3. **The old container stays out of the website.** Do not delete it until confirmed unused elsewhere (see step 12 of the sequence). Never run both containers on the same pages: they carry the same Measurement ID and would double every hit.
4. **GA4 settings applied** (section 4): history-based page changes off, automatic user-provided data off, automatic outbound-click and form tracking off, Google signals off, 14-month retention.
5. **Review (Vercel) visits are identified as internal traffic** by GTM from the page hostname (no website-code change), and the GA4 internal-traffic filter stays in **Testing** until verified, then is activated.
6. **No second `page_view`:** exactly one automatic `page_view` per page load, from the Google tag.

## 3. What the website already does (unchanged)

| Piece | Where | What it does |
|---|---|---|
| Consent + GTM loader | `js/consent.js` (every page) | **Basic consent mode.** GTM is not requested until the visitor presses *Accept*. *Reject* or no answer loads nothing and sets no analytics cookies. Choice stored 12 months (`localStorage` key `fh_consent`). |
| Cookie bar | generated into every page, hidden until needed | *Accept* and *Reject* at equal size and prominence, English and Arabic, links to the privacy page. |
| Footer links | bottom bar of every page | "Privacy & cookies" and **"Cookie settings"** (reopens the bar so a choice can be changed or withdrawn). |
| Privacy page | `privacy.html`, `ar/privacy.html` | Plain-language notice of what the site does. **Draft: the client should review it legally.** It says no personal data is collected by analytics: that is why automatic user-provided data stays OFF. |
| Allowed hostnames | `HOSTS` at the top of `js/consent.js` | `futurehouseegy.com`, `www.futurehouseegy.com`, `futurehouseegy.vercel.app`. Any other host: no banner, no tracking. **At launch remove `futurehouseegy.vercel.app`** (a code change and a deploy, to be approved separately). |

Withdrawing later (Cookie settings, then Reject) deletes the `_ga*`, `_gid*` and `_gcl*` cookies and reloads the page without GTM. There is deliberately **no `<noscript>` GTM iframe** (it would load Google without consent).

### What the code pushes to `dataLayer` (after Accept only)
On load, in this order: `gtag('consent','default', {analytics_storage:'granted', functionality_storage:'granted', security_storage:'granted', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'})`, then `{page_language: 'en'|'ar', page_type: 'index'|'about-us'|…}` (plain values, no event), then the `gtm.js` start event. The site **never sends `page_view` and never contains a Measurement ID.**

| Event | When | Parameters |
|---|---|---|
| `whatsapp_click` | any `wa.me` link | `link_location` (header / footer / content) |
| `project_enquiry` | "Ask about this development" | `project_name`, `link_location` (not also counted as `whatsapp_click`) |
| `phone_click` | any `tel:` link | `link_location` |
| `email_click` | any `mailto:` link | `link_location` |
| `social_click` | Facebook, Instagram, LinkedIn, TikTok, YouTube, Threads links | `social_network`, `link_location` |
| `language_switch` | the EN/AR switch | `to_language` |
| `contact_form_submit` | a valid contact-form submission | `method` (whatsapp), `form_language`. **No name, phone, email or message.** |

## 4. GA4 settings still to apply by hand (client's Google Analytics account)

Admin → the property "Future House Website". **Do not create a new property or stream.**

| # | Where | Setting |
|---|---|---|
| 1 | Data streams → the web stream → Enhanced measurement (gear) → Page views → Advanced | **Page changes based on browser history events: OFF** (the home page has in-page anchor links that would otherwise create extra page views). |
| 2 | Same screen | **Outbound clicks: OFF** and **Form interactions: OFF** (our own events cover WhatsApp/social clicks and the contact form, which never posts anywhere). Also switch **Site search, Video engagement, File downloads: OFF** (the site has none). Keep **Page views** and **Scrolls** ON. |
| 3 | Data collection and modification → Data collection | **User-provided data collection: OFF.** **Google signals data collection: OFF** (stays disabled). |
| 4 | Data collection and modification → Data retention | **Event data retention: 14 months.** |
| 5 | Data collection and modification → Data filters → Create filter | Type **Internal traffic**, name `Vercel review visits`, parameter value `internal` (the default, matches `traffic_type`), state **Testing**. No IP rules are needed: GTM sets `traffic_type` itself (section 5). |
| 6 | Custom definitions → Custom dimensions (scope: Event) | `page_language`, `page_type`, `link_location`, `project_name`, `social_network`, `to_language` (optionally `method`, `form_language`). |
| 7 | Key events (after the events have been received, or create them by name) | `whatsapp_click`, `project_enquiry`, `phone_click`, `email_click`, `contact_form_submit`. Leave `social_click` and `language_switch` as ordinary events. |
| 8 | Property access management | Client stays Administrator. Developer, if needed for Realtime, as **Viewer** only. |
| 9 | Later, at launch | Edit the stream URL to the final domain (it does not affect collection). |

## 5. Google Tag Manager configuration to create (container `GTM-T6RKB2PP`)

Do all of this in the Workspace, test with Preview, and **publish only after testing and approval.**

**Settings:** Admin → Container settings → enable **Enable consent overview**. Variables → Configure → enable the built-in variables **Page Hostname** and **Page URL**.

**Variables**
| Name | Type | Value |
|---|---|---|
| `Const - GA4 Measurement ID` | Constant | `G-3MY48ED91V` |
| `DLV - page_language`, `page_type`, `link_location`, `project_name`, `social_network`, `to_language`, `method`, `form_language` | Data Layer Variable (version 2) | the key of the same name |
| `Lookup - Traffic Type` | RegEx Table | Input `{{Page Hostname}}`. Pattern `^(www\.)?futurehouseegy\.com$` → `production`. **Default value: `internal`** (so the Vercel review site and anything unknown is internal). |

**Tags** (every tag: Advanced settings → Consent settings → **Require additional consent: `analytics_storage`**)
| Tag | Type | Settings | Trigger |
|---|---|---|---|
| `Google tag - GA4` | **Google tag** | Tag ID `{{Const - GA4 Measurement ID}}`. Configuration parameters: `traffic_type` = `{{Lookup - Traffic Type}}`, `page_language` = `{{DLV - page_language}}`, `page_type` = `{{DLV - page_type}}`. Leave "Send page view" at its default (this is the single `page_view`). | **Initialization - All Pages** |
| `GA4 event - whatsapp_click` | Google Analytics: GA4 Event | Measurement ID variable above; event name `whatsapp_click`; parameter `link_location` | Custom Event `whatsapp_click` |
| `GA4 event - project_enquiry` | GA4 Event | `project_enquiry`; params `project_name`, `link_location` | Custom Event `project_enquiry` |
| `GA4 event - phone_click` | GA4 Event | `phone_click`; param `link_location` | Custom Event `phone_click` |
| `GA4 event - email_click` | GA4 Event | `email_click`; param `link_location` | Custom Event `email_click` |
| `GA4 event - social_click` | GA4 Event | `social_click`; params `social_network`, `link_location` | Custom Event `social_click` |
| `GA4 event - language_switch` | GA4 Event | `language_switch`; param `to_language` | Custom Event `language_switch` |
| `GA4 event - contact_form_submit` | GA4 Event | `contact_form_submit`; params `method`, `form_language` | Custom Event `contact_form_submit` |

Trigger names must match the event names exactly (Custom Event, "Use regex matching" off). The event tags inherit `traffic_type` from the Google tag because they use the same Measurement ID.

**No duplicates, by rule:** one Google tag only; no separate "GA4 Configuration" tag; **no `page_view` event tag**; no History Change trigger; no second container; no `gtag.js` snippet on the pages.

## 6. Deployment and testing sequence

| Step | Action | Needs approval |
|---|---|---|
| 1 | Apply the GA4 settings in section 4 (rows 1 to 4 and 6; filter in **Testing**). | no (client's accounts) |
| 2 | Build the GTM variables, tags and triggers in section 5 **in the Workspace; do not publish.** | no |
| 3 | Commit and push to `main` so Vercel deploys the review site (consent bar, `consent.js`, privacy page, plus the earlier unpushed work). Check: `https://futurehouseegy.vercel.app/js/consent.js` returns 200, the banner appears, Reject loads nothing. | **yes** |
| 4 | GTM **Preview** on `https://futurehouseegy.vercel.app`, press **Accept**. Check: Google tag fires once per page (`Initialization`), `traffic_type = internal`, consent shows `analytics_storage` granted, each event tag fires **once per click**, an in-page anchor click (`#services-sec`) adds **no** page_view, Arabic pages tracked with `page_language = ar`. | no |
| 5 | GA4 **DebugView** and **Realtime**: one `page_view` per navigation, events arrive with their parameters, review visits show `traffic_type = internal`. | no |
| 6 | **Publish the GTM container** (version name e.g. `v1 - GA4 + consent events`). | **yes** |
| 7 | Re-check on the live review site without Preview (Realtime). | no |
| 8 | After 24 to 48 hours, confirm the filter flags the review visits (Reports/Explorations with the "Test data filter name" dimension), then set the filter to **Active** (this is permanent for the data it removes). | **yes** |
| 9 | Create the key events and custom dimensions (section 4, rows 6 and 7). | no |
| 10 | Launch: register `futurehouseegy.com`, add it to the hosting, remove `futurehouseegy.vercel.app` from `HOSTS` in `js/consent.js`, deploy, update the stream URL. | **yes** |
| 11 | After launch, confirm in Realtime that production hits arrive with `traffic_type = production` and are not filtered. | no |
| 12 | Confirm the old container `GTM-PLNBGWCN` is not installed anywhere else (Tag Assistant / its install history), then pause or delete it. | **yes** |

## 7. Do-not list
- Do not create another GA4 property or data stream.
- Do not put the Measurement ID or a `gtag.js` snippet in the website code.
- Do not install two containers on a page; do not re-enable history-based page changes; do not add a separate `page_view` tag.
- Do not publish the container or activate the GA4 filter before testing.
- If anything beyond GA4 is added to GTM (advertising, pixels), the consent configuration and the privacy page must be updated first.
