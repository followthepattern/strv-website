'use client'

import { ArrowRight, Zap, Target, Trophy, Brain } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) { setMsg("Please accept the privacy notice."); return; }
    setStatus("loading"); setMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Subscription failed");
      setStatus("ok");

      setMsg("Thanks! Check your inbox to confirm.");
      setEmail("");
      setConsent(false);
    } catch (err: any) {
      setStatus("error");
      setMsg(err.message || "Something went wrong");
    }
  }

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
              AI-Powered Fitness & Coaching Platform
            </h1>
            <p className="mt-4 text-lg sm:text-xl opacity-90 md:mx-30">
              For ambitious people and their coaches who want to stay organized, build strength, gain muscle, and maximize performance.
            </p>
            <div className="mt-8 flex justify-center">
              <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded px-3 py-2"
                />
                {/* GDPR consent */}
                <label className="text-sm flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I agree to receive emails and accept the{" "}
                    <a href="/privacy" className="underline">Privacy Policy</a>.
                  </span>
                </label>
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-xl bg-gradient-to-r from-lime-700 via-lime-600 to-lime-600 px-6 py-3 text-white cursor-pointer font-bold space-x-3 flex text-lg"
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                  <div>Subscribe</div>
                  <div></div>
                </button>
                {msg && (
                  <p className={status === "error" ? "text-red-600" : "text-green-700"}>{msg}</p>
                )}
              </form>
            </div>
          </div>
          <div className="mt-8">
            <p className="opacity-70 text-center">Be the first to know when we launch. No spam, just performance.</p>
          </div>
        </section>
        <section className="py-24 px-6 bg-white text-black/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-left md:text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-heading">
                Everything You Need in One Place
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track nutrition, workouts, and progress while simplifying client communication - all powered by AI.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Voice & Check-in Intelligence",
                  description: "Turn voice messages into text, generate meeting notes from check-in calls, and keep everything documented without extra effort."
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Connected Coaching",
                  description: "Get notified on client updates, seamless calendar and WhatsApp integrations help you stay organized and keep clients on track."
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Smarter Tracking, Simplified",
                  description: "Your clients log calories, workouts, sleep, and notes in one place — clear reports keep you both aligned on progress."
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI-Powered Nutrition & Insights",
                  description: "Clients snap photos of meals for instant calorie estimates. Get personalized insights that adapt to each client's training goals."
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
          <div className="max-w-4xl mx-auto">
            <div className="text-left md:text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-heading">
                Ready to Transform Your Performance?
              </h2>
              <p className="text-xl mb-8">
                Whether you're a coach managing clients or an athlete tracking your own progress - get first access to the platform that handles the details so you can focus on results
              </p>
              <a
                href="https://form.typeform.com/to/Wtw0PPz1#s=strv-ai-en-bottom"
                target="_blank"
                className="flex items-center justify-center"
              >
                <button
                  className="rounded-xl bg-teal-900 px-6 py-3 text-white cursor-pointer font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-xl flex space-x-2"
                >
                  <span>Get Early Access</span>
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
