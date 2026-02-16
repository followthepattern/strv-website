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

    // Navigation
    navFeatures: 'Roadmap',
    navHome: 'Home',

    // Features / Roadmap Page
    roadmapTitle: 'STRV.AI Development Roadmap',
    roadmapSubtitle: 'From MVP to global performance platform — here is our journey.',

    // Phase 1
    phase1Number: 'Phase 1',
    phase1Title: 'Core Tracking + AI Support',
    phase1Timeline: 'Short-term',
    phase1Goal: 'Working, testable core system',
    phase1Feature1: 'Workout tracking',
    phase1Feature2: 'Nutrition tracking',
    phase1Feature3: 'Body weight tracking',
    phase1Feature4: 'Sleep monitoring',
    phase1Feature5: 'Notes & journaling',
    phase1Feature6: 'Calendar integration',
    phase1AiTitle: 'AI-powered administration:',
    phase1Ai1: 'Calorie estimation from photos',
    phase1Ai2: 'Chat-based data entry',
    phase1Ai3: 'Workout record generation from images',
    phase1Ai4: 'Structured record creation from conversation',
    phase1Status: 'This phase is currently in testing.',

    // Phase 2
    phase2Number: 'Phase 2',
    phase2Title: 'Coaching System',
    phase2Timeline: 'Short / Mid-term',
    phase2Goal: 'Full coaching workflow support',
    phase2Feature1: 'Training plan creation',
    phase2Feature2: 'Meal plan creation',
    phase2Feature3: 'Athlete monitoring',
    phase2Feature4: 'Feedback & comments',
    phase2Feature5: 'Payment integration',
    phase2Feature6: 'Calendar integration',
    phase2Feature7: 'Chat integration (Telegram, WhatsApp, etc.)',
    phase2Feature8: 'Automated notifications',
    phase2Status: 'This phase is under development.',

    // Phase 3
    phase3Number: 'Phase 3',
    phase3Title: 'Expert Ecosystem',
    phase3Timeline: 'Mid-term',
    phase3Goal: 'Platform expansion beyond coach–athlete model',
    phase3Feature1: 'Medical professionals',
    phase3Feature2: 'Lab result analysis',
    phase3Feature3: 'MRI consultation',
    phase3Feature4: 'On-demand expert advice',
    phase3Feature5: 'Document upload',
    phase3Feature6: 'Consultation sharing with coaches',
    phase3Status: 'STRV as a performance-supporting health platform.',

    // Phase 4
    phase4Number: 'Phase 4',
    phase4Title: 'Sport Expansion',
    phase4Timeline: 'Mid-term to Long-term',
    phase4Goal: 'Support for multiple sports and disciplines',
    phase4InitialFocus: 'Initial focus:',
    phase4Sport1: 'Bodybuilding',
    phase4Sport2: 'Powerlifting',
    phase4Expansion: 'Expansion:',
    phase4Sport3: 'Running',
    phase4Sport4: 'Swimming',
    phase4Sport5: 'CrossFit',
    phase4Sport6: 'HYROX',
    phase4Sport7: 'Strongman',
    phase4SpecialGoal: 'Specialized goals:',
    phase4Special1: 'Combat sports (MMA)',
    phase4Special2: 'Base building periods',
    phase4Special3: 'Weight management',
    phase4Special4: 'Peak timing',
    phase4Special5: 'Preparation cycle optimization',
    phase4Status: 'Not just individual sports — potentially team sports too.',

    // Phase 5
    phase5Number: 'Phase 5',
    phase5Title: 'Long-term Vision',
    phase5Timeline: 'Long-term',
    phase5Goal: 'Global performance optimization ecosystem',
    phase5Feature1: 'STRV.AI as sports event sponsor',
    phase5Feature2: 'Streaming platform',
    phase5Feature3: 'Performance optimization system',
    phase5Feature4: 'UFC partnership dream goal',
    phase5Feature5: 'Every UFC fighter using STRV.AI',
    phase5Feature6: 'Peak performance timing support globally',
    phase5Status: 'The ultimate vision for STRV.AI.',

    // Status labels
    statusTesting: 'In Testing',
    statusDevelopment: 'In Development',
    statusPlanned: 'Planned',
    statusVision: 'Vision',
    goalLabel: 'Goal',
    featuresPageBackHome: 'Back to Home',

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

    // Navigation
    navFeatures: 'Fejlesztési terv',
    navHome: 'Főoldal',

    // Features / Roadmap Page
    roadmapTitle: 'A STRV.AI fejlesztési lépései',
    roadmapSubtitle: 'Az MVP-től a globális teljesítmény-platformig — itt az utunk.',

    // Phase 1
    phase1Number: '1. fázis',
    phase1Title: 'Alap tracking + AI támogatás',
    phase1Timeline: 'Rövid táv',
    phase1Goal: 'Működő, tesztelhető alap rendszer',
    phase1Feature1: 'Edzéskövetés',
    phase1Feature2: 'Étrendkövetés',
    phase1Feature3: 'Testsúlykövetés',
    phase1Feature4: 'Alvásfigyelés',
    phase1Feature5: 'Jegyzetelés',
    phase1Feature6: 'Naptárintegráció',
    phase1AiTitle: 'AI-alapú adminisztráció:',
    phase1Ai1: 'Kalória becslés fotóból',
    phase1Ai2: 'Chat alapú adatbevitel',
    phase1Ai3: 'Edzésrekord generálás képből',
    phase1Ai4: 'Strukturált rekord létrehozás beszélgetésből',
    phase1Status: 'Ez a fázis jelenleg tesztelés alatt áll.',

    // Phase 2
    phase2Number: '2. fázis',
    phase2Title: 'Edzői rendszer',
    phase2Timeline: 'Rövid / Középtáv',
    phase2Goal: 'Coaching workflow teljes támogatása',
    phase2Feature1: 'Edzéstervek írása',
    phase2Feature2: 'Étrendírás',
    phase2Feature3: 'Sportolók monitorozása',
    phase2Feature4: 'Visszajelzések, kommentek',
    phase2Feature5: 'Fizetés integráció',
    phase2Feature6: 'Naptár integráció',
    phase2Feature7: 'Chat integráció (Telegram, WhatsApp stb.)',
    phase2Feature8: 'Automatizált értesítések',
    phase2Status: 'Ez a fázis fejlesztés alatt áll.',

    // Phase 3
    phase3Number: '3. fázis',
    phase3Title: 'Szakértői ökoszisztéma',
    phase3Timeline: 'Középtáv',
    phase3Goal: 'Platform kibővítése edző–sportoló modellen túl',
    phase3Feature1: 'Orvosok',
    phase3Feature2: 'Laboreredmény elemzés',
    phase3Feature3: 'MRI konzultáció',
    phase3Feature4: 'On-demand szakértői tanácsadás',
    phase3Feature5: 'Dokumentum feltöltés',
    phase3Feature6: 'Konzultáció megosztása edzővel',
    phase3Status: 'STRV mint teljesítmény-támogató egészség platform.',

    // Phase 4
    phase4Number: '4. fázis',
    phase4Title: 'Sportág-bővítés',
    phase4Timeline: 'Középtáv → Hosszútáv',
    phase4Goal: 'Több sportág és diszciplína támogatása',
    phase4InitialFocus: 'Első fókusz:',
    phase4Sport1: 'Testépítés',
    phase4Sport2: 'Erőemelés',
    phase4Expansion: 'Kiterjesztés:',
    phase4Sport3: 'Futás',
    phase4Sport4: 'Úszás',
    phase4Sport5: 'CrossFit',
    phase4Sport6: 'HYROX',
    phase4Sport7: 'Strongman',
    phase4SpecialGoal: 'Speciális cél:',
    phase4Special1: 'Küzdősportok (MMA)',
    phase4Special2: 'Alapozó időszak',
    phase4Special3: 'Súlymenedzsment',
    phase4Special4: 'Peak timing',
    phase4Special5: 'Felkészülési ciklus optimalizálás',
    phase4Status: 'Nem csak egyéni sportok, hanem potenciálisan csapatsportok is.',

    // Phase 5
    phase5Number: '5. fázis',
    phase5Title: 'Hosszútávú vízió',
    phase5Timeline: 'Hosszútáv',
    phase5Goal: 'Globális teljesítmény-optimalizáló ökoszisztéma',
    phase5Feature1: 'STRV.AI mint sportesemény szponzor',
    phase5Feature2: 'Streaming platform',
    phase5Feature3: 'Teljesítmény optimalizáló rendszer',
    phase5Feature4: 'UFC partneri álomcél',
    phase5Feature5: 'Minden UFC harcos STRV.AI-t használ',
    phase5Feature6: 'Peak performance időzítés támogatása globálisan',
    phase5Status: 'A STRV.AI végső víziója.',

    // Status labels
    statusTesting: 'Tesztelés alatt',
    statusDevelopment: 'Fejlesztés alatt',
    statusPlanned: 'Tervezett',
    statusVision: 'Vízió',
    goalLabel: 'Cél',
    featuresPageBackHome: 'Vissza a Főoldalra',

    // Footer
    footerCopyright: 'FOLLOWTHEPATTERN KFT, Bajnokoknak feljesztve.',
  }
} as const;
