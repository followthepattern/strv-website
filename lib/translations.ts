export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Technical
    root: '/en',

    // Header
    siteTitle: 'STRV.AI',

    // Hero Section
    heroTitle: 'AI-Powered Fitness & Coaching Platform',
    heroDescription: 'For ambitious people and their coaches who want to stay organized, build strength, gain muscle, and maximize performance.',
    subscribeButton: 'Subscribe for Early Access',
    earlyAccessNote: 'Be the first to know when we launch. No spam, just performance.',

    // Form Fields
    namePlaceholder: 'Jon Jones',
    emailPlaceholder: 'you@example.com',
    consentText: 'I agree to receive emails and accept the',
    privacyPolicy: 'Privacy Policy',
    consentError: 'Please accept the privacy notice.',
    subscriptionError: 'Subscription failed',
    subscriptionSuccess: 'Thanks! Check your inbox to confirm.',

    // Features Section
    featuresTitle: 'STRV AI brings nutrition, fitness, and coaching together in one smart platform',
    featuresSubtitle: 'One platform. Smooth and simple. Unlimited potential.',

    // Feature Cards
    trackingTitle: 'Tracking & Performance',
    trackingBody: 'Plan your nutrition and supplements, log meals with photos, track your sleep and workouts, and follow your improvement through clear visual progress graphs.',

    aiAssistanceTitle: 'AI Assistance',
    aiAssistanceBody: 'AI makes tracking and coaching effortless: instantly estimate calories from meal photos, turn voice notes into organized logs, and receive session planning assistance. Smart notifications keep coaches informed and clients engaged.',

    coachingTitle: 'Coaching & Communication',
    coachingBody: 'Calendar integration and the sharing of plans, data, and profiles make communication between coaches and athletes easier. WhatsApp and Telegram integrations enable fast and seamless delivery of notifications.',

    // Bottom CTA Section
    ctaTitle: 'Strive for Absolute Peak',
    ctaDescription: 'Coaches and athletes are already on board. Join them and get early access, whether you\'re a coach, athlete, or fitness lover.',

    // Contact Section
    contactTitle: 'Get in Touch',
    contactDescription: 'Have questions or want to learn more? We\'re here to help you achieve peak performance.',
    contactEmailTitle: 'Email Us',
    contactSupportTitle: 'Support',
    contactSupportDescription: 'Our team is ready to assist you with any questions.',

    // Progress Graph
    progressGraphTitle: 'Progress Tracking',
    progressGraphSubtitle: '7-week performance overview',
    progressGraphSquat: 'Squat 1RM',
    progressGraphBodyWeight: 'Body Weight',
    progressGraphKg: 'kg',
    progressGraphSquatLegend: 'Squat 1RM (kg)',
    progressGraphBodyWeightLegend: 'Body Weight (kg)',
    progressGraphStrength: 'Strength',
    progressGraphWeight: 'Weight',

    // Voice to Text
    voiceToTextTitle: 'Voice Note Processing',
    voiceToTextSubtitle: 'AI-powered transcription & insights',
    voiceToTextProcessing: 'Processing...',
    voiceToTextUser: 'Sarah M. • Just now',
    voiceToTextActionItems: 'Action Items Detected',
    voiceToTextItems: 'items',
    voiceToTextAction1: 'Increase squat weight to 225 lbs',
    voiceToTextAction2: 'Target 2,800 calories daily',
    voiceToTextAction3: 'Schedule check-in for Friday 3 PM',
    voiceToTextCategoryTraining: 'training',
    voiceToTextCategoryNutrition: 'nutrition',
    voiceToTextCategorySchedule: 'schedule',

    // Calendar Day View
    calendarToday: 'Today',
    calendarEvent1: 'Morning Cardio',
    calendarEvent2: 'Nutrition Planning',
    calendarEvent3: 'Client Check-in: Sarah M.',
    calendarEvent4: 'Strength Training',
    calendarEvent5: 'Client Session: John D.',
    calendarEvent6: 'Meal Prep',
    calendarLegendTraining: 'Training',
    calendarLegendCoaching: 'Coaching',
    calendarLegendActivity: 'Activity',

    // Subscribed Page
    subscribedTitle: 'Thank You for Subscribing!',
    subscribedMessage: 'We\'re excited to have you on board. Check your inbox to confirm your subscription and be among the first to know when we launch.',
    subscribedCheckEmail: 'Check Your Email',
    subscribedCheckEmailDesc: 'We\'ve sent a confirmation email to your inbox. Please click the link to verify your subscription.',
    subscribedWhatsNext: 'What\'s Next?',
    subscribedWhatsNextDesc: 'You\'ll receive exclusive updates about our launch, early access opportunities, and tips to maximize your performance.',
    subscribedBackHome: 'Back to Home',

    // Footer
    footerCopyright: 'FOLLOWTHEPATTERN KFT, Built for champions.',
  },
  hu: {
    // Technical
    root: '/hu',

    // Header
    siteTitle: 'STRV.AI',

    // Hero Section
    heroTitle: 'AI Támogatott Fitness és Coaching Platform',
    heroDescription: 'Ambiciózus emberek és edzőik számára, akik szervezettek akarnak maradni, erőt építeni, izomtömeget növelni és maximalizálni a teljesítményüket.',
    subscribeButton: 'Biztosítom a helyem',
    earlyAccessNote: 'Légy az elsők között, aki értesül az indulásról. Nem spam, csak teljesítmény.',

    // Form Fields
    namePlaceholder: 'Kovács János',
    emailPlaceholder: 'te@pelda.com',
    consentText: 'Elfogadom, hogy emaileket kapjak és elfogadom az',
    privacyPolicy: 'Adatvédelmi Irányelveket',
    consentError: 'Kérjük, fogadd el az adatvédelmi nyilatkozatot.',
    subscriptionError: 'A feliratkozás sikertelen',
    subscriptionSuccess: 'Köszönjük! Ellenőrizd a beérkező leveleidet a megerősítéshez.',

    // Features Section
    featuresTitle: 'Táplálkozás, fitnesz és coaching egy intelligens platformon.',
    featuresSubtitle: 'Minden az egyben. Letisztult élmény. Korlátlan lehetőségek.',

    // Feature Cards
    trackingTitle: 'Fejlődés követés',
    trackingBody: 'Tervezd meg a táplálkozásod, naplózd az étkezéseket, kövesd nyomon az alvásodat, edzéseidet és fejlődésedet áttekinthető vizuális grafikonokon keresztül.',

    aiAssistanceTitle: 'AI Támogatás',
    aiAssistanceBody: 'Az AI egyszerűvé teszi a napi adminisztrációt: megbecsüli a kalóriákat az étkezések fotóiból, a hangüzeneteket rendezett naplókká alakítja, és segítséget nyújt az edzéstervezésben. Az okos értesítések támogatják az edzőket abban, hogy naprakészek maradjanak, a klienseket pedig abban, hogy elkötelezettek legyenek.',

    coachingTitle: 'Coaching & Kommunikáció',
    coachingBody: 'A naptárintegráció, a tervek, adatok és profilok megosztása egyszerűbbé teszi az edzők és atléták közötti kommunikációt. A WhatsApp- és Telegram-integráció pedig lehetővé teszi az értesítések gyors és zökkenőmentes küldését.',

    // Bottom CTA Section
    ctaTitle: 'Törekedj az Abszolút Csúcsra',
    ctaDescription: 'Edzők és sportolók már csatlakoztak. Légy te is közöttük, és szerezz korai hozzáférést, akár ha edző, sportoló vagy fitneszrajongó vagy.',

    // Contact Section
    contactTitle: 'Lépj Kapcsolatba',
    contactDescription: 'Kérdésed van, vagy többet szeretnél megtudni? Segítünk!',
    contactEmailTitle: 'Email',
    contactSupportTitle: 'Támogatás',
    contactSupportDescription: 'Csapatunk készen áll, hogy segítsen bármilyen kérdésben.',

    // Progress Graph
    progressGraphTitle: 'Fejlődés Követés',
    progressGraphSubtitle: '7 hetes teljesítmény áttekintés',
    progressGraphSquat: 'Guggolás 1RM',
    progressGraphBodyWeight: 'Testsúly',
    progressGraphKg: 'kg',
    progressGraphSquatLegend: 'Guggolás 1RM (kg)',
    progressGraphBodyWeightLegend: 'Testsúly (kg)',
    progressGraphStrength: 'Erő',
    progressGraphWeight: 'Testsúly',

    // Voice to Text
    voiceToTextTitle: 'Hangüzenet Feldolgozás',
    voiceToTextSubtitle: 'AI alapú átírás és elemzés',
    voiceToTextProcessing: 'Feldolgozás...',
    voiceToTextUser: 'Minta Sára • Most',
    voiceToTextActionItems: 'Feladatok',
    voiceToTextItems: 'elem',
    voiceToTextAction1: 'Guggolás súly növelése 102 kg-ra',
    voiceToTextAction2: 'Napi 2800 kalória cél',
    voiceToTextAction3: 'Pénteki 15 órás check-in időpont',
    voiceToTextCategoryTraining: 'edzés',
    voiceToTextCategoryNutrition: 'táplálkozás',
    voiceToTextCategorySchedule: 'beosztás',

    // Calendar Day View
    calendarToday: 'Ma',
    calendarEvent1: 'Reggeli Kardió',
    calendarEvent2: 'Táplálkozás Tervezés',
    calendarEvent3: 'Kliens Check-in: Minta Sára',
    calendarEvent4: 'Erősítő Edzés',
    calendarEvent5: 'Kliens Edzés: Kovács János',
    calendarEvent6: 'Étkezés Előkészítés',
    calendarLegendTraining: 'Edzés',
    calendarLegendCoaching: 'Coaching',
    calendarLegendActivity: 'Aktivitás',

    // Subscribed Page
    subscribedTitle: 'Köszönjük a Feliratkozást!',
    subscribedMessage: 'Örülünk, hogy csatlakoztál hozzánk. Ellenőrizd a postaládád, hogy megerősítsd a feliratkozásod és légy az elsők között, akik értesülnek az indulásról.',
    subscribedCheckEmail: 'Ellenőrizd az Emailedet',
    subscribedCheckEmailDesc: 'Küldtünk egy megerősítő emailt a postaládádba. Kattints a linkre a feliratkozásod jóváhagyásához.',
    subscribedWhatsNext: 'Mi a Következő Lépés?',
    subscribedWhatsNextDesc: 'Exkluzív frissítéseket fogsz kapni az indulásról, korai hozzáférési lehetőségekről és tippeket a teljesítményed maximalizálásához.',
    subscribedBackHome: 'Vissza a Főoldalra',

    // Footer
    footerCopyright: 'FOLLOWTHEPATTERN KFT, Bajnokoknak feljesztve.',
  }
} as const;
