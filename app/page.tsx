import { ArrowRight, Zap, Target, Trophy, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col">
        <section className="relative flex flex-col py-22 p-2 sm:py-40 items-center text-center bg-gradient-to-br from-sky-800 to-teal-950">
          <div className="absolute inset-0 pointer-events-none bg-[url('/graphy-dark.png')] bg-repeat opacity-50"></div>

          <a href="/" className="absolute top-4 left-6 flex items-center space-x-2">
            <span className="sm:text-xl font-bold text-white">STRV.AI</span>
          </a>

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-extrabold sm:text-6xl animate-bounce [animation-duration:2s]">
              Strive for Absolute Peak
            </h1>
            <p className="mt-4 text-lg sm:text-xl opacity-90 md:mx-30">
              AI-powered productivity and coaching platform designed for athletes and coaches who demand excellence in every aspect of their training and life.
            </p>
            <div className="mt-8">
              <a
                href="#"
              >
                <button
                  className="rounded-xl bg-lime-600 px-6 py-3 text-white cursor-pointer font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-xl"
                >
                  Get Early Access
                </button>
              </a>
            </div>
          </div>
          <div className="mt-8">
            <p className="opacity-70">Be the first to know when we launch. No spam, just performance.</p>
          </div>
        </section>
        <section className="py-24 px-6 bg-white text-black/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-heading">
                Champions Start Here
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Combining cutting-edge AI with proven coaching methodologies
                to unlock your maximum potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Smarter Tracking, Simplified",
                  description: "Log your daily calories, workouts, sleep, and notes in one place — with clear reports that keep athletes and coaches aligned."
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "AI-Powered Nutrition & Insights",
                  description: "Snap a photo of your meal and let AI estimate calories instantly. Get personalized insights that adapt to your training goals."
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Connected Coaching",
                  description: "Notifications on on any updates, seamless calendar and whatsapp integrations help coaches organize and athletes stay on track."
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Voice & Check-in Intelligence",
                  description: "Turn voice messages into text, generate meeting notes from check-in calls, and keep everything documented without extra effort."
                }
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-heading">
                Ready to Elevate Your Game?
              </h2>
              <p className="text-xl mb-8">
                Join athletes and coaches who are already transforming
                their performance with AI-powered training.
              </p>
              <a
                href="#"
                className="flex items-center justify-center"
              >
                <button
                  className="rounded-xl bg-lime-600 px-6 py-3 text-white cursor-pointer font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-xl flex space-x-2"
                >
                  <span>Get Notified When We Launch</span>
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
