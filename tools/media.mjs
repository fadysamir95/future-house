/* Future House – media catalog.
 *
 * Single source of truth for the social-media image library (95 files that were in
 * images/social_media_images/). NOTE: that originals folder was deleted at the client's request on
 * 2026-11-24; the catalog, alt text and optimised website copies remain. To re-export, restore the JPEGs there.
 *
 *   CATALOG – every one of the 95 source files with category, description,
 *             embedded text, decision (USE / HOLD / SKIP / DUP) and the reason.
 *   USED    – the subset published on the website, with SEO file name, folder,
 *             English/Arabic alt text and caption data.
 *
 * Workflow:  node tools/optimize-images.mjs   (copies + optimises the USED images)
 *            node tools/export-images-doc.mjs (writes docs/image-inventory.md)
 *            node tools/build.mjs             (builds pages using the manifest)
 */

export const CATEGORIES = {
	1: 'Residential Properties', 2: 'Commercial Properties', 3: 'Real Estate Projects', 4: 'Property Promotions',
	5: 'Company Branding', 6: 'Team Members', 7: 'Awards & Achievements', 8: 'Customer Education',
	9: 'Company Activities', 10: 'Social Media Campaigns', 11: 'General Marketing Materials'
};

const PHONE2 = 'shows a second phone number (01096440002) that differs from the site phone; confirm before publishing';

