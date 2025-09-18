import { ArrowRight, Zap, Target, Trophy, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col">
        <section className="relative flex flex-col py-22 p-2 sm:py-40 items-center text-left md:text-center bg-gradient-to-br from-sky-800 to-teal-950">
          <div className="absolute inset-0 pointer-events-none bg-[url('/graphy-dark.png')] bg-repeat opacity-50"></div>

          <a href="/" className="absolute top-4 left-6 flex items-center space-x-2">
            <span className="sm:text-xl font-bold text-white">STRV.AI</span>
          </a>

          <div className="relative z-10 max-w-3xl mx-4">
            <h1 className="text-5xl font-extrabold sm:text-6xl md:animate-bounce [animation-duration:2s]">
              AI Támogatott Produktivitási és Coaching Platform
            </h1>
            <p className="mt-4 text-lg sm:text-xl opacity-90 md:mx-30">
              Ambiciózus emberek és edzőik számára, akik szervezettek akarnak maradni, fejlődni és maximalizálni a teljesítményüket.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://form.typeform.com/to/s9hOkcg5#s=strv-ai-hu"
                target="_blank"
              >
                <button
                  className="rounded-xl bg-gradient-to-r from-lime-700 via-lime-600 to-lime-600 px-6 py-3 text-white cursor-pointer font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-xl space-x-3 flex"
                >
                  <span>Csatlakozz a Várólistához</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
          <div className="mt-8">
            <p className="opacity-70 text-center">Légy az elsők között, aki értesül az indulásról. Nincs spam, csak teljesítmény.</p>
          </div>
        </section>
        <section className="py-24 px-6 bg-white text-black/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-left md:text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-heading">
                Minden, Amire Szükséged Van Egy Helyen
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kövesd nyomon a táplálkozást, edzéseket és a fejlődést, egyszerűbb kliens kommunikációval - mindezt AI támogatással.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Automatikus hang és videójegyzetelés",
                  description: "Hangüzenetek és videóüzenetek automatikus szöveggé konvertálása a hatékony adminisztrációhoz."
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Edző és Atléta kapcsolat",
                  description: "Értesítések bármilyen terv módosításakor és a zökkenőmentes naptár - whatsapp integráció segíti az edzőket a szervezésben, a sportolókat pedig az edzésmunkában."
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Okosabb követés, egyszerűbben",
                  description: "Kapj értesítéseket a kliens frissítésekről, zökkenőmentes naptár és WhatsApp integrációk segítenek szervezve maradni és klienst pályán tartani."
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI támogatott táplálkozás-tervezés",
                  description: "Kliensek lefotózzák az étkezéseiket, az AI pedig kiszámítja a kalóriát, elősegítve a táplálkozás egyszerű és következetes követését."
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-left p-6 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-800 to-teal-950 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-heading">
                    {feature.title}
                  </h3>
                  <p className="font-light text-gray-900/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 px-6 bg-white text-black/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-left md:text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-heading">
                Készen állsz a következő szintre lépni?
              </h2>
              <p className="text-xl mb-8">
                Csatlakozz azokhoz a sportolókhoz és edzőkhöz, akik már AI-vezérelt edzéssel alakítják át teljesítményüket.
              </p>
              <a
                href="https://form.typeform.com/to/s9hOkcg5#s=strv-ai-hu-bottom"
                target="_blank"
                className="flex items-center justify-center"
              >
                <button
                  className="rounded-xl bg-teal-900 px-6 py-3 text-white cursor-pointer font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-xl flex space-x-2"
                >
                  <span>Szerezz Korai Hozzáférést</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="my-5 flex items-center justify-center">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} FOLLOWTHEPATTERN KFT, Built for champions.</p>
      </footer>
    </div>
  );
}
