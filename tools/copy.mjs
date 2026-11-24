/* Future House – all company facts and page copy (English + Arabic).
 * Edit here, then run: node tools/build.mjs
 * Arabic review sheet: node tools/export-copy.mjs */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
/* Official brand icon paths (simple-icons, CC0) kept as editable files in images/icons/social/ */
const iconPath = (id) => readFileSync(join(ROOT, `images/icons/social/${id}.svg`), 'utf8').match(/<path d="([^"]+)"/)[1];

/* ------------------------------------------------------------------ facts */
export const COMPANY = {
	name: { en: 'Future House', ar: 'فيوتشر هاوس' },
	founded: '2019',
	phoneDisplay: '+20 155 338 2233',
	phoneTel: '+201553382233',
	wa: '201553382233',
	email: 'info@futurehouseegy.com',
	address: {
		en: 'Roushdy, Abu Qir, Building 405 B, Alexandria, Egypt',
		ar: 'رشدي، أبو قير، مبنى 405 ب، الإسكندرية، مصر'
	},
	mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' +
		encodeURIComponent('Roushdy, Abu Qir, Building 405 B, Alexandria, Egypt'),
	/* Not yet provided. When set, e.g. { en: 'Sun–Thu 9:00–17:00', ar: 'الأحد – الخميس 9:00 – 17:00' },
	   the contact page shows it automatically. */
	hours: null
};

/* Sections that only render once authentic content is supplied (all empty on purpose).
 * TEAM: { name:{en,ar}, role:{en,ar}, photo:'images/team/x.jpg' }
 * TESTIMONIALS: { quote:{en,ar}, author:{en,ar}, role:{en,ar} }  – real, approved quotes only */
export const TEAM = [];
export const TESTIMONIALS = [];

export const SOCIAL = [
	{ id: 'facebook', url: 'https://www.facebook.com/futurehouse.eg', handle: 'futurehouse.eg', label: { en: 'Facebook', ar: 'فيسبوك' } },
	{ id: 'instagram', url: 'https://www.instagram.com/futurehouseegy/', handle: '@futurehouseegy', label: { en: 'Instagram', ar: 'إنستغرام' } },
	{ id: 'linkedin', url: 'https://www.linkedin.com/company/futurehouse-eg/', handle: 'futurehouse-eg', label: { en: 'LinkedIn', ar: 'لينكدإن' } },
	{ id: 'tiktok', url: 'https://www.tiktok.com/@futurehouse20', handle: '@futurehouse20', label: { en: 'TikTok', ar: 'تيك توك' } },
	{ id: 'youtube', url: 'https://www.youtube.com/channel/UCT-HUXMPyJIVWUQYr8-WhJQ', handle: 'YouTube', label: { en: 'YouTube', ar: 'يوتيوب' } },
	{ id: 'threads', url: 'https://www.threads.com/@futurehouseegy', handle: '@futurehouseegy', label: { en: 'Threads', ar: 'ثريدز' } }
].map((s) => ({ ...s, svg: iconPath(s.id) }));

/* ------------------------------------------------------------------ copy */
export const PAGES = ['index', 'about-us', 'services', 'faqs', 'contact'];