/* [file, category, description, embedded text, decision, reason / placement] */
export const CATALOG = [
	['fb_001.jpg', 8, 'Black-and-white Arabic poster: five tips for a first property purchase, with English summary', 'Arabic + English; 2026; 01096440002; @futurehouseegy', 'HOLD', 'Poster ' + PHONE2 + '. Its text is reused (re-written) in the Insights article.'],
	['fb_002.jpg', 8, 'Black-and-white Arabic poster: "small details make the big difference" with English paragraph on price, location, payment plans and contract', 'Arabic + English; 01096440002', 'HOLD', 'Poster ' + PHONE2 + '.'],
	['fb_003.jpg', 3, 'Muruj residential tower in Smouha (Arabic poster, "STM Muruj", 2026)', 'Arabic + English; 01096440002', 'HOLD', 'Only Arabic-language project poster, but it ' + PHONE2 + '. The location (Smouha) is used in the Muruj caption.'],
	['fb_004.jpg', 10, 'Black-and-white brand campaign: "Building better futures", modern white villas', 'English tagline', 'USE', 'About page, "From our campaigns" strip'],
	['fb_005.jpg', 10, 'Black-and-white brand campaign: "Defined by design", illuminated staircase', 'English tagline', 'SKIP', 'Interior stock-style visual; four stronger campaign posters already used.'],
	['fb_006.jpg', 10, 'Black-and-white brand campaign: "More than just a property", glass tower', 'English tagline', 'USE', 'About page, "From our campaigns" strip'],
	['fb_007.jpg', 10, 'Black-and-white brand campaign: "Built on trust", white doorway and stairs', 'English tagline', 'USE', 'About page, "From our campaigns" strip'],
	['fb_008.jpg', 10, 'Black-and-white brand campaign: "Find your place", modern building facade', 'English tagline', 'USE', 'About page, "From our campaigns" strip'],
	['fb_009.jpg', 10, 'Black-and-white brand campaign: "Invest in what matters", villa with pool', 'English tagline', 'SKIP', 'Overflow of the campaign set (identical copy: fb_011).'],
	['fb_010.jpg', 3, 'Muruj development poster: "Your future on your terms" (10% down payment, up to 10 years instalments)', 'English; MURUJ', 'USE', 'Developments page (Muruj)'],
	['fb_011.jpg', 10, 'Exact duplicate of fb_009', 'English tagline', 'DUP', 'Byte-identical to fb_009.'],
	['fb_012.jpg', 11, '3D concept art: illuminated Future House signage on a road-shaped structure at night', 'Logo only', 'SKIP', 'Concept artwork, not a real installation; dark portrait image with no website placement.'],
	['fb_013.jpg', 10, 'National-occasion greeting (6 October victory)', 'English', 'SKIP', 'Seasonal and unrelated to services.'],
	['fb_014.jpg', 5, 'Facebook cover banner: logo, "Your future house is our mission", black-and-white villa', 'English', 'SKIP', '1280 px wide, too small for a full-width section; logo and mission line already on the site.'],
	['fb_016.jpg', 11, '"You don\'t need more listings. You need the right ones." with mock listing cards', 'English; 01096440002; @futurehouse, @futurehouseegy', 'HOLD', 'Poster ' + PHONE2 + '. Good candidate for the Services page once confirmed.'],
	['fb_017.jpg', 8, '"Buying a property? Start with your needs": location, budget, lifestyle, future plans', 'English; 01096440002', 'HOLD', 'Poster ' + PHONE2 + '. Its text is reused (re-written) in the Insights article.'],
	['fb_018.jpg', 9, 'Fifth-anniversary collage of real team photos: "Five years ago it started with a vision... One Future House family"', 'English', 'USE', 'About page (company story)'],
	['fb_019.jpg', 10, 'Screenshot of an Instagram post (key held over a house) with likes and comments', 'English; engagement counts', 'SKIP', 'Platform UI screenshot showing engagement numbers.'],
	['fb_020.jpg', 10, 'Mawlid al-Nabawi greeting', 'Arabic + English', 'SKIP', 'Seasonal.'],
	['fb_021.jpg', 4, '"Summer is calling": North Coast villa "starting from 15,000,000 EGP" in a phone-notification mock-up', 'English; price', 'SKIP', 'Unverified price claim and illustrative render; seasonal.'],
	['fb_022.jpg', 4, 'Saudi Egyptian Developers: "Where modern living finds its place", immediate delivery, 5% down / 12-year plan', 'English; offer terms', 'HOLD', 'Project name and location are not stated on the poster.'],
	['fb_023.jpg', 3, 'Waterfront: night aerial render of towers on a waterfront (down payment 800,000, up to 8 years)', 'English; offer terms', 'USE', 'Developments page (Waterfront)'],
	['fb_024.jpg', 3, 'Creeks by MMG (Mohamed Megahed Group): lagoon villas with nearby landmarks; 5% down, up to 8 years', 'English; offer terms', 'USE', 'Developments page (Creeks)'],
	['fb_025.jpg', 7, 'Top performer poster: Rank 5, Zeinab Ali (dark chess theme)', 'English; names/rank', 'USE', 'Team page, top performers'],
	['fb_026.jpg', 7, 'Top performer poster: Rank 4, Mohamed Essam', 'English; names/rank', 'USE', 'Team page, top performers'],
	['fb_027.jpg', 7, 'Top performer poster: Rank 3, Neven Wahdan', 'English; names/rank', 'USE', 'Team page, top performers'],
	['fb_028.jpg', 7, 'Top performer poster: Rank 1, Asma Abdo', 'English; names/rank', 'USE', 'Team page, top performers'],
	['fb_029.jpg', 7, 'Top performer poster: Rank 2, Ahmed Mahmoud', 'English; names/rank', 'USE', 'Team page, top performers'],
	['fb_030.jpg', 7, '"Congratulations to our exceptional achievers": top performers of the last quarter, Q2 (2026)', 'English; Q2 (2026)', 'USE', 'Team page, top performers (header)'],
	['fb_031.jpg', 7, 'Top performer poster: Rank 5, Alyaa Kamel (same design as fb_025-029)', 'English; names/rank', 'HOLD', 'A second "Rank 5" in the same series (tie or a different list); confirm before publishing.'],
	['fb_032.jpg', 10, 'Teaser: "Real estate is coming to the field. Stay tuned" (towers inside a football)', 'English', 'SKIP', 'Teaser with no information.'],
	['fb_033.jpg', 6, 'Ranking card: Team Leader Adham Elkady, Rank 2', 'English; undated', 'SKIP', 'Undated ranking graphic; the role was later superseded (see promotion posters).'],
	['fb_034.jpg', 6, 'Ranking card: Sales Advisor Mayar Mohamed, Rank 4', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_035.jpg', 6, 'Ranking card: Senior Sales Habiba Osama, Rank 1', 'English; undated', 'SKIP', 'Undated ranking graphic; role conflicts with the promotion post.'],
	['fb_036.jpg', 6, 'Ranking card: Property Consultant Ahmed Mahmoud, Rank 3, Team Leader Abdelwahab Ahmed', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_037.jpg', 10, 'Mother\'s Day greeting', 'English', 'SKIP', 'Seasonal.'],
	['fb_038.jpg', 11, '"The one": excavators, "Construction in progress, with clear steps forward every day"', 'English; 01096440002', 'SKIP', 'Generic construction image; ' + PHONE2 + '.'],
	['fb_039.jpg', 8, 'Teaser: "Delivery day checklist: fully finished vs semi-finished"', 'English; 01553382233', 'SKIP', 'Title only, no article content. Candidate for a future article.'],
	['fb_040.jpg', 8, 'Teaser: "First-time buyer? 3 smart tips. Master your payment plan."', 'English; 01553382233', 'SKIP', 'Title only, no article content. Candidate for a future article.'],
	['fb_041.jpg', 3, 'El Patio Oro in New Cairo by La Vista Developments (10% down payment, 8 years)', 'English; offer terms', 'USE', 'Developments page (El Patio Oro)'],
	['fb_043.jpg', 3, 'Sarai Compound in New Cairo by Madinet Masr (5% down payment, 12 years)', 'English; offer terms', 'USE', 'Developments page (Sarai); Home teaser'],
	['fb_045.jpg', 4, '"Luxury delivered, fully finished. Move into a gated community" with a generic tower render', 'English; 01553382233', 'SKIP', 'Generic render with no project name.'],
	['fb_046.jpg', 4, '"Flexible payment plans, low down payment, high value" lifestyle image', 'English; 01553382233', 'SKIP', 'Generic promotion with no project name.'],
	['fb_047.jpg', 4, '"Don\'t miss your chance. Opportunities like this don\'t come twice" generic tower', 'English; 01553382233', 'SKIP', 'Generic promotion with no project name.'],
	['fb_048.jpg', 4, '"New phase alert: be the first to own" generic villa render', 'English; 01553382233', 'SKIP', 'Generic promotion with no project name.'],
	['fb_049.jpg', 4, '"Smart investment, high return" generic tower', 'English; 01553382233', 'SKIP', 'Return claim that cannot be verified; no project name.'],
	['fb_050.jpg', 3, 'Rivers in Ras El Hekma: sea-view units, lagoon units, stand-alone villas, town houses', 'English; 01553382233', 'USE', 'Developments page (Rivers)'],
	['fb_051.jpg', 3, '"Skyline where life begins": night view and amenities diagram', 'English', 'HOLD', 'Reserve for the Developments page; developer and location not stated.'],
	['fb_052.jpg', 3, 'Alex West: residential complex with library, gym, play zone, club house and swimming pool', 'English', 'USE', 'Developments page (Alex West); Home teaser'],
	['fb_053.jpg', 7, 'Congratulations card: Abdelwahab Ahmed, Rank 1', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_054.jpg', 7, 'Congratulations card: Adham Elkady, Rank 2', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_055.jpg', 7, 'Congratulations card: Hala Hossam, Rank 5', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_056.jpg', 7, 'Congratulations card: Rodaina Ahmed, Rank 5', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_057.jpg', 7, 'Congratulations card: Mariam Yasser, Rank 3', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_058.jpg', 7, 'Congratulations card: Habiba Osama, Rank 4', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_059.jpg', 11, '"Turn your time and money into timeless investments": hourglass with coins over towers', 'English', 'SKIP', 'Concept illustration; investment-return implication.'],
	['fb_061.jpg', 9, '"Thank you" card for Nour Eslam (appreciation message)', 'English', 'SKIP', 'Personal HR message; not suitable for the public site.'],
	['fb_062.jpg', 3, 'Seashore Water Side: waterfront apartments (5% down payment, 8 years)', 'English; offer terms', 'USE', 'Developments page (Seashore)'],
	['fb_063.jpg', 3, 'Sky AD Developments: apartment building on the beach (5% down, 10 years)', 'English; offer terms', 'HOLD', 'Reserve for the Developments page; project name not stated.'],
	['fb_064.jpg', 3, 'Masaya, Sidi Abdel Rahman: white luxury villa (10% down payment, 8 years)', 'English; offer terms', 'USE', 'Developments page (Masaya)'],
	['fb_065.jpg', 9, '"4 years of trust, partnership and success, and the journey continues"', 'English', 'HOLD', 'Conflicts with the five-year anniversary (fb_018) and the 2019 founding date; confirm the milestone.'],
	['fb_067.jpg', 7, 'Best Employee of the Month: Passant Elkady, August 2025', 'English; date', 'USE', 'Team page, recognition'],
	['fb_068.jpg', 10, 'Teaser: "Your landing spot for life\'s best investment" (tower in an aeroplane window)', 'English', 'SKIP', 'Teaser with no information.'],
	['fb_069.jpg', 7, 'Rank trophy card: Rank 6, Mahmoud Abdrabo', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_070.jpg', 7, 'Rank trophy card: Rank 2, Abdelwahab Ahmed', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_071.jpg', 7, 'Rank trophy card: Rank 5, Nour Eslam', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_072.jpg', 7, 'Rank trophy card: Rank 4, Asma Abdou', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_073.jpg', 7, 'Rank trophy card: Rank 5, Rodina', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_074.jpg', 7, 'Rank trophy card: Rank 3, Malak Abdalkader', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_075.jpg', 7, 'Rank trophy card: Rank 1, Adham El Kady', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_076.jpg', 7, 'Rank trophy card: Rank 4, Abdallah Tarek', 'English; undated', 'SKIP', 'Undated ranking graphic.'],
	['fb_077.jpg', 8, '"5 keys to property investment success": carousel cover', 'English', 'USE', 'Insights page, article cover'],
	['fb_078.jpg', 8, 'Carousel slide 03: Quality', 'English', 'USE', 'Insights page, slide'],
	['fb_079.jpg', 8, 'Carousel slide 04: Price and deal', 'English', 'USE', 'Insights page, slide'],
	['fb_080.jpg', 8, 'Carousel closing slide: "Was this post helpful?" with phone and website', 'English; 01553382233; futurehouseegy.com', 'SKIP', 'Call-to-action slide; contact details already on every page.'],
	['fb_081.jpg', 8, 'Carousel slide 01: Timing', 'English', 'USE', 'Insights page, slide'],
	['fb_082.jpg', 8, 'Carousel slide 05: Risk', 'English', 'USE', 'Insights page, slide'],
	['fb_083.jpg', 8, 'Carousel slide 02: Location', 'English', 'USE', 'Insights page, slide'],
	['fb_085.jpg', 10, 'Arabic teaser: "Why is a real estate marketing company your success partner?"', 'Arabic', 'SKIP', 'Teaser without the answer.'],
	['fb_086.jpg', 10, 'Eid al-Adha greeting', 'Arabic', 'SKIP', 'Seasonal.'],
	['fb_087.jpg', 6, 'Promotion announcement: Hala Hossam, Property Advisor', 'English', 'USE', 'Team page, promotions'],
	['fb_088.jpg', 6, 'Promotion announcement: Yasser Osama, Property Advisor', 'English', 'USE', 'Team page, promotions'],
	['fb_089.jpg', 6, 'Promotion announcement: Abdallah Tarek, Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['fb_090.jpg', 6, 'Promotion announcement: Adham El Kady, Senior Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['fb_091.jpg', 6, 'Promotion announcement: Habiba Osama, Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['fb_092.jpg', 6, 'Promotion announcement: Malak Abdalkader, Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['fb_093.jpg', 6, 'Promotion announcement: Passant Elkady, Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['fb_094.jpg', 6, 'Promotion announcement: Mahmoud Abdrabo, Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['fb_095.jpg', 6, 'Promotion announcement: Zienb Ali, Property Advisor', 'English', 'USE', 'Team page, promotions'],
	['fb_096.jpg', 6, 'Promotion announcement: Yahia Badawy, Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['fb_097.jpg', 6, 'Promotion announcement: Amr Adel, Senior Property Consultant', 'English', 'USE', 'Team page, promotions'],
	['ig_1.jpg', 10, 'Black-and-white story: "Wake up in your dream home" (open door)', 'English', 'SKIP', 'Low resolution (360 x 640 story frame).'],
	['ig_3.jpg', 3, 'Black-and-white story: Alex West entrance gate', 'English', 'SKIP', 'Low resolution (361 x 640). A higher-resolution original would be a good photo.'],
	['ig_5.jpg', 3, 'Black-and-white story: Muruj under construction, aerial view (10% down)', 'English', 'SKIP', 'Low resolution (361 x 640); authentic site photo if the original is supplied.'],
	['ig_6.jpg', 3, 'Black-and-white story: Muruj master plan with presenter (10% down, 10 years)', 'English', 'SKIP', 'Low resolution (361 x 640).']
].map(([file, cat, desc, text, decision, note]) => ({ file, cat, category: CATEGORIES[cat], desc, text, decision, note }));

/* ---------------------------------------------------------------- USED --- */
/* Each entry: file, folder, newName (SEO file name, no extension),
   alt {en, ar}, optional caption data. Arabic wording is flagged for
   native proofreading in docs/arabic-copy-review.md. */

const dev = (file, newName, name, developer, location, en, ar) => ({ file, folder: 'projects', newName, kind: 'project', name, developer, location, alt: { en, ar } });
const promo = (file, newName, person, title, titleAr) => ({
	file, folder: 'team', newName, kind: 'promotion', person, title, titleAr,
	alt: { en: `Promotion announcement: ${person}, new position ${title}.`, ar: `إعلان ترقية: ${person}، المسمى الوظيفي الجديد: ${titleAr}.` }
});
const rank = (file, newName, person, n) => ({
	file, folder: 'achievements', newName, kind: 'rank', person, rank: n,
	alt: { en: `Top performer announcement: rank ${n}, ${person}.`, ar: `إعلان أفضل أداء: المركز ${n}، ${person}.` }
});
const slide = (file, newName, n, topic, topicAr) => ({
	file, folder: 'insights', newName, kind: 'slide', n,
	alt: { en: `Property investment tip ${n}: ${topic}. Slide from a Future House educational post.`, ar: `نصيحة الاستثمار العقاري ${n}: ${topicAr}. شريحة من منشور تعليمي لشركة فيوتشر هاوس.` }
});

export const USED = [
	/* Developments (third-party developments promoted by Future House; names/locations only as printed on the posters) */
	dev('fb_043.jpg', 'sarai-compound-new-cairo-madinet-masr', 'Sarai Compound', 'Madinet Masr', { en: 'New Cairo', ar: 'القاهرة الجديدة' },
		'Sarai Compound in New Cairo by Madinet Masr, shown on a Future House campaign poster.',
		'كمبوند سراي في القاهرة الجديدة من مدينة مصر، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_041.jpg', 'el-patio-oro-new-cairo-la-vista', 'El Patio Oro', 'La Vista Developments', { en: 'New Cairo', ar: 'القاهرة الجديدة' },
		'El Patio Oro in New Cairo by La Vista Developments, shown on a Future House campaign poster.',
		'مشروع إل باتيو أورو في القاهرة الجديدة من لافيستا للتطوير، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_024.jpg', 'creeks-mmg-lagoon-villas', 'Creeks', 'MMG (Mohamed Megahed Group)', null,
		'Creeks by MMG, a lagoon-side residential development, shown on a Future House campaign poster.',
		'مشروع كريكس من مجموعة MMG، مشروع سكني على بحيرة، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_023.jpg', 'waterfront-towers-night-view', 'Waterfront', null, null,
		'Night view of the Waterfront residential towers, shown on a Future House campaign poster.',
		'منظر ليلي لأبراج مشروع ووتر فرونت السكنية، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_052.jpg', 'alex-west-residential-complex', 'Alex West', null, null,
		'Alex West residential complex with its club house and amenities, shown on a Future House campaign poster.',
		'مجمع أليكس ويست السكني ومرافقه ونادي السكان، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_064.jpg', 'masaya-sidi-abdel-rahman-villa', 'Masaya', null, { en: 'Sidi Abdel Rahman', ar: 'سيدي عبد الرحمن' },
		'Masaya villa in Sidi Abdel Rahman, shown on a Future House campaign poster.',
		'فيلا من مشروع مسايا في سيدي عبد الرحمن، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_010.jpg', 'muruj-residential-tower', 'Muruj', null, { en: 'Smouha, Alexandria', ar: 'سموحة، الإسكندرية' },
		'Muruj residential tower, shown on a Future House campaign poster.',
		'برج مروج السكني، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_062.jpg', 'seashore-water-side-apartments', 'Seashore Water Side', null, null,
		'Seashore Water Side waterfront apartments, shown on a Future House campaign poster.',
		'شقق سي شور ووتر سايد المطلة على الواجهة المائية، على ملصق حملة لشركة فيوتشر هاوس.'),
	dev('fb_050.jpg', 'rivers-ras-el-hekma-unit-types', 'Rivers', null, { en: 'Ras El Hekma', ar: 'رأس الحكمة' },
		'Rivers in Ras El Hekma: sea-view units, lagoon units, stand-alone villas and town houses, on a Future House campaign poster.',
		'مشروع ريفرز في رأس الحكمة: وحدات بإطلالة بحرية ووحدات على البحيرة وفيلات مستقلة وتاون هاوس، على ملصق حملة لشركة فيوتشر هاوس.'),

	/* About page */
	{ file: 'fb_018.jpg', folder: 'marketing', newName: 'future-house-team-anniversary-collage', kind: 'about',
		alt: { en: 'Collage of Future House team photos from the company anniversary, with the words "One Future House family".', ar: 'مجموعة صور لفريق فيوتشر هاوس من احتفال الذكرى السنوية، مع عبارة «عائلة فيوتشر هاوس».' } },
	{ file: 'fb_004.jpg', folder: 'marketing', newName: 'brand-campaign-building-better-futures', kind: 'campaign',
		alt: { en: 'Future House brand campaign: "Building better futures", modern white villas in black and white.', ar: 'حملة فيوتشر هاوس: «نبني مستقبلاً أفضل»، فيلات بيضاء حديثة بالأبيض والأسود.' } },
	{ file: 'fb_006.jpg', folder: 'marketing', newName: 'brand-campaign-more-than-a-property', kind: 'campaign',
		alt: { en: 'Future House brand campaign: "More than just a property", a glass tower in black and white.', ar: 'حملة فيوتشر هاوس: «أكثر من مجرد عقار»، برج زجاجي بالأبيض والأسود.' } },
	{ file: 'fb_007.jpg', folder: 'marketing', newName: 'brand-campaign-built-on-trust', kind: 'campaign',
		alt: { en: 'Future House brand campaign: "Built on trust", a white doorway and staircase in black and white.', ar: 'حملة فيوتشر هاوس: «مبنية على الثقة»، مدخل أبيض وسلم بالأبيض والأسود.' } },
	{ file: 'fb_008.jpg', folder: 'marketing', newName: 'brand-campaign-find-your-place', kind: 'campaign',
		alt: { en: 'Future House brand campaign: "Find your place", a modern building facade in black and white.', ar: 'حملة فيوتشر هاوس: «اعثر على مكانك»، واجهة مبنى حديث بالأبيض والأسود.' } },

	/* Team page: top performers (Q2 2026 announcement) */
	{ file: 'fb_030.jpg', folder: 'achievements', newName: 'top-performers-q2-2026-announcement', kind: 'rankhead',
		alt: { en: 'Congratulations to Future House top performers of the last quarter, Q2 2026, over a chessboard.', ar: 'تهنئة لأفضل مستشاري فيوتشر هاوس أداءً في الربع الأخير، الربع الثاني من 2026، على رقعة شطرنج.' } },
	rank('fb_028.jpg', 'top-performer-rank-1-asma-abdo', 'Asma Abdo', 1),
	rank('fb_029.jpg', 'top-performer-rank-2-ahmed-mahmoud', 'Ahmed Mahmoud', 2),
	rank('fb_027.jpg', 'top-performer-rank-3-neven-wahdan', 'Neven Wahdan', 3),
	rank('fb_026.jpg', 'top-performer-rank-4-mohamed-essam', 'Mohamed Essam', 4),
	rank('fb_025.jpg', 'top-performer-rank-5-zeinab-ali', 'Zeinab Ali', 5),
	{ file: 'fb_067.jpg', folder: 'achievements', newName: 'best-employee-august-2025-passant-elkady', kind: 'bestemployee', person: 'Passant Elkady',
		alt: { en: 'Best Employee of the Month, August 2025: Passant Elkady.', ar: 'موظف الشهر المتميز، أغسطس 2025: Passant Elkady.' } },

	/* Team page: promotions */
	promo('fb_087.jpg', 'promotion-hala-hossam-property-advisor', 'Hala Hossam', 'Property Advisor', 'مستشار عقاري'),
	promo('fb_088.jpg', 'promotion-yasser-osama-property-advisor', 'Yasser Osama', 'Property Advisor', 'مستشار عقاري'),
	promo('fb_095.jpg', 'promotion-zienb-ali-property-advisor', 'Zienb Ali', 'Property Advisor', 'مستشار عقاري'),
	promo('fb_089.jpg', 'promotion-abdallah-tarek-property-consultant', 'Abdallah Tarek', 'Property Consultant', 'استشاري عقاري'),
	promo('fb_091.jpg', 'promotion-habiba-osama-property-consultant', 'Habiba Osama', 'Property Consultant', 'استشاري عقاري'),
	promo('fb_092.jpg', 'promotion-malak-abdalkader-property-consultant', 'Malak Abdalkader', 'Property Consultant', 'استشاري عقاري'),
	promo('fb_093.jpg', 'promotion-passant-elkady-property-consultant', 'Passant Elkady', 'Property Consultant', 'استشاري عقاري'),
	promo('fb_094.jpg', 'promotion-mahmoud-abdrabo-property-consultant', 'Mahmoud Abdrabo', 'Property Consultant', 'استشاري عقاري'),
	promo('fb_096.jpg', 'promotion-yahia-badawy-property-consultant', 'Yahia Badawy', 'Property Consultant', 'استشاري عقاري'),
	promo('fb_090.jpg', 'promotion-adham-el-kady-senior-property-consultant', 'Adham El Kady', 'Senior Property Consultant', 'استشاري عقاري أول'),
	promo('fb_097.jpg', 'promotion-amr-adel-senior-property-consultant', 'Amr Adel', 'Senior Property Consultant', 'استشاري عقاري أول'),

	/* Insights: "5 keys to property investment success" carousel */
	{ file: 'fb_077.jpg', folder: 'insights', newName: 'five-keys-property-investment-cover', kind: 'slide', n: 0,
		alt: { en: 'Cover slide: "5 keys to property investment success", a hand holding a model house. From a Future House educational post.', ar: 'شريحة الغلاف: «5 مفاتيح لنجاح الاستثمار العقاري»، يد تحمل نموذج منزل. من منشور تعليمي لشركة فيوتشر هاوس.' } },
	slide('fb_081.jpg', 'property-investment-key-1-timing', 1, 'timing', 'التوقيت'),
	slide('fb_083.jpg', 'property-investment-key-2-location', 2, 'location', 'الموقع'),
	slide('fb_078.jpg', 'property-investment-key-3-quality', 3, 'quality', 'الجودة'),
	slide('fb_079.jpg', 'property-investment-key-4-price-and-deal', 4, 'price and deal', 'السعر والصفقة'),
	slide('fb_082.jpg', 'property-investment-key-5-risk', 5, 'risk', 'المخاطر')
];

export const byFile = (f) => USED.find((u) => u.file === f);
export const byName = (n) => USED.find((u) => u.newName === n);
