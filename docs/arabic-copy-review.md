# Arabic copy review sheet

Generated from `tools/copy.mjs`. Please proofread the **Arabic** column and send back corrections; they are applied in `tools/copy.mjs`, then `node tools/build.mjs` regenerates the site.

## What to check
- Natural, professional Arabic suitable for the **Egyptian real estate market** (Modern Standard Arabic, not dialect).
- Meaning matches the English column. The English is the approved source; it only states confirmed facts.
- Terminology: "تسويق وسمسرة عقارية" (marketing & brokerage), "وحدات سكنية" (residential units), "الإيجار" (rental), "عقارات استثمارية" (investment properties).
- Brand name is always **فيوتشر هاوس** (confirmed spelling). Latin "Future House" appears only in the logo and technical metadata.
- Addresses/phones: Arabic address is "رشدي، أبو قير، مبنى 405 ب، الإسكندرية، مصر". Phone numbers stay in Latin digits on purpose, and are displayed left-to-right inside Arabic text.
- Strings containing `{phone}`, `{email}`, `{address}` are filled in automatically.

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
| `skip` | Skip to main content | انتقل إلى المحتوى الرئيسي | |
| `nav.index` | Home | الرئيسية | |
| `nav.about-us` | About Us | من نحن | |
| `nav.services` | Services | خدماتنا | |
| `nav.projects` | Developments | المشروعات | |
| `nav.team` | Our Team | فريقنا | |
| `nav.insights` | Insights | مقالات ونصائح | |
| `nav.faqs` | FAQs | الأسئلة الشائعة | |
| `nav.contact` | Contact | تواصل معنا | |
| `nav.privacy` | Privacy & Cookies | الخصوصية وملفات تعريف الارتباط | |
| `menuOpen` | Open menu | فتح القائمة | |
| `menuClose` | Close menu | إغلاق القائمة | |
| `mainNav` | Main navigation | القائمة الرئيسية | |
| `breadcrumb` | Breadcrumb | مسار التنقل | |
| `home` | Home | الرئيسية | |
| `logoAlt` | Future House – Real Estate Marketing | فيوتشر هاوس – تسويق عقاري | |
| `toTop` | Back to top | العودة إلى الأعلى | |
| `callLabel` | Phone | الهاتف | |
| `waLabel` | WhatsApp | واتساب | |
| `emailLabel` | Email | البريد الإلكتروني | |
| `addrLabel` | Address | العنوان | |
| `waGreeting` | Hello Future House, I would like to ask about a property. | مرحباً فيوتشر هاوس، أود الاستفسار عن عقار. | |
| `meta.privacy.title` | Privacy & Cookies | Future House | الخصوصية وملفات تعريف الارتباط | فيوتشر هاوس | |
| `meta.privacy.desc` | How Future House handles your information: what the website collects, how analytics cookies work, and how to accept, reject or change your choice. | كيف تتعامل فيوتشر هاوس مع معلوماتك: ما يجمعه الموقع، وكيف تعمل ملفات تعريف الارتباط التحليلية، وكيفية قبول اختيارك أو رفضه أو تغييره. | |
| `meta.projects.title` | Featured Developments | Future House Real Estate Marketing | المشروعات المميزة | فيوتشر هاوس للتسويق العقاري | |
| `meta.projects.desc` | Developments marketed by Future House, including Sarai, El Patio Oro, Creeks, Alex West and more. Contact us for current offers. | مشروعات تسوّقها فيوتشر هاوس، منها سراي وإل باتيو أورو وكريكس وأليكس ويست وغيرها. تواصل معنا لمعرفة العروض الحالية. | |
| `meta.team.title` | Our Team | Future House Real Estate Marketing & Brokerage | فريقنا | فيوتشر هاوس للتسويق والسمسرة العقارية | |
| `meta.team.desc` | Meet the property advisors and consultants of Future House, plus the top performers and promotions announced on our official channels. | تعرّف على المستشارين والاستشاريين العقاريين في فيوتشر هاوس، وأفضل الأداءات والترقيات المعلنة عبر قنواتنا الرسمية. | |
| `meta.insights.title` | Property Buying & Investment Tips | Future House | مقالات ونصائح عقارية | الشراء والاستثمار | فيوتشر هاوس | |
| `meta.insights.desc` | Practical guidance for property buyers and investors: a first-time buyer checklist and five keys to property investment success. | إرشادات عملية للمشترين والمستثمرين: قائمة تحقق لمشتري العقار لأول مرة، وخمسة مفاتيح لنجاح الاستثمار العقاري. | |
| `meta.index.title` | Future House | Real Estate Marketing & Brokerage, Alexandria | فيوتشر هاوس | تسويق وسمسرة عقارية في الإسكندرية | |
| `meta.index.desc` | Real estate marketing and brokerage in Alexandria and New Cairo. Future House helps you buy, sell and rent the right property for your needs and budget. | تسويق وسمسرة عقارية في الإسكندرية والقاهرة الجديدة. تساعدك فيوتشر هاوس على شراء العقار المناسب أو بيعه أو تأجيره بما يناسب احتياجاتك وميزانيتك. | |
| `meta.about-us.title` | About Us | Future House Real Estate Marketing & Brokerage | من نحن | فيوتشر هاوس للتسويق والسمسرة العقارية | |
| `meta.about-us.desc` | Future House is a real estate marketing and brokerage company founded in 2019 in Alexandria, Egypt. Learn who we are and how we match clients with properties. | فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019 في الإسكندرية، مصر. تعرّف علينا وعلى طريقتنا في ربط العملاء بالعقارات المناسبة. | |
| `meta.services.title` | Real Estate Services | Buy, Sell & Rent with Future House | الخدمات العقارية | شراء وبيع وتأجير مع فيوتشر هاوس | |
| `meta.services.desc` | Property marketing, sales, buying support and rentals for residential and investment properties in Alexandria and New Cairo. | تسويق العقارات وبيعها ومساعدتك في الشراء والتأجير للعقارات السكنية والاستثمارية في الإسكندرية والقاهرة الجديدة. | |
| `meta.faqs.title` | FAQs | Future House Real Estate in Alexandria | الأسئلة الشائعة | فيوتشر هاوس للعقارات في الإسكندرية | |
| `meta.faqs.desc` | Answers to common questions about Future House: our services, the areas we cover, and how to buy, sell or rent a property with us. | إجابات عن الأسئلة الشائعة حول فيوتشر هاوس: خدماتنا، والمناطق التي نعمل بها، وكيفية شراء عقار أو بيعه أو تأجيره معنا. | |
| `meta.contact.title` | Contact Us | Future House, Roushdy, Alexandria | تواصل معنا | فيوتشر هاوس، رشدي، الإسكندرية | |
| `meta.contact.desc` | Contact Future House by phone, WhatsApp or email, or visit us in Roushdy, Abu Qir, Alexandria. Tell us what property you are looking for. | تواصل مع فيوتشر هاوس عبر الهاتف أو واتساب أو البريد الإلكتروني، أو زرنا في رشدي، أبو قير، الإسكندرية. أخبرنا بالعقار الذي تبحث عنه. | |
| `hero.eyebrow` | Real Estate Marketing & Brokerage | تسويق وسمسرة عقارية | |
| `hero.h1` | Find the right property, with confidence | اعثر على العقار المناسب لك بثقة | |
| `hero.lead` | Future House markets, sells and rents properties in Alexandria and New Cairo, and helps you buy the one that fits your needs and budget. | تُسوّق فيوتشر هاوس العقارات وتبيعها وتؤجّرها في الإسكندرية والقاهرة الجديدة، وتساعدك على شراء العقار الذي يناسب احتياجاتك وميزانيتك. | |
| `hero.cta1` | Explore our services | اكتشف خدماتنا | |
| `hero.cta2` | Chat on WhatsApp | تواصل عبر واتساب | |
| `welcome.h2` | Welcome to Future House | أهلاً بك في فيوتشر هاوس | |
| `welcome.h3` | Your Future House is our mission | بيتك المستقبلي هو مهمتنا | |
| `welcome.text` | Future House is a real estate marketing and brokerage company established in 2019. We specialize in marketing, buying, selling and renting properties, helping our clients find the right property based on their needs, preferences and budget, from homes to investment properties in Alexandria, New Cairo and other locations we promote through our official channels. | فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019. نتخصص في تسويق العقارات وشرائها وبيعها وتأجيرها، ونساعد عملاءنا في العثور على العقار المناسب وفقاً لاحتياجاتهم وتفضيلاتهم وميزانيتهم، بدءاً من المنازل وحتى العقارات الاستثمارية في الإسكندرية والقاهرة الجديدة وغيرهما من المواقع التي نروّج لها عبر قنواتنا الرسمية. | |
| `welcome.link` | More about us | المزيد عنا | |
| `values[0].icon` | flaticon-avatar-1 | flaticon-avatar-1 | |
| `values[0].h` | Needs-first matching | نبدأ من احتياجاتك | |
| `values[0].cat` | Residential & investment | سكني واستثماري | |
| `values[0].t` | We start with what you need, prefer and can afford, then shortlist the properties that genuinely fit. | نبدأ بما تحتاجه وتفضّله وما تسمح به ميزانيتك، ثم نرشّح لك العقارات التي تناسبك فعلاً. | |
| `values[1].icon` | flaticon-correct | flaticon-correct | |
| `values[1].h` | Real estate marketing | تسويق عقاري | |
| `values[1].cat` | Reach the right audience | الوصول إلى الجمهور المناسب | |
| `values[1].t` | Properties are presented on our official channels on Instagram, Facebook, TikTok, YouTube, LinkedIn and Threads to reach interested buyers and renters. | نعرض العقارات عبر قنواتنا الرسمية على إنستغرام وفيسبوك وتيك توك ويوتيوب ولينكدإن وثريدز لنصل إلى المشترين والمستأجرين المهتمين. | |
| `values[2].icon` | flaticon-compass | flaticon-compass | |
| `values[2].h` | Local focus | تركيز محلي | |
| `values[2].cat` | Alexandria & New Cairo | الإسكندرية والقاهرة الجديدة | |
| `values[2].t` | Our office is in Alexandria, and we work across Alexandria, New Cairo and other locations we promote. | يقع مكتبنا في الإسكندرية، ونعمل في الإسكندرية والقاهرة الجديدة وغيرهما من المواقع التي نروّج لها. | |
| `servicesSec.sub` | What we do | ما نقدّمه لك | |
| `servicesSec.h2` | Our Services | خدماتنا | |
| `servicesSec.all` | All services | جميع الخدمات | |
| `services[0].icon` | flaticon-improvement | flaticon-improvement | |
| `services[0].h` | Real Estate Marketing | التسويق العقاري | |
| `services[0].t` | We market properties through professional content and our official social channels to attract serious buyers and renters. | نسوّق العقارات بمحتوى احترافي وعبر قنواتنا الرسمية على وسائل التواصل لجذب مشترين ومستأجرين جادين. | |
| `services[1].icon` | flaticon-parquet | flaticon-parquet | |
| `services[1].h` | Property Sales | بيع العقارات | |
| `services[1].t` | Selling a property? We list it, promote it and help you reach interested buyers. | هل تريد بيع عقارك؟ نعرضه ونروّج له ونساعدك في الوصول إلى المشترين المهتمين. | |
| `services[2].icon` | flaticon-window | flaticon-window | |
| `services[2].h` | Buying Support | مساعدتك في الشراء | |
| `services[2].t` | We help you find and buy a property that fits your needs, preferences and budget. | نساعدك في العثور على عقار يناسب احتياجاتك وتفضيلاتك وميزانيتك وشرائه. | |
| `services[3].icon` | flaticon-tiles | flaticon-tiles | |
| `services[3].h` | Property Rentals | الإيجار | |
| `services[3].t` | Looking to rent, or to rent out your property? We connect tenants and owners. | تبحث عن عقار للإيجار أو تريد تأجير عقارك؟ نصلك بالمستأجرين والملّاك. | |
| `services[4].icon` | flaticon-two | flaticon-two | |
| `services[4].h` | Residential Properties | وحدات سكنية | |
| `services[4].t` | Homes matched to how you live and what you can afford. | وحدات سكنية تناسب أسلوب حياتك وما تستطيع تحمّله. | |
| `services[5].icon` | flaticon-bright-lightbulb | flaticon-bright-lightbulb | |
| `services[5].h` | Investment Properties | عقارات استثمارية | |
| `services[5].t` | Options for clients who want to invest in real estate, matched to their budget and goals. | خيارات للعملاء الراغبين في الاستثمار العقاري، تناسب ميزانيتهم وأهدافهم. | |
| `areas.sub` | Where we work | أين نعمل | |
| `areas.h2` | Alexandria, New Cairo and beyond | الإسكندرية والقاهرة الجديدة وغيرهما | |
| `areas.items[0].h` | Alexandria | الإسكندرية | |
| `areas.items[0].t` | Our home base. Our office is in Roushdy, Abu Qir. | مقرّنا الرئيسي. يقع مكتبنا في رشدي، أبو قير. | |
| `areas.items[1].h` | New Cairo | القاهرة الجديدة | |
| `areas.items[1].t` | Properties in New Cairo for buyers and renters. | عقارات في القاهرة الجديدة للمشترين والمستأجرين. | |
| `areas.items[2].h` | More locations | مواقع أخرى | |
| `areas.items[2].t` | Other locations are promoted through our official channels. Follow us to see what is new. | نروّج لمواقع أخرى عبر قنواتنا الرسمية. تابعنا لتعرف الجديد. | |
| `channels.sub` | Latest properties & updates | أحدث العقارات والأخبار | |
| `channels.h2` | See our properties on our official channels | شاهد عقاراتنا على قنواتنا الرسمية | |
| `channels.p` | New properties, tours and updates are published on our official channels. Follow us to see what is available. | ننشر العقارات الجديدة والجولات والتحديثات على قنواتنا الرسمية. تابعنا لتعرف ما هو متاح. | |
| `channels.follow` | Follow | تابعنا | |
| `channels.watch` | Watch | شاهد | |
| `cta.text` | Ready to find your next property? | هل أنت مستعد للعثور على عقارك القادم؟ | |
| `cta.h2` | Tell us what you are looking for | أخبرنا بما تبحث عنه | |
| `cta.c1` | Chat on WhatsApp | تواصل عبر واتساب | |
| `cta.c2` | Contact us | تواصل معنا | |
| `about.title` | About Us | من نحن | |
| `about.h2` | Who we are | من نحن | |
| `about.p1` | Future House is a real estate marketing and brokerage company established in 2019 and based in Alexandria, Egypt. We specialize in marketing, buying, selling and renting properties. | فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019 ومقرها الإسكندرية، مصر. نتخصص في تسويق العقارات وشرائها وبيعها وتأجيرها. | |
| `about.p2` | Our work is simple: help clients find the right property based on their needs, preferences and budget. Whether you are looking for a home or an investment property, we connect you with suitable options in Alexandria, New Cairo and other locations we promote through our official channels. | عملنا بسيط: مساعدة العملاء في العثور على العقار المناسب وفقاً لاحتياجاتهم وتفضيلاتهم وميزانيتهم. سواء كنت تبحث عن منزل أو عقار استثماري، نربطك بخيارات مناسبة في الإسكندرية والقاهرة الجديدة وغيرهما من المواقع التي نروّج لها عبر قنواتنا الرسمية. | |
| `about.p3` | Our mission, in our own words: “Your Future House is our mission.” | رسالتنا بكلماتنا: «بيتك المستقبلي هو مهمتنا». | |
| `about.factsTitle` | At a glance | لمحة سريعة | |
| `about.facts[0][0]` | Founded | تأسست | |
| `about.facts[1][0]` | What we do | مجال العمل | |
| `about.facts[1][1]` | Real estate marketing & brokerage | تسويق وسمسرة عقارية | |
| `about.facts[2][0]` | Office | المكتب | |
| `about.facts[2][1]` | Roushdy, Abu Qir, Building 405 B, Alexandria, Egypt | رشدي، أبو قير، مبنى 405 ب، الإسكندرية، مصر | |
| `about.facts[3][0]` | We work in | نعمل في | |
| `about.facts[3][1]` | Alexandria, New Cairo and other promoted locations | الإسكندرية والقاهرة الجديدة ومواقع أخرى نروّج لها | |
| `about.howSub` | How we work | كيف نعمل | |
| `about.howH2` | From your brief to the right property | من طلبك إلى العقار المناسب | |
| `about.steps[0].h` | We understand what you need | نفهم ما تحتاجه | |
| `about.steps[0].t` | Tell us what you are looking for, your preferences and your budget. | أخبرنا بما تبحث عنه وتفضيلاتك وميزانيتك. | |
| `about.steps[1].h` | We match you with suitable properties | نرشّح لك العقارات المناسبة | |
| `about.steps[1].t` | We shortlist residential or investment properties that fit your brief. | نختار لك عقارات سكنية أو استثمارية تناسب طلبك. | |
| `about.steps[2].h` | We support you to the deal | نرافقك حتى إتمام الصفقة | |
| `about.steps[2].t` | We help you through buying, selling or renting, with clear communication along the way. | نساعدك في الشراء أو البيع أو التأجير، مع تواصل واضح في كل خطوة. | |
| `about.servicesLink` | See all services | اطّلع على جميع الخدمات | |
| `servicesPage.title` | Our Services | خدماتنا | |
| `servicesPage.sub` | What we do | ما نقدّمه لك | |
| `servicesPage.h2` | Real estate marketing, sales and rentals | تسويق عقاري وبيع وإيجار | |
| `servicesPage.p` | Whether you want to buy, sell, rent or invest, Future House can help. Here is how we support our clients. | سواء كنت تريد الشراء أو البيع أو التأجير أو الاستثمار، يمكن لفيوتشر هاوس مساعدتك. هكذا ندعم عملاءنا. | |
| `servicesPage.contactAbout` | Ask about this service | استفسر عن هذه الخدمة | |
| `faq.title` | Frequently Asked Questions | الأسئلة الشائعة | |
| `faq.sub` | FAQs | الأسئلة الشائعة | |
| `faq.h2` | Answers to common questions | إجابات عن الأسئلة المتكررة | |
| `faq.items[0][0]` | What does Future House do? | ماذا تقدم فيوتشر هاوس؟ | |
| `faq.items[0][1]` | Future House is a real estate marketing and brokerage company established in 2019. We market, sell and rent properties and help clients buy properties that fit their needs and budget. | فيوتشر هاوس شركة تسويق وسمسرة عقارية تأسست عام 2019. نسوّق العقارات ونبيعها ونؤجّرها، ونساعد العملاء في شراء العقارات التي تناسب احتياجاتهم وميزانيتهم. | |
| `faq.items[1][0]` | Which areas do you cover? | ما المناطق التي تغطونها؟ | |
| `faq.items[1][1]` | We work in Alexandria and New Cairo, and in other locations that we promote through our official channels. | نعمل في الإسكندرية والقاهرة الجديدة، وفي مواقع أخرى نروّج لها عبر قنواتنا الرسمية. | |
| `faq.items[2][0]` | Can you help me buy a property? | هل يمكنكم مساعدتي في شراء عقار؟ | |
| `faq.items[2][1]` | Yes. Tell us your needs, preferences and budget, and we will help you find suitable residential or investment properties. | نعم. أخبرنا باحتياجاتك وتفضيلاتك وميزانيتك، وسنساعدك في العثور على عقارات سكنية أو استثمارية مناسبة. | |
| `faq.items[3][0]` | Can you help me sell my property? | هل يمكنكم مساعدتي في بيع عقاري؟ | |
| `faq.items[3][1]` | Yes. We market properties for sale. Contact us with details about your property and we will discuss the next steps. | نعم. نسوّق العقارات المعروضة للبيع. تواصل معنا وزوّدنا بتفاصيل عقارك وسنناقش الخطوات التالية. | |
| `faq.items[4][0]` | Can you help me rent a property, or rent mine out? | هل يمكنكم مساعدتي في استئجار عقار أو تأجير عقاري؟ | |
| `faq.items[4][1]` | Yes. We work with tenants looking for a place to rent and with owners who want to rent out their property. | نعم. نعمل مع المستأجرين الباحثين عن مكان للإيجار ومع الملّاك الراغبين في تأجير عقاراتهم. | |
| `faq.items[5][0]` | Where can I see your latest properties? | أين يمكنني الاطلاع على أحدث العقارات؟ | |
| `faq.items[5][1]` | On our official channels: Instagram, Facebook, TikTok, YouTube, LinkedIn and Threads. The links are at the bottom of every page. | على قنواتنا الرسمية: إنستغرام وفيسبوك وتيك توك ويوتيوب ولينكدإن وثريدز. الروابط في أسفل كل صفحة. | |
| `faq.items[6][0]` | How can I contact you? | كيف يمكنني التواصل معكم؟ | |
| `faq.items[6][1]` | Call us on {phone}, message us on WhatsApp at {wa}, email {email}, or visit our office at {address}. | اتصل بنا على {phone}، أو راسلنا عبر واتساب على {wa}، أو عبر البريد {email}، أو زر مكتبنا في {address}. | |
| `contact.title` | Contact Us | تواصل معنا | |
| `contact.sub` | Get in touch | يسعدنا تواصلك | |
| `contact.h2` | Tell us what you are looking for | أخبرنا بما تبحث عنه | |
| `contact.p` | Call, message us on WhatsApp, email us or send the form. We will get back to you. | اتصل بنا أو راسلنا عبر واتساب أو البريد الإلكتروني أو أرسل النموذج، وسنعاود التواصل معك. | |
| `contact.detailsH` | Contact details | بيانات التواصل | |
| `contact.followH` | Follow us | تابعنا | |
| `contact.openMap` | Open in Google Maps | افتح في خرائط جوجل | |
| `contact.formH` | Send us a message | أرسل لنا رسالة | |
| `contact.f.name` | Full name | الاسم الكامل | |
| `contact.f.phone` | Phone number | رقم الهاتف | |
| `contact.f.email` | Email (optional) | البريد الإلكتروني (اختياري) | |
| `contact.f.interest` | I am looking to | أبحث عن | |
| `contact.f.msg` | Message | الرسالة | |
| `contact.f.send` | Send via WhatsApp | أرسل عبر واتساب | |
| `contact.f.req` | required | مطلوب | |
| `contact.interests[0][1]` | Select an option | اختر من القائمة | |
| `contact.interests[1][0]` | Buy a property | شراء عقار | |
| `contact.interests[1][1]` | Buy a property | شراء عقار | |
| `contact.interests[2][0]` | Rent a property | استئجار عقار | |
| `contact.interests[2][1]` | Rent a property | استئجار عقار | |
| `contact.interests[3][0]` | Sell my property | بيع عقاري | |
| `contact.interests[3][1]` | Sell my property | بيع عقاري | |
| `contact.interests[4][0]` | Rent out my property | تأجير عقاري | |
| `contact.interests[4][1]` | Rent out my property | تأجير عقاري | |
| `contact.interests[5][0]` | Something else | أمر آخر | |
| `contact.interests[5][1]` | Something else | أمر آخر | |
| `contact.hint` | When you submit, WhatsApp opens with your message ready to send. You can also email us at {email}. | عند الإرسال يُفتح واتساب برسالتك جاهزة للإرسال. يمكنك أيضاً مراسلتنا على {email}. | |
| `pages2.waAbout` | Hello Future House, I would like to know more about {name}. | مرحباً فيوتشر هاوس، أود معرفة المزيد عن مشروع {name}. | |
| `pages2.viewFull` | View full size | عرض بالحجم الكامل | |
| `pages2.projects.title` | Featured Developments | المشروعات المميزة | |
| `pages2.projects.sub` | Developments we market | مشروعات نسوّقها | |
| `pages2.projects.h2` | Developments promoted by Future House | مشروعات تروّج لها فيوتشر هاوس | |
| `pages2.projects.p` | Some of the developments we have promoted on our official channels. Each card shows the campaign poster as published. | بعض المشروعات التي روّجنا لها عبر قنواتنا الرسمية. تعرض كل بطاقة ملصق الحملة كما نُشر. | |
| `pages2.projects.note` | Campaign visuals as published on our social media channels. Offers, prices and payment terms shown in them may have changed, so please contact us for current details. Project names and developers are as printed on the posters. | مواد الحملات كما نُشرت على قنواتنا في وسائل التواصل. قد تكون العروض والأسعار وشروط السداد الظاهرة فيها قد تغيّرت، لذا يُرجى التواصل معنا لمعرفة التفاصيل الحالية. أسماء المشروعات والمطورين كما وردت على الملصقات. | |
| `pages2.projects.by` | by | من | |
| `pages2.projects.ask` | Ask about this development | استفسر عن هذا المشروع | |
| `pages2.team.title` | Our Team | فريقنا | |
| `pages2.team.sub` | The people behind Future House | من يقف خلف فيوتشر هاوس | |
| `pages2.team.h2` | Our property advisors and consultants | مستشارونا واستشاريونا العقاريون | |
| `pages2.team.p` | Announcements from our official channels celebrating the members of our sales team. | إعلانات من قنواتنا الرسمية تحتفي بأعضاء فريق المبيعات لدينا. | |
| `pages2.team.promoH` | Promotions | الترقيات | |
| `pages2.team.promoP` | Team members promoted to new positions, as announced on our official channels. | أعضاء الفريق الذين تمت ترقيتهم إلى مناصب جديدة، كما أُعلن على قنواتنا الرسمية. | |
| `pages2.team.rankH` | Top performers | أفضل الأداءات | |
| `pages2.team.rankP` | Our top performers of the last quarter (Q2 2026), as announced on our official channels. | أفضل أداءً لدينا في الربع الأخير (الربع الثاني من 2026)، كما أُعلن على قنواتنا الرسمية. | |
| `pages2.team.bestH` | Employee of the month | موظف الشهر | |
| `pages2.team.bestDate` | August 2025 | أغسطس 2025 | |
| `pages2.team.rank` | Rank | المركز | |
| `pages2.insights.title` | Real Estate Insights | مقالات ونصائح عقارية | |
| `pages2.insights.sub` | Guides for buyers and investors | أدلة للمشترين والمستثمرين | |
| `pages2.insights.h2` | Buying and investing, explained simply | الشراء والاستثمار ببساطة | |
| `pages2.insights.p` | Practical points to keep in mind before you buy or invest. General information only, not financial advice. | نقاط عملية يجب وضعها في الاعتبار قبل الشراء أو الاستثمار. معلومات عامة فقط وليست نصيحة مالية. | |
| `pages2.insights.a1.h` | First-time buyer checklist | قائمة تحقق لمشتري العقار لأول مرة | |
| `pages2.insights.a1.intro` | A first property purchase involves many decisions, and a single small detail can matter more than you expect. Before you decide, keep these points in mind: | تجربة شراء العقار الأولى مليئة بالقرارات، وقد تفرق تفصيلة واحدة صغيرة أكثر مما تتوقع. قبل أن تقرر، ضع هذه النقاط في اعتبارك: | |
| `pages2.insights.a1.points[0]` | Do not decide on price alone. | لا تختر على أساس السعر وحده. | |
| `pages2.insights.a1.points[1]` | Review the contract details and the payment terms. | راجع تفاصيل العقد وشروط السداد. | |
| `pages2.insights.a1.points[2]` | Check the location of the project and the services around it. | تأكد من موقع المشروع والخدمات المحيطة به. | |
| `pages2.insights.a1.points[3]` | Compare your own needs with the unit you are choosing. | قارن بين احتياجاتك والوحدة التي تختارها. | |
| `pages2.insights.a1.points[4]` | Do not move forward on any detail until you understand it. | لا تمضِ في أي تفصيلة قبل أن تفهمها. | |
| `pages2.insights.a1.outro` | The right property is the one that fits your life, not just your wishlist: think about location, budget, lifestyle and future plans. | العقار المناسب هو الذي يناسب حياتك، لا قائمة أمنياتك فقط: فكّر في الموقع والميزانية وأسلوب الحياة وخططك المستقبلية. | |
| `pages2.insights.a2.h` | 5 keys to property investment success | 5 مفاتيح لنجاح الاستثمار العقاري | |
| `pages2.insights.a2.intro` | Five points to consider when you are thinking about investing in property: | خمس نقاط تستحق التفكير عند النظر في الاستثمار العقاري: | |
| `pages2.insights.a2.keys[0][0]` | Timing | التوقيت | |
| `pages2.insights.a2.keys[0][1]` | When you invest in new homes, consider the timing. The early stages of a new development can offer the most room for growth, so it can pay to decide sooner rather than later. | عند الاستثمار في المنازل الجديدة، ضع التوقيت في اعتبارك. قد توفر المراحل الأولى من المشروع الجديد أكبر مساحة للنمو، لذا قد يكون القرار المبكر أفضل من المتأخر. | |
| `pages2.insights.a2.keys[1][0]` | Location | الموقع | |
| `pages2.insights.a2.keys[1][1]` | Look for a growing area with strong demand. Check that the development has access to current or planned amenities and is close to the region's growth corridors. | ابحث عن منطقة نامية يزداد عليها الطلب. تأكد من أن المشروع يتمتع بخدمات قائمة أو مخططة وقريب من محاور النمو في المنطقة. | |
| `pages2.insights.a2.keys[2][0]` | Quality | الجودة | |
| `pages2.insights.a2.keys[2][1]` | Land is valuable, but what is built on it matters. Look for qualified, experienced professionals, such as construction experts, designers and property managers, who can deliver a property that tenants and buyers will be proud of. | الأرض ثمينة، لكن ما يُبنى عليها هو الأهم. اختر متخصصين مؤهلين وذوي خبرة، مثل خبراء الإنشاء والمصممين ومديري العقارات، قادرين على تقديم عقار يفخر به المستأجرون والمشترون. | |
| `pages2.insights.a2.keys[3][0]` | Price and deal | السعر والصفقة | |
| `pages2.insights.a2.keys[3][1]` | Buying a new home or land can be a chance to enter a sought-after market at a competitive price. Compare prices with the median price in the area and act on deals with the right timing. | قد يكون شراء منزل جديد أو أرض فرصة لدخول سوق مطلوب بسعر تنافسي. قارن الأسعار بمتوسط السعر في المنطقة، واغتنم الصفقات ذات التوقيت المناسب. | |
| `pages2.insights.a2.keys[4][0]` | Risk | المخاطر | |
| `pages2.insights.a2.keys[4][1]` | No investment is without risk. Working with the right partner and team can help you reduce unnecessary risk. Look for developers and agents who are willing to work with you to lower it, and for examples of investors who have succeeded with them. | لا يخلو أي استثمار من المخاطر. العمل مع الشريك والفريق المناسبين قد يساعدك على تقليل المخاطر غير الضرورية. ابحث عن مطورين ووسطاء مستعدين للعمل معك لتقليلها، وعن أمثلة لمستثمرين نجحوا معهم. | |
| `pages2.insights.a2.slides` | Slides from our educational post | شرائح من منشورنا التعليمي | |
| `pages2.insights.a2.note` | General information only, not financial advice. Based on an educational post from our official channels. | معلومات عامة فقط وليست نصيحة مالية. مستندة إلى منشور تعليمي من قنواتنا الرسمية. | |
| `pages2.home.sub` | Developments we market | مشروعات نسوّقها | |
| `pages2.home.h2` | Featured developments | مشروعات مميزة | |
| `pages2.home.p` | Campaign posters for some of the developments we promote. Contact us for current offers. | ملصقات حملات لبعض المشروعات التي نروّج لها. تواصل معنا لمعرفة العروض الحالية. | |
| `pages2.home.all` | View all developments | عرض جميع المشروعات | |
| `pages2.home.carousel` | Featured developments, swipe sideways to see more | المشروعات المميزة، اسحب جانبياً لعرض المزيد | |
| `pages2.about.journeyH` | Our people and our journey | فريقنا ومسيرتنا | |
| `pages2.about.journeyP` | Future House started in 2019 with a vision and has grown into a team of property advisors and consultants. Meet some of them on our team page. | بدأت فيوتشر هاوس عام 2019 برؤية، وتحوّلت إلى فريق من المستشارين والاستشاريين العقاريين. تعرّف على بعضهم في صفحة فريقنا. | |
| `pages2.about.teamLink` | Meet our team | تعرّف على فريقنا | |
| `pages2.about.collageCap` | From our company anniversary celebration | من احتفال الذكرى السنوية للشركة | |
| `pages2.about.campH` | From our campaigns | من حملاتنا | |
| `pages2.about.campP` | Artwork from Future House brand campaigns published on our social channels. These are creative visuals, not specific projects. | أعمال فنية من حملات فيوتشر هاوس المنشورة على قنواتنا في وسائل التواصل. هذه مواد إبداعية وليست مشروعات بعينها. | |
| `legal.consent.region` | Cookie preferences | تفضيلات ملفات تعريف الارتباط | |
| `legal.consent.text` | We use analytics cookies to understand how visitors use our website and to improve it. They only run if you accept, and you can change your choice at any time. | نستخدم ملفات تعريف الارتباط التحليلية لفهم كيفية استخدام الزوار لموقعنا وتحسينه. لا تعمل إلا إذا وافقت، ويمكنك تغيير اختيارك في أي وقت. | |
| `legal.consent.accept` | Accept | قبول | |
| `legal.consent.reject` | Reject | رفض | |
| `legal.consent.policy` | Privacy & cookies | الخصوصية وملفات تعريف الارتباط | |
| `legal.footer.privacy` | Privacy & cookies | الخصوصية وملفات تعريف الارتباط | |
| `legal.footer.settings` | Cookie settings | إعدادات ملفات تعريف الارتباط | |
| `legal.privacy.title` | Privacy & Cookies | الخصوصية وملفات تعريف الارتباط | |
| `legal.privacy.updated` | Last updated: 24 November 2026 | آخر تحديث: 24 نوفمبر 2026 | |
| `legal.privacy.intro` | This notice explains what this website collects, how analytics cookies work, and the choices you have. | يوضح هذا الإشعار ما الذي يجمعه هذا الموقع، وكيف تعمل ملفات تعريف الارتباط التحليلية، والخيارات المتاحة لك. | |
| `legal.privacy.sections[0][0]` | Who we are | من نحن | |
| `legal.privacy.sections[0][1]` | This website is operated by Future House, a real estate marketing and brokerage company based at Roushdy, Abu Qir, Building 405 B, Alexandria, Egypt. For any privacy question, contact us at info@futurehouseegy.com or +20 155 338 2233. | يُدير هذا الموقع شركة فيوتشر هاوس، شركة تسويق وسمسرة عقارية، ومقرها رشدي، أبو قير، مبنى 405 ب، الإسكندرية، مصر. لأي استفسار عن الخصوصية، تواصل معنا على info@futurehouseegy.com أو على الرقم +20 155 338 2233. | |
| `legal.privacy.sections[1][0]` | What information we collect | ما المعلومات التي نجمعها | |
| `legal.privacy.sections[1][1]` | list,Messages you send us. The contact form does not store anything on this website. When you submit it, WhatsApp opens with your message ready to send, and what you send is handled by WhatsApp. If you call, message or email us, we receive the details you choose to share.,Website analytics, only if you accept. With your consent we use Google Tag Manager and Google Analytics to count visits and understand which pages and links are used, for example clicks on WhatsApp, phone and email links. This includes pages viewed, approximate location, and device and browser type. We do not use advertising cookies. | list,الرسائل التي ترسلها إلينا. لا يحفظ نموذج التواصل أي بيانات على هذا الموقع. عند إرساله يُفتح واتساب برسالتك جاهزة للإرسال، ويتولى واتساب معالجة ما ترسله. وإذا اتصلت بنا أو راسلتنا أو أرسلت لنا بريداً إلكترونياً، نتلقى البيانات التي تختار مشاركتها.,تحليلات الموقع، فقط إذا وافقت. بموافقتك نستخدم Google Tag Manager وGoogle Analytics لإحصاء الزيارات وفهم الصفحات والروابط المستخدمة، مثل النقر على روابط واتساب والهاتف والبريد الإلكتروني. ويشمل ذلك الصفحات التي تمت زيارتها والموقع التقريبي ونوع الجهاز والمتصفح. لا نستخدم ملفات تعريف ارتباط إعلانية. | |
| `legal.privacy.sections[2][0]` | Cookies and similar storage | ملفات تعريف الارتباط والتخزين المشابه | |
| `legal.privacy.sections[2][1]` | list,Your choice (fh_consent): stored in your browser to remember whether you accepted or rejected analytics. It is not sent to us or to anyone else.,Analytics cookies (_ga and _ga_*): set by Google Analytics only after you accept, to tell visitors apart and measure visits.,If you reject, or have not made a choice, Google Tag Manager and Google Analytics are not loaded and no analytics cookies are set. | list,اختيارك (fh_consent): يُحفظ في متصفحك لتذكّر قبولك أو رفضك للتحليلات. ولا يُرسل إلينا ولا إلى أي جهة أخرى.,ملفات التحليلات (_ga و _ga_*): يضعها Google Analytics فقط بعد موافقتك، للتمييز بين الزوار وقياس الزيارات.,إذا رفضت أو لم تختر، لا يتم تحميل Google Tag Manager وGoogle Analytics ولا تُوضع أي ملفات تعريف ارتباط تحليلية. | |
| `legal.privacy.sections[3][0]` | Your choices | خياراتك | |
| `legal.privacy.sections[3][1]` | You can accept or reject analytics when you first visit, and change your mind at any time using "Cookie settings" at the bottom of every page. Rejecting does not affect how you can use the website. You can also delete cookies in your browser settings. | يمكنك قبول التحليلات أو رفضها عند زيارتك الأولى، وتغيير رأيك في أي وقت من خلال «إعدادات ملفات تعريف الارتباط» أسفل كل صفحة. ولا يؤثر الرفض على استخدامك للموقع. ويمكنك أيضاً حذف ملفات تعريف الارتباط من إعدادات متصفحك. | |
| `legal.privacy.sections[4][0]` | Third parties | الأطراف الثالثة | |
| `legal.privacy.sections[4][1]` | Google (Tag Manager and Analytics, only after you accept) and WhatsApp (when you choose to message us). Links to our social media pages, Google Maps and other websites lead to services with their own privacy policies. The fonts and images on this website are hosted on our own site. | Google (‏Tag Manager وAnalytics، فقط بعد موافقتك) وواتساب (عندما تختار مراسلتنا). تؤدي الروابط إلى صفحاتنا على وسائل التواصل وخرائط جوجل ومواقع أخرى إلى خدمات لها سياسات خصوصية خاصة بها. أما الخطوط والصور في هذا الموقع فتُستضاف على موقعنا نفسه. | |
| `legal.privacy.sections[5][0]` | How long we keep data | مدة الاحتفاظ بالبيانات | |
| `legal.privacy.sections[5][1]` | Analytics data is kept for the period configured in our Google Analytics account. Messages you send us are kept only as long as needed to reply to you and for our business records. | تُحفظ بيانات التحليلات للمدة المضبوطة في حساب Google Analytics الخاص بنا. وتُحفظ الرسائل التي ترسلها إلينا للمدة اللازمة فقط للرد عليك ولسجلات عملنا. | |
| `legal.privacy.sections[6][0]` | Your rights | حقوقك | |
| `legal.privacy.sections[6][1]` | Under applicable data protection law, including Egypt's Personal Data Protection Law (Law No. 151 of 2020), you may ask to access, correct or delete your personal data, or object to how it is used. Contact us at info@futurehouseegy.com. | وفقاً لقوانين حماية البيانات المعمول بها، ومنها قانون حماية البيانات الشخصية المصري (القانون رقم 151 لسنة 2020)، يحق لك طلب الاطلاع على بياناتك الشخصية أو تصحيحها أو حذفها، أو الاعتراض على طريقة استخدامها. تواصل معنا على info@futurehouseegy.com. | |
| `legal.privacy.sections[7][0]` | Changes to this notice | تعديلات هذا الإشعار | |
| `legal.privacy.sections[7][1]` | We may update this notice from time to time. The date at the top shows when it was last changed. | قد نُحدّث هذا الإشعار من وقت لآخر. يوضح التاريخ في أعلاه آخر تعديل. | |
| `formMsg.required` | This field is required. | هذا الحقل مطلوب. | |
| `formMsg.email` | Please enter a valid email address. | يرجى إدخال بريد إلكتروني صحيح. | |
| `formMsg.phone` | Please enter a valid phone number. | يرجى إدخال رقم هاتف صحيح. | |
| `formMsg.summary` | Please correct the highlighted fields. | يرجى تصحيح الحقول المميّزة. | |
| `formMsg.opening` | Opening WhatsApp with your message ready. Press send in WhatsApp to deliver it. | جارٍ فتح واتساب ورسالتك جاهزة. اضغط «إرسال» داخل واتساب لإتمام الإرسال. | |
| `formMsg.fallback` | WhatsApp did not open? Tap here to open it. | لم يُفتح واتساب؟ اضغط هنا لفتحه. | |
| `formMsg.sent` | Thank you. Your message was sent and we will get back to you. | شكراً لك. تم إرسال رسالتك وسنعاود التواصل معك. | |
| `formMsg.failed` | Your message could not be sent. Please try again or contact us on WhatsApp. | تعذّر إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب. | |
| `formMsg.greeting` | Hello Future House, | مرحباً فيوتشر هاوس، | |
| `formMsg.name` | Name | الاسم | |
| `formMsg.phoneLbl` | Phone | الهاتف | |
| `formMsg.emailLbl` | Email | البريد الإلكتروني | |
| `formMsg.interest` | I am looking to | أبحث عن | |
| `formMsg.message` | Message | الرسالة | |
| `footer.tagline` | Est. 2019 · Alexandria, Egypt | تأسست عام 2019 · الإسكندرية، مصر | |
| `footer.about` | Real estate marketing and brokerage company established in 2019. We market, buy, sell and rent properties in Alexandria, New Cairo and beyond. | شركة تسويق وسمسرة عقارية تأسست عام 2019. نسوّق العقارات ونشتريها ونبيعها ونؤجّرها في الإسكندرية والقاهرة الجديدة وغيرهما. | |
| `footer.links` | Quick links | روابط سريعة | |
| `footer.follow` | Follow us | تابعنا | |
| `footer.rights` | All rights reserved. | جميع الحقوق محفوظة. | |
| `notFound.title` | Page not found | Future House | الصفحة غير موجودة | فيوتشر هاوس | |
| `notFound.h1` | Page not found | الصفحة غير موجودة | |
| `notFound.p` | The page you are looking for does not exist or has moved. | الصفحة التي تبحث عنها غير موجودة أو تم نقلها. | |
| `notFound.home` | Go to the homepage | العودة إلى الصفحة الرئيسية | |

