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
| `nav.faqs` | FAQs | الأسئلة الشائعة | |
| `nav.contact` | Contact | تواصل معنا | |
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
| `meta.index.title` | Future House | Real Estate Marketing & Brokerage in Alexandria | فيوتشر هاوس | تسويق وسمسرة عقارية في الإسكندرية | |
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
| `faq.items[6][1]` | Call or message us on WhatsApp at {phone}, email {email}, or visit our office at {address}. | اتصل بنا أو راسلنا عبر واتساب على {phone}، أو عبر البريد {email}، أو زر مكتبنا في {address}. | |
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
| `footer.waCta` | Chat on WhatsApp | تواصل عبر واتساب | |
| `footer.tagline` | Est. 2019 · Alexandria, Egypt | تأسست عام 2019 · الإسكندرية، مصر | |
| `footer.about` | Real estate marketing and brokerage company established in 2019. We market, buy, sell and rent properties in Alexandria, New Cairo and beyond. | شركة تسويق وسمسرة عقارية تأسست عام 2019. نسوّق العقارات ونشتريها ونبيعها ونؤجّرها في الإسكندرية والقاهرة الجديدة وغيرهما. | |
| `footer.links` | Quick links | روابط سريعة | |
| `footer.follow` | Follow us | تابعنا | |
| `footer.rights` | All rights reserved. | جميع الحقوق محفوظة. | |
| `notFound.title` | Page not found | Future House | الصفحة غير موجودة | فيوتشر هاوس | |
| `notFound.h1` | Page not found | الصفحة غير موجودة | |
| `notFound.p` | The page you are looking for does not exist or has moved. | الصفحة التي تبحث عنها غير موجودة أو تم نقلها. | |
| `notFound.home` | Go to the homepage | العودة إلى الصفحة الرئيسية | |
