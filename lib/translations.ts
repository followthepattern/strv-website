export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Technical
    root: '/en',

    // Header
    siteTitle: 'STRV.AI',

    // Hero Section
    heroTitle: 'AI-powered health & performance platform for modern coaching',
    heroDescription: 'For coaches, athletes, and anyone who wants to improve their health and performance.',
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
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
  }
} as const;