## Image alt text and captions (tools/media.mjs)
Names of people and third-party projects are kept in Latin script exactly as printed on the original posters.

| File | English alt text | Arabic alt text | Reviewer notes |
|---|---|---|---|
| `sarai-compound-new-cairo-madinet-masr` | Sarai Compound in New Cairo by Madinet Masr, shown on a Future House campaign poster. | كمبوند سراي في القاهرة الجديدة من مدينة مصر، على ملصق حملة لشركة فيوتشر هاوس. | |
| `el-patio-oro-new-cairo-la-vista` | El Patio Oro in New Cairo by La Vista Developments, shown on a Future House campaign poster. | مشروع إل باتيو أورو في القاهرة الجديدة من لافيستا للتطوير، على ملصق حملة لشركة فيوتشر هاوس. | |
| `creeks-mmg-lagoon-villas` | Creeks by MMG, a lagoon-side residential development, shown on a Future House campaign poster. | مشروع كريكس من مجموعة MMG، مشروع سكني على بحيرة، على ملصق حملة لشركة فيوتشر هاوس. | |
| `waterfront-towers-night-view` | Night view of the Waterfront residential towers, shown on a Future House campaign poster. | منظر ليلي لأبراج مشروع ووتر فرونت السكنية، على ملصق حملة لشركة فيوتشر هاوس. | |
| `alex-west-residential-complex` | Alex West residential complex with its club house and amenities, shown on a Future House campaign poster. | مجمع أليكس ويست السكني ومرافقه ونادي السكان، على ملصق حملة لشركة فيوتشر هاوس. | |
| `masaya-sidi-abdel-rahman-villa` | Masaya villa in Sidi Abdel Rahman, shown on a Future House campaign poster. | فيلا من مشروع مسايا في سيدي عبد الرحمن، على ملصق حملة لشركة فيوتشر هاوس. | |
| `muruj-residential-tower` | Muruj residential tower, shown on a Future House campaign poster. | برج مروج السكني، على ملصق حملة لشركة فيوتشر هاوس. | |
| `seashore-water-side-apartments` | Seashore Water Side waterfront apartments, shown on a Future House campaign poster. | شقق سي شور ووتر سايد المطلة على الواجهة المائية، على ملصق حملة لشركة فيوتشر هاوس. | |
| `rivers-ras-el-hekma-unit-types` | Rivers in Ras El Hekma: sea-view units, lagoon units, stand-alone villas and town houses, on a Future House campaign poster. | مشروع ريفرز في رأس الحكمة: وحدات بإطلالة بحرية ووحدات على البحيرة وفيلات مستقلة وتاون هاوس، على ملصق حملة لشركة فيوتشر هاوس. | |
| `future-house-team-anniversary-collage` | Collage of Future House team photos from the company anniversary, with the words "One Future House family". | مجموعة صور لفريق فيوتشر هاوس من احتفال الذكرى السنوية، مع عبارة «عائلة فيوتشر هاوس». | |
| `brand-campaign-building-better-futures` | Future House brand campaign: "Building better futures", modern white villas in black and white. | حملة فيوتشر هاوس: «نبني مستقبلاً أفضل»، فيلات بيضاء حديثة بالأبيض والأسود. | |
| `brand-campaign-more-than-a-property` | Future House brand campaign: "More than just a property", a glass tower in black and white. | حملة فيوتشر هاوس: «أكثر من مجرد عقار»، برج زجاجي بالأبيض والأسود. | |
| `brand-campaign-built-on-trust` | Future House brand campaign: "Built on trust", a white doorway and staircase in black and white. | حملة فيوتشر هاوس: «مبنية على الثقة»، مدخل أبيض وسلم بالأبيض والأسود. | |
| `brand-campaign-find-your-place` | Future House brand campaign: "Find your place", a modern building facade in black and white. | حملة فيوتشر هاوس: «اعثر على مكانك»، واجهة مبنى حديث بالأبيض والأسود. | |
| `top-performers-q2-2026-announcement` | Congratulations to Future House top performers of the last quarter, Q2 2026, over a chessboard. | تهنئة لأفضل مستشاري فيوتشر هاوس أداءً في الربع الأخير، الربع الثاني من 2026، على رقعة شطرنج. | |
| `top-performer-rank-1-asma-abdo` | Top performer announcement: rank 1, Asma Abdo. | إعلان أفضل أداء: المركز 1، Asma Abdo. | |
| `top-performer-rank-2-ahmed-mahmoud` | Top performer announcement: rank 2, Ahmed Mahmoud. | إعلان أفضل أداء: المركز 2، Ahmed Mahmoud. | |
| `top-performer-rank-3-neven-wahdan` | Top performer announcement: rank 3, Neven Wahdan. | إعلان أفضل أداء: المركز 3، Neven Wahdan. | |
| `top-performer-rank-4-mohamed-essam` | Top performer announcement: rank 4, Mohamed Essam. | إعلان أفضل أداء: المركز 4، Mohamed Essam. | |
| `top-performer-rank-5-zeinab-ali` | Top performer announcement: rank 5, Zeinab Ali. | إعلان أفضل أداء: المركز 5، Zeinab Ali. | |
| `best-employee-august-2025-passant-elkady` | Best Employee of the Month, August 2025: Passant Elkady. | موظف الشهر المتميز، أغسطس 2025: Passant Elkady. | |
| `promotion-hala-hossam-property-advisor` | Promotion announcement: Hala Hossam, new position Property Advisor. | إعلان ترقية: Hala Hossam، المسمى الوظيفي الجديد: مستشار عقاري. | |
| `promotion-yasser-osama-property-advisor` | Promotion announcement: Yasser Osama, new position Property Advisor. | إعلان ترقية: Yasser Osama، المسمى الوظيفي الجديد: مستشار عقاري. | |
| `promotion-zienb-ali-property-advisor` | Promotion announcement: Zienb Ali, new position Property Advisor. | إعلان ترقية: Zienb Ali، المسمى الوظيفي الجديد: مستشار عقاري. | |
| `promotion-abdallah-tarek-property-consultant` | Promotion announcement: Abdallah Tarek, new position Property Consultant. | إعلان ترقية: Abdallah Tarek، المسمى الوظيفي الجديد: استشاري عقاري. | |
| `promotion-habiba-osama-property-consultant` | Promotion announcement: Habiba Osama, new position Property Consultant. | إعلان ترقية: Habiba Osama، المسمى الوظيفي الجديد: استشاري عقاري. | |
| `promotion-malak-abdalkader-property-consultant` | Promotion announcement: Malak Abdalkader, new position Property Consultant. | إعلان ترقية: Malak Abdalkader، المسمى الوظيفي الجديد: استشاري عقاري. | |
| `promotion-passant-elkady-property-consultant` | Promotion announcement: Passant Elkady, new position Property Consultant. | إعلان ترقية: Passant Elkady، المسمى الوظيفي الجديد: استشاري عقاري. | |
| `promotion-mahmoud-abdrabo-property-consultant` | Promotion announcement: Mahmoud Abdrabo, new position Property Consultant. | إعلان ترقية: Mahmoud Abdrabo، المسمى الوظيفي الجديد: استشاري عقاري. | |
| `promotion-yahia-badawy-property-consultant` | Promotion announcement: Yahia Badawy, new position Property Consultant. | إعلان ترقية: Yahia Badawy، المسمى الوظيفي الجديد: استشاري عقاري. | |
| `promotion-adham-el-kady-senior-property-consultant` | Promotion announcement: Adham El Kady, new position Senior Property Consultant. | إعلان ترقية: Adham El Kady، المسمى الوظيفي الجديد: استشاري عقاري أول. | |
| `promotion-amr-adel-senior-property-consultant` | Promotion announcement: Amr Adel, new position Senior Property Consultant. | إعلان ترقية: Amr Adel، المسمى الوظيفي الجديد: استشاري عقاري أول. | |
| `five-keys-property-investment-cover` | Cover slide: "5 keys to property investment success", a hand holding a model house. From a Future House educational post. | شريحة الغلاف: «5 مفاتيح لنجاح الاستثمار العقاري»، يد تحمل نموذج منزل. من منشور تعليمي لشركة فيوتشر هاوس. | |
| `property-investment-key-1-timing` | Property investment tip 1: timing. Slide from a Future House educational post. | نصيحة الاستثمار العقاري 1: التوقيت. شريحة من منشور تعليمي لشركة فيوتشر هاوس. | |
| `property-investment-key-2-location` | Property investment tip 2: location. Slide from a Future House educational post. | نصيحة الاستثمار العقاري 2: الموقع. شريحة من منشور تعليمي لشركة فيوتشر هاوس. | |
| `property-investment-key-3-quality` | Property investment tip 3: quality. Slide from a Future House educational post. | نصيحة الاستثمار العقاري 3: الجودة. شريحة من منشور تعليمي لشركة فيوتشر هاوس. | |
| `property-investment-key-4-price-and-deal` | Property investment tip 4: price and deal. Slide from a Future House educational post. | نصيحة الاستثمار العقاري 4: السعر والصفقة. شريحة من منشور تعليمي لشركة فيوتشر هاوس. | |
| `property-investment-key-5-risk` | Property investment tip 5: risk. Slide from a Future House educational post. | نصيحة الاستثمار العقاري 5: المخاطر. شريحة من منشور تعليمي لشركة فيوتشر هاوس. | |

### Job titles used in Arabic
| English | Arabic |
|---|---|
| Property Advisor | مستشار عقاري |
| Property Consultant | استشاري عقاري |
| Senior Property Consultant | استشاري عقاري أول |
