export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Technical
    root: '/en',

    // Header
    siteTitle: 'STRV.AI',

    // Hero Section
    heroTitle: 'AI-powered health & performance platform for modern coaching',
    heroDescription: 'Coaching, tracking, and advanced health analysis in one system.',
    signUpFreeButton: 'Sign Up for Free',
    signUpFreeNote: 'STRV.AI is live — start using it for free today.',

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
    phase1Feature7: 'Recipe generation',
    phase1Feature8: 'Recipe sharing',
    phase1Feature9: 'QR code food tracking',
    phase1Feature10: 'Voice chat',
    phase1AiTitle: 'AI-powered admin:',
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
    phase3Feature5: 'Document upload and analysis',
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
    phase4Special3: 'Weight cut management',
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
    phase5Feature4: 'UFC Partnership (dream goal)',
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

    // Integrations Section
    integrationsTitle: 'Connects with your tools',
    integrationsSubtitle: 'Works with the devices and apps you already use — no friction, no switching.',
    integrationsWearables: 'Wearables',
    integrationsMessaging: 'Messaging',
    integrationsHealth: 'Health & Fitness',
    integrationsMore: 'More integrations coming soon.',

    // Tracking Dashboard
    dashboardTitle: "Today's Overview",
    dashboardSubtitle: 'Personal dashboard',
    dashboardLive: 'Live',
    dashboardKcal: 'kcal',
    dashboardSleep: 'Sleep',
    dashboardWeight: 'Body weight',
    dashboardStreak: 'Day streak',
    dashboardWeekTitle: 'This week',
    dashboardMon: 'Mon',
    dashboardTue: 'Tue',
    dashboardWed: 'Wed',
    dashboardThu: 'Thu',
    dashboardFri: 'Fri',
    dashboardRecentTitle: 'Recent activity',
    dashboardActivity1: 'Bench Press',
    dashboardActivity1Value: '100 kg · 5×5',
    dashboardActivity2: 'Lunch logged',
    dashboardActivity2Value: '720 kcal',
    dashboardActivity3: 'Sleep logged',
    dashboardActivity3Value: '7.5 h · 92%',

    // Chat Interface
    chatAssistantName: 'My Assistant',
    chatOnline: 'online',
    chatAiMessage1: 'Logged! 5 sets × 5 reps — Squats 100 kg. Estimated 1RM: 133 kg (+3 kg this week). Keep it up 💪',
    chatUserMessage2: "Summarize Alex's progress from last month",
    chatAiMessage2: 'Alex hit 9/12 sessions (+2 vs previous month). Squat up 7.5 kg, bodyweight stable. 3 missed sessions flagged — he cited fatigue.',
    chatInputPlaceholder: 'Message STRV.AI...',

    // Footer
    footerCopyright: 'FOLLOWTHEPATTERN KFT, Built for champions.',
  },
  hu: {
    // Technical
    root: '/hu',

    // Header
    siteTitle: 'STRV.AI',

    // Hero Section
    heroTitle: 'AI-alapú egészség- és teljesítményplatform a modern edzéshez',
    heroDescription: 'Coaching, követés és fejlett egészségügyi elemzés egy rendszerben.',
    signUpFreeButton: 'Regisztrálj ingyenesen',
    signUpFreeNote: 'A STRV.AI már elérhető — kezdd el használni ingyen még ma.',

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

    // Navigation
    navFeatures: 'Legjobb funkciók',
    navHome: 'Főoldal',

    // Features / Roadmap Page
    roadmapTitle: 'A STRV.AI fejlesztési lépései',
    roadmapSubtitle: 'Az MVP-től a globális teljesítmény-platformig',

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
    phase1Feature7: 'Receptgenerálás',
    phase1Feature8: 'Receptek megosztása',
    phase1Feature9: 'QR kódos ételkövetés',
    phase1Feature10: 'Hangalapú adatbevitel',
    phase1AiTitle: 'AI-alapú adminisztráció:',
    phase1Ai1: 'Kalória becslés fotó alapján',
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
    phase3Feature5: 'Dokumentum feltöltés és elemzés',
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
    phase5Feature4: 'Hivatalos UFC partner (álomcél)',
    phase5Feature5: 'Minden UFC harcos STRV.AI-t használ',
    phase5Feature6: 'Peak performance időzítés támogatása globálisan',
    phase5Status: 'A STRV.AI végső víziója.',

    // Status labels
    statusTesting: 'Tesztelés alatt',
    statusDevelopment: 'Fejlesztés alatt',
    statusPlanned: 'Hamarosan',
    statusVision: 'Vízió',
    goalLabel: 'Cél',
    featuresPageBackHome: 'Vissza a Főoldalra',

    // Integrations Section
    integrationsTitle: 'Csatlakozik az eszközeidhez',
    integrationsSubtitle: 'Azokkal az eszközökkel és appokkal működik, amelyeket már használsz.',
    integrationsWearables: 'Viselhető eszközök',
    integrationsMessaging: 'Üzenetküldés',
    integrationsHealth: 'Egészség és fitnesz',
    integrationsMore: 'Hamarosan még több integráció érkezik.',

    // Tracking Dashboard
    dashboardTitle: 'Mai áttekintés',
    dashboardSubtitle: 'Személyes irányítópult',
    dashboardLive: 'Élő',
    dashboardKcal: 'kcal',
    dashboardSleep: 'Alvás',
    dashboardWeight: 'Testsúly',
    dashboardStreak: 'Napos sorozat',
    dashboardWeekTitle: 'Ezen a héten',
    dashboardMon: 'H',
    dashboardTue: 'K',
    dashboardWed: 'Sz',
    dashboardThu: 'Cs',
    dashboardFri: 'P',
    dashboardRecentTitle: 'Legutóbbi aktivitás',
    dashboardActivity1: 'Fekvenyomás',
    dashboardActivity1Value: '100 kg · 5×5',
    dashboardActivity2: 'Ebéd naplózva',
    dashboardActivity2Value: '720 kcal',
    dashboardActivity3: 'Alvás naplózva',
    dashboardActivity3Value: '7,5 h · 92%',

    // Chat Interface
    chatAssistantName: 'Asszisztensem',
    chatOnline: 'online',
    chatAiMessage1: 'Naplózva! 5 sorozat × 5 ismétlés — Guggolás 100 kg. Becsült 1RM: 133 kg (+3 kg ezen a héten). Csak így tovább! 💪',
    chatUserMessage2: 'Összegezd Alex múlt havi fejlődését',
    chatAiMessage2: 'Alex 9/12 edzést teljesített (+2 az előző hónaphoz képest). Guggolása 7,5 kg-mal nőtt, testsúlya stabil. 3 hiányzott edzést jeleztem — fáradtságra hivatkozott.',
    chatInputPlaceholder: 'Írj a STRV.AI-nak...',

    // Footer
    footerCopyright: 'FOLLOWTHEPATTERN KFT, Bajnokoknak feljesztve.',
  }
} as const;
