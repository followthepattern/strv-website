export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
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
    coachingBody: 'Coaches can manage sessions through calendar integration, communicate effortlessly with clients via WhatsApp or Telegram, and access shared profiles and performance data to guide training more effectively.',

    // Bottom CTA Section
    ctaTitle: 'Strive for Absolute Peak',
    ctaDescription: 'Coaches and athletes are already on board. Join them and get early access, whether you\'re a coach, athlete, or fitness lover.',

    // Footer
    footerCopyright: 'FOLLOWTHEPATTERN KFT, Built for champions.',
  },
  hu: {
    // Header
    siteTitle: 'STRV.AI',

    // Hero Section
    heroTitle: 'AI Támogatott Fitness és Coaching Platform',
    heroDescription: 'Ambiciózus emberek és edzőik számára, akik szervezettek akarnak maradni, erőt építeni, izomtömeget növelni és maximalizálni a teljesítményüket.',
    subscribeButton: 'Feliratkozás Korai Hozzáférésért',
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
    trackingTitle: 'Követés és Teljesítmény',
    trackingBody: 'Tervezd meg a táplálkozásod és kiegészítőidet, naplózd az étkezéseket fotókkal, kövesd nyomon az alvásodat és edzéseidet, és figyeld meg a fejlődésedet áttekinthető vizuális grafikonokon keresztül.',

    aiAssistanceTitle: 'AI Asszisztencia',
    aiAssistanceBody: 'Az AI egyszerűvé teszi a követést és coachingot: azonnal becsüld meg a kalóriákat az étkezések fotóiból, alakítsd át a hangüzeneteket rendezett naplókká, és kapj segítséget az edzéstervezésben. Az okos értesítések segítenek az edzőknek tájékozottnak maradni és a klienseknek elkötelezettnek.',

    coachingTitle: 'Coaching és Kommunikáció',
    coachingBody: 'Az edzők kezelhetik az edzéseket naptárintegrációval, könnyedén kommunikálhatnak a kliensekkel WhatsApp-on vagy Telegramon keresztül, és hozzáférhetnek a megosztott profilokhoz és teljesítményadatokhoz a hatékonyabb edzésvezetés érdekében.',

    // Bottom CTA Section
    ctaTitle: 'Törekedj az Abszolút Csúcsra',
    ctaDescription: 'Edzők és sportolók már fedélzeten vannak. Csatlakozz hozzájuk és szerezz korai hozzáférést, akár edző, sportoló vagy fitness rajongó vagy.',

    // Footer
    footerCopyright: 'FOLLOWTHEPATTERN KFT, Bajnokoknak építve.',
  }
} as const;