export const T = {
	en: {
		dir: 'ltr', locale: 'en_US', langName: 'English', switchLabel: 'العربية', switchTitle: 'العربية – Arabic version',
		skip: 'Skip to main content',
		nav: { index: 'Home', 'about-us': 'About Us', services: 'Services', faqs: 'FAQs', contact: 'Contact' },
		menuOpen: 'Open menu', menuClose: 'Close menu', mainNav: 'Main navigation', breadcrumb: 'Breadcrumb',
		home: 'Home', logoAlt: 'Future House – Real Estate Marketing', toTop: 'Back to top',
		followOn: (n) => `Future House on ${n}`,
		callLabel: 'Phone', waLabel: 'WhatsApp', emailLabel: 'Email', addrLabel: 'Address',
		waGreeting: 'Hello Future House, I would like to ask about a property.',
		meta: {
			index: {
				title: 'Future House | Real Estate Marketing & Brokerage in Alexandria',
				desc: 'Real estate marketing and brokerage in Alexandria and New Cairo. Future House helps you buy, sell and rent the right property for your needs and budget.'
			},
			'about-us': {
				title: 'About Us | Future House Real Estate Marketing & Brokerage',
				desc: 'Future House is a real estate marketing and brokerage company founded in 2019 in Alexandria, Egypt. Learn who we are and how we match clients with properties.'
			},
			services: {
				title: 'Real Estate Services | Buy, Sell & Rent with Future House',
				desc: 'Property marketing, sales, buying support and rentals for residential and investment properties in Alexandria and New Cairo.'
			},
			faqs: {
				title: 'FAQs | Future House Real Estate in Alexandria',
				desc: 'Answers to common questions about Future House: our services, the areas we cover, and how to buy, sell or rent a property with us.'
			},
			contact: {
				title: 'Contact Us | Future House, Roushdy, Alexandria',
				desc: 'Contact Future House by phone, WhatsApp or email, or visit us in Roushdy, Abu Qir, Alexandria. Tell us what property you are looking for.'
			}
		},
		hero: {
			eyebrow: 'Real Estate Marketing & Brokerage',
			h1: 'Find the right property, with confidence',
			lead: 'Future House markets, sells and rents properties in Alexandria and New Cairo, and helps you buy the one that fits your needs and budget.',
			cta1: 'Explore our services', cta2: 'Chat on WhatsApp'
		},
		welcome: {
			h2: 'Welcome to Future House',
			h3: 'Your Future House is our mission',
			text: 'Future House is a real estate marketing and brokerage company established in 2019. We specialize in marketing, buying, selling and renting properties, helping our clients find the right property based on their needs, preferences and budget, from homes to investment properties in Alexandria, New Cairo and other locations we promote through our official channels.',
			link: 'More about us'
		},
		values: [
			{ icon: 'flaticon-avatar-1', h: 'Needs-first matching', cat: 'Residential & investment', t: 'We start with what you need, prefer and can afford, then shortlist the properties that genuinely fit.' },
			{ icon: 'flaticon-correct', h: 'Real estate marketing', cat: 'Reach the right audience', t: 'Properties are presented on our official channels on Instagram, Facebook, TikTok, YouTube, LinkedIn and Threads to reach interested buyers and renters.' },
			{ icon: 'flaticon-compass', h: 'Local focus', cat: 'Alexandria & New Cairo', t: 'Our office is in Alexandria, and we work across Alexandria, New Cairo and other locations we promote.' }
		],
		servicesSec: { sub: 'What we do', h2: 'Our Services', all: 'All services' },
		services: [
			{ icon: 'flaticon-improvement', h: 'Real Estate Marketing', t: 'We market properties through professional content and our official social channels to attract serious buyers and renters.' },
			{ icon: 'flaticon-parquet', h: 'Property Sales', t: 'Selling a property? We list it, promote it and help you reach interested buyers.' },
			{ icon: 'flaticon-window', h: 'Buying Support', t: 'We help you find and buy a property that fits your needs, preferences and budget.' },
			{ icon: 'flaticon-tiles', h: 'Property Rentals', t: 'Looking to rent, or to rent out your property? We connect tenants and owners.' },
			{ icon: 'flaticon-two', h: 'Residential Properties', t: 'Homes matched to how you live and what you can afford.' },
			{ icon: 'flaticon-bright-lightbulb', h: 'Investment Properties', t: 'Options for clients who want to invest in real estate, matched to their budget and goals.' }
		],
		areas: {
			sub: 'Where we work', h2: 'Alexandria, New Cairo and beyond',
			items: [
				{ h: 'Alexandria', t: 'Our home base. Our office is in Roushdy, Abu Qir.' },
				{ h: 'New Cairo', t: 'Properties in New Cairo for buyers and renters.' },
				{ h: 'More locations', t: 'Other locations are promoted through our official channels. Follow us to see what is new.' }
			]
		},
		channels: {
			sub: 'Latest properties & updates', h2: 'See our properties on our official channels',
			p: 'New properties, tours and updates are published on our official channels. Follow us to see what is available.',
			follow: 'Follow', watch: 'Watch'
		},
		cta: { text: 'Ready to find your next property?', h2: 'Tell us what you are looking for', c1: 'Chat on WhatsApp', c2: 'Contact us' },
		about: {
			title: 'About Us',
			h2: 'Who we are',
			p1: 'Future House is a real estate marketing and brokerage company established in 2019 and based in Alexandria, Egypt. We specialize in marketing, buying, selling and renting properties.',
			p2: 'Our work is simple: help clients find the right property based on their needs, preferences and budget. Whether you are looking for a home or an investment property, we connect you with suitable options in Alexandria, New Cairo and other locations we promote through our official channels.',
			p3: 'Our mission, in our own words: “Your Future House is our mission.”',
			factsTitle: 'At a glance',
			facts: [
				['Founded', '2019'],
				['What we do', 'Real estate marketing & brokerage'],
				['Office', COMPANY.address.en],
				['We work in', 'Alexandria, New Cairo and other promoted locations']
			],
			howSub: 'How we work', howH2: 'From your brief to the right property',
			steps: [
				{ h: 'We understand what you need', t: 'Tell us what you are looking for, your preferences and your budget.' },
				{ h: 'We match you with suitable properties', t: 'We shortlist residential or investment properties that fit your brief.' },
				{ h: 'We support you to the deal', t: 'We help you through buying, selling or renting, with clear communication along the way.' }
			],
			servicesLink: 'See all services'
		},
		servicesPage: { title: 'Our Services', sub: 'What we do', h2: 'Real estate marketing, sales and rentals', p: 'Whether you want to buy, sell, rent or invest, Future House can help. Here is how we support our clients.', contactAbout: 'Ask about this service' },
		faq: {
			title: 'Frequently Asked Questions', sub: 'FAQs', h2: 'Answers to common questions',
			items: [
				['What does Future House do?', 'Future House is a real estate marketing and brokerage company established in 2019. We market, sell and rent properties and help clients buy properties that fit their needs and budget.'],
				['Which areas do you cover?', 'We work in Alexandria and New Cairo, and in other locations that we promote through our official channels.'],
				['Can you help me buy a property?', 'Yes. Tell us your needs, preferences and budget, and we will help you find suitable residential or investment properties.'],
				['Can you help me sell my property?', 'Yes. We market properties for sale. Contact us with details about your property and we will discuss the next steps.'],
				['Can you help me rent a property, or rent mine out?', 'Yes. We work with tenants looking for a place to rent and with owners who want to rent out their property.'],
				['Where can I see your latest properties?', 'On our official channels: Instagram, Facebook, TikTok, YouTube, LinkedIn and Threads. The links are at the bottom of every page.'],
				['How can I contact you?', 'Call or message us on WhatsApp at {phone}, email {email}, or visit our office at {address}.']
			]
		},
		contact: {
			title: 'Contact Us', sub: 'Get in touch', h2: 'Tell us what you are looking for',
			p: 'Call, message us on WhatsApp, email us or send the form. We will get back to you.',
			detailsH: 'Contact details', followH: 'Follow us', openMap: 'Open in Google Maps',
			formH: 'Send us a message',
			f: { name: 'Full name', phone: 'Phone number', email: 'Email (optional)', interest: 'I am looking to', msg: 'Message', send: 'Send via WhatsApp', req: 'required' },
			interests: [['', 'Select an option'], ['Buy a property', 'Buy a property'], ['Rent a property', 'Rent a property'], ['Sell my property', 'Sell my property'], ['Rent out my property', 'Rent out my property'], ['Something else', 'Something else']],
			hint: 'When you submit, WhatsApp opens with your message ready to send. You can also email us at {email}.'
		},
		formMsg: {
			required: 'This field is required.',
			email: 'Please enter a valid email address.',
			phone: 'Please enter a valid phone number.',
			summary: 'Please correct the highlighted fields.',
			opening: 'Opening WhatsApp with your message ready. Press send in WhatsApp to deliver it.',
			fallback: 'WhatsApp did not open? Tap here to open it.',
			sent: 'Thank you. Your message was sent and we will get back to you.',
			failed: 'Your message could not be sent. Please try again or contact us on WhatsApp.',
			greeting: 'Hello Future House,',
			name: 'Name', phoneLbl: 'Phone', emailLbl: 'Email', interest: 'I am looking to', message: 'Message'
		},
		footer: { about: 'Real estate marketing and brokerage company established in 2019. We market, buy, sell and rent properties in Alexandria, New Cairo and beyond.', links: 'Quick links', follow: 'Follow us', rights: 'All rights reserved.' },
		notFound: { title: 'Page not found | Future House', h1: 'Page not found', p: 'The page you are looking for does not exist or has moved.', home: 'Go to the homepage' }
	},

	ar: {
		dir: 'rtl', locale: 'ar_EG', langName: 'العربية', switchLabel: 'English', switchTitle: 'English version',
		skip: 'انتقل إلى المحتوى الرئيسي',
		nav: { index: 'الرئيسية', 'about-us': 'من نحن', services: 'خدماتنا', faqs: 'الأسئلة الشائعة', contact: 'تواصل معنا' },
		menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة', mainNav: 'القائمة الرئيسية', breadcrumb: 'مسار التنقل',
		home: 'الرئيسية', logoAlt: 'فيوتشر هاوس – تسويق عقاري', toTop: 'العودة إلى الأعلى',
		followOn: (n) => `فيوتشر هاوس على ${n}`,
		callLabel: 'الهاتف', waLabel: 'واتساب', emailLabel: 'البريد الإلكتروني', addrLabel: 'العنوان',
		waGreeting: 'مرحباً فيوتشر هاوس، أود الاستفسار عن عقار.',
		meta: {
			index: {
				title: 'فيوتشر هاوس | تسويق وسمسرة عقارية في الإسكندرية',
				desc: 'تسويق وسمسرة عقارية في الإسكندرية والقاهرة الجديدة. تساعدك فيوتشر هاوس على شراء العقار المناسب أو بيعه أو تأجيره بما يناسب احتياجاتك وميزانيتك.'
			},
			'about-us': {
				title: 'من نحن | فيوتشر هاوس للتسويق والسمسرة العقارية',
				desc: 'فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019 في الإسكندرية، مصر. تعرّف علينا وعلى طريقتنا في ربط العملاء بالعقارات المناسبة.'
			},
			services: {
				title: 'الخدمات العقارية | شراء وبيع وتأجير مع فيوتشر هاوس',
				desc: 'تسويق العقارات وبيعها ومساعدتك في الشراء والتأجير للعقارات السكنية والاستثمارية في الإسكندرية والقاهرة الجديدة.'
			},
			faqs: {
				title: 'الأسئلة الشائعة | فيوتشر هاوس للعقارات في الإسكندرية',
				desc: 'إجابات عن الأسئلة الشائعة حول فيوتشر هاوس: خدماتنا، والمناطق التي نعمل بها، وكيفية شراء عقار أو بيعه أو تأجيره معنا.'
			},
			contact: {
				title: 'تواصل معنا | فيوتشر هاوس، رشدي، الإسكندرية',
				desc: 'تواصل مع فيوتشر هاوس عبر الهاتف أو واتساب أو البريد الإلكتروني، أو زرنا في رشدي، أبو قير، الإسكندرية. أخبرنا بالعقار الذي تبحث عنه.'
			}
		},
		hero: {
			eyebrow: 'تسويق وسمسرة عقارية',
			h1: 'اعثر على العقار المناسب لك بثقة',
			lead: 'تُسوّق فيوتشر هاوس العقارات وتبيعها وتؤجّرها في الإسكندرية والقاهرة الجديدة، وتساعدك على شراء العقار الذي يناسب احتياجاتك وميزانيتك.',
			cta1: 'اكتشف خدماتنا', cta2: 'تواصل عبر واتساب'
		},
		welcome: {
			h2: 'أهلاً بك في فيوتشر هاوس',
			h3: 'بيتك المستقبلي هو مهمتنا',
			text: 'فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019. نتخصص في تسويق العقارات وشرائها وبيعها وتأجيرها، ونساعد عملاءنا في العثور على العقار المناسب وفقاً لاحتياجاتهم وتفضيلاتهم وميزانيتهم، بدءاً من المنازل وحتى العقارات الاستثمارية في الإسكندرية والقاهرة الجديدة وغيرهما من المواقع التي نروّج لها عبر قنواتنا الرسمية.',
			link: 'المزيد عنا'
		},
		values: [
			{ icon: 'flaticon-avatar-1', h: 'نبدأ من احتياجاتك', cat: 'سكني واستثماري', t: 'نبدأ بما تحتاجه وتفضّله وما تسمح به ميزانيتك، ثم نرشّح لك العقارات التي تناسبك فعلاً.' },
			{ icon: 'flaticon-correct', h: 'تسويق عقاري', cat: 'الوصول إلى الجمهور المناسب', t: 'نعرض العقارات عبر قنواتنا الرسمية على إنستغرام وفيسبوك وتيك توك ويوتيوب ولينكدإن وثريدز لنصل إلى المشترين والمستأجرين المهتمين.' },
			{ icon: 'flaticon-compass', h: 'تركيز محلي', cat: 'الإسكندرية والقاهرة الجديدة', t: 'يقع مكتبنا في الإسكندرية، ونعمل في الإسكندرية والقاهرة الجديدة وغيرهما من المواقع التي نروّج لها.' }
		],
		servicesSec: { sub: 'ما نقدّمه لك', h2: 'خدماتنا', all: 'جميع الخدمات' },
		services: [
			{ icon: 'flaticon-improvement', h: 'التسويق العقاري', t: 'نسوّق العقارات بمحتوى احترافي وعبر قنواتنا الرسمية على وسائل التواصل لجذب مشترين ومستأجرين جادين.' },
			{ icon: 'flaticon-parquet', h: 'بيع العقارات', t: 'هل تريد بيع عقارك؟ نعرضه ونروّج له ونساعدك في الوصول إلى المشترين المهتمين.' },
			{ icon: 'flaticon-window', h: 'مساعدتك في الشراء', t: 'نساعدك في العثور على عقار يناسب احتياجاتك وتفضيلاتك وميزانيتك وشرائه.' },
			{ icon: 'flaticon-tiles', h: 'الإيجار', t: 'تبحث عن عقار للإيجار أو تريد تأجير عقارك؟ نصلك بالمستأجرين والملّاك.' },
			{ icon: 'flaticon-two', h: 'وحدات سكنية', t: 'وحدات سكنية تناسب أسلوب حياتك وما تستطيع تحمّله.' },
			{ icon: 'flaticon-bright-lightbulb', h: 'عقارات استثمارية', t: 'خيارات للعملاء الراغبين في الاستثمار العقاري، تناسب ميزانيتهم وأهدافهم.' }
		],
		areas: {
			sub: 'أين نعمل', h2: 'الإسكندرية والقاهرة الجديدة وغيرهما',
			items: [
				{ h: 'الإسكندرية', t: 'مقرّنا الرئيسي. يقع مكتبنا في رشدي، أبو قير.' },
				{ h: 'القاهرة الجديدة', t: 'عقارات في القاهرة الجديدة للمشترين والمستأجرين.' },
				{ h: 'مواقع أخرى', t: 'نروّج لمواقع أخرى عبر قنواتنا الرسمية. تابعنا لتعرف الجديد.' }
			]
		},
		channels: {
			sub: 'أحدث العقارات والأخبار', h2: 'شاهد عقاراتنا على قنواتنا الرسمية',
			p: 'ننشر العقارات الجديدة والجولات والتحديثات على قنواتنا الرسمية. تابعنا لتعرف ما هو متاح.',
			follow: 'تابعنا', watch: 'شاهد'
		},
		cta: { text: 'هل أنت مستعد للعثور على عقارك القادم؟', h2: 'أخبرنا بما تبحث عنه', c1: 'تواصل عبر واتساب', c2: 'تواصل معنا' },
		about: {
			title: 'من نحن',
			h2: 'من نحن',
			p1: 'فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019 ومقرها الإسكندرية، مصر. نتخصص في تسويق العقارات وشرائها وبيعها وتأجيرها.',
			p2: 'عملنا بسيط: مساعدة العملاء في العثور على العقار المناسب وفقاً لاحتياجاتهم وتفضيلاتهم وميزانيتهم. سواء كنت تبحث عن منزل أو عقار استثماري، نربطك بخيارات مناسبة في الإسكندرية والقاهرة الجديدة وغيرهما من المواقع التي نروّج لها عبر قنواتنا الرسمية.',
			p3: 'رسالتنا بكلماتنا: «بيتك المستقبلي هو مهمتنا».',
			factsTitle: 'لمحة سريعة',
			facts: [
				['تأسست', '2019'],
				['مجال العمل', 'تسويق وسمسرة عقارية'],
				['المكتب', COMPANY.address.ar],
				['نعمل في', 'الإسكندرية والقاهرة الجديدة ومواقع أخرى نروّج لها']
			],
			howSub: 'كيف نعمل', howH2: 'من طلبك إلى العقار المناسب',
			steps: [
				{ h: 'نفهم ما تحتاجه', t: 'أخبرنا بما تبحث عنه وتفضيلاتك وميزانيتك.' },
				{ h: 'نرشّح لك العقارات المناسبة', t: 'نختار لك عقارات سكنية أو استثمارية تناسب طلبك.' },
				{ h: 'نرافقك حتى إتمام الصفقة', t: 'نساعدك في الشراء أو البيع أو التأجير، مع تواصل واضح في كل خطوة.' }
			],
			servicesLink: 'اطّلع على جميع الخدمات'
		},
		servicesPage: { title: 'خدماتنا', sub: 'ما نقدّمه لك', h2: 'تسويق عقاري وبيع وإيجار', p: 'سواء كنت تريد الشراء أو البيع أو التأجير أو الاستثمار، يمكن لفيوتشر هاوس مساعدتك. هكذا ندعم عملاءنا.', contactAbout: 'استفسر عن هذه الخدمة' },
		faq: {
			title: 'الأسئلة الشائعة', sub: 'الأسئلة الشائعة', h2: 'إجابات عن الأسئلة المتكررة',
			items: [
				['ماذا تقدم فيوتشر هاوس؟', 'فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019. نسوّق العقارات ونبيعها ونؤجّرها، ونساعد العملاء في شراء العقارات التي تناسب احتياجاتهم وميزانيتهم.'],
				['ما المناطق التي تغطونها؟', 'نعمل في الإسكندرية والقاهرة الجديدة، وفي مواقع أخرى نروّج لها عبر قنواتنا الرسمية.'],
				['هل يمكنكم مساعدتي في شراء عقار؟', 'نعم. أخبرنا باحتياجاتك وتفضيلاتك وميزانيتك، وسنساعدك في العثور على عقارات سكنية أو استثمارية مناسبة.'],
				['هل يمكنكم مساعدتي في بيع عقاري؟', 'نعم. نسوّق العقارات المعروضة للبيع. تواصل معنا وزوّدنا بتفاصيل عقارك وسنناقش الخطوات التالية.'],
				['هل يمكنكم مساعدتي في استئجار عقار أو تأجير عقاري؟', 'نعم. نعمل مع المستأجرين الباحثين عن مكان للإيجار ومع الملّاك الراغبين في تأجير عقاراتهم.'],
				['أين يمكنني الاطلاع على أحدث العقارات؟', 'على قنواتنا الرسمية: إنستغرام وفيسبوك وتيك توك ويوتيوب ولينكدإن وثريدز. الروابط في أسفل كل صفحة.'],
				['كيف يمكنني التواصل معكم؟', 'اتصل بنا أو راسلنا عبر واتساب على {phone}، أو عبر البريد {email}، أو زر مكتبنا في {address}.']
			]
		},
		contact: {
			title: 'تواصل معنا', sub: 'يسعدنا تواصلك', h2: 'أخبرنا بما تبحث عنه',
			p: 'اتصل بنا أو راسلنا عبر واتساب أو البريد الإلكتروني أو أرسل النموذج، وسنعاود التواصل معك.',
			detailsH: 'بيانات التواصل', followH: 'تابعنا', openMap: 'افتح في خرائط جوجل',
			formH: 'أرسل لنا رسالة',
			f: { name: 'الاسم الكامل', phone: 'رقم الهاتف', email: 'البريد الإلكتروني (اختياري)', interest: 'أبحث عن', msg: 'الرسالة', send: 'أرسل عبر واتساب', req: 'مطلوب' },
			interests: [['', 'اختر من القائمة'], ['شراء عقار', 'شراء عقار'], ['استئجار عقار', 'استئجار عقار'], ['بيع عقاري', 'بيع عقاري'], ['تأجير عقاري', 'تأجير عقاري'], ['أمر آخر', 'أمر آخر']],
			hint: 'عند الإرسال يُفتح واتساب برسالتك جاهزة للإرسال. يمكنك أيضاً مراسلتنا على {email}.'
		},
		formMsg: {
			required: 'هذا الحقل مطلوب.',
			email: 'يرجى إدخال بريد إلكتروني صحيح.',
			phone: 'يرجى إدخال رقم هاتف صحيح.',
			summary: 'يرجى تصحيح الحقول المميّزة.',
			opening: 'جارٍ فتح واتساب ورسالتك جاهزة. اضغط «إرسال» داخل واتساب لإتمام الإرسال.',
			fallback: 'لم يُفتح واتساب؟ اضغط هنا لفتحه.',
			sent: 'شكراً لك. تم إرسال رسالتك وسنعاود التواصل معك.',
			failed: 'تعذّر إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.',
			greeting: 'مرحباً فيوتشر هاوس،',
			name: 'الاسم', phoneLbl: 'الهاتف', emailLbl: 'البريد الإلكتروني', interest: 'أبحث عن', message: 'الرسالة'
		},
		footer: { about: 'شركة تسويق وسمسرة عقارية تأسست عام 2019. نسوّق العقارات ونشتريها ونبيعها ونؤجّرها في الإسكندرية والقاهرة الجديدة وغيرهما.', links: 'روابط سريعة', follow: 'تابعنا', rights: 'جميع الحقوق محفوظة.' },
		notFound: { title: 'الصفحة غير موجودة | فيوتشر هاوس', h1: 'الصفحة غير موجودة', p: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.', home: 'العودة إلى الصفحة الرئيسية' }
	}
};

