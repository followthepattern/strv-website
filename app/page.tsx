'use client'

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SpinnerIcon from "./icons/SpinnerIcon";
import classNames from "classnames";
import { Card, Title, Body, FeatureFrame } from "./components/feature";
import CalendarDayView from "./components/CalendarDayView";
import VoiceToText from "./components/VoiceToText";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setMsg("Please accept the privacy notice."); return;
    }
    setStatus("loading"); setMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Subscription failed");
      setStatus("ok");

      setMsg("Thanks! Check your inbox to confirm.");
      setEmail("");
      setName("");
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
          <div className="absolute inset-0 pointer-events-none bg-[url('/hexagons.png')] bg-repeat opacity-4"></div>

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
            <div className="mt-8 flex sm:justify-center">
              <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-md">
                <input
                  type="name"
                  required
                  placeholder="Jon Jones"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg text-lg px-3 py-2"
                />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg text-lg px-3 py-2"
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
                  className="rounded-xl bg-gradient-to-r bg-lime-700 hover:bg-lime-600 active:bg-lime-900 shadom-md px-6 py-3 text-white cursor-pointer font-bold space-x-3 flex text-lg justify-between"
                >
                  <div className="w-5"></div>
                  <div className="text-center grow">Subscribe for Early Access</div>
                  <div className="w-5 flex items-center justify-end">
                    {status === 'loading' && (<SpinnerIcon className="h-6 w-6" />)}
                  </div>
                </button>
                {msg && (
                  <p className={classNames(
                    "bg-white p-1 rounded-md text-center", {
                    "text-red-600": status === "error",
                    "text-green-700": status !== "error"
                  }
                  )}>{msg}</p>
                )}
              </form>
            </div>
          </div>
          <div className="mt-4">
            <p className="opacity-70 text-center">Be the first to know when we launch. No spam, just performance.</p>
          </div>
        </section>
        <section className="py-24 px-6 bg-white text-black/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-left md:text-center mb-18 md:mb-36">
              <h2 className="text-4xl font-bold mb-4 sm:mb-6 text-heading max-w-3xl mx-auto">
                STRV AI brings nutrition, fitness, and coaching together in one smart
              </h2>
              <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
                One platform. Smooth and simple. Unlimited potential.
              </p>
            </div>

            <div className="space-y-12 sm:space-y-20">
              <div className="flex flex-col sm:flex-row gap-10">
                <Card>
                  <Title>
                    Tracking & Performance
                  </Title>
                  <Body>
                    Plan your nutrition and supplements, log meals with photos, track your sleep and workouts, and follow your improvement through clear visual progress graphs.
                  </Body>
                </Card>
                <FeatureFrame className="h-[580px]">
                  <CalendarDayView />
                </FeatureFrame>
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-10">
                <FeatureFrame>
                  <VoiceToText />
                </FeatureFrame>
                <Card className="sm:pl-5">
                  <Title>
                    AI Assistance
                  </Title>
                  <Body className="">
                    AI makes tracking and coaching effortless: instantly estimate calories from meal photos, turn voice notes into organized logs,
                    and receive session planning assistance. Smart notifications keep coaches informed and clients engaged.
                  </Body>
                </Card>
              </div>
              <div className="flex flex-col sm:flex-row gap-10">
                <Card>
                  <Title>
                    Coaching & Communication
                  </Title>
                  <Body>
                    Coaches can manage sessions through calendar integration, communicate effortlessly with clients via WhatsApp or Telegram,
                    and access shared profiles and performance data to guide training more effectively.
                  </Body>
                </Card>
                <FeatureFrame />
              </div>
            </div>
          </div>
        </section>
        <section className="pb-24 px-6 bg-white text-black/80">
          <div className="max-w-4xl mx-auto">
            <div className="text-left md:text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-heading">
                Strive for Absolute Peak
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto">
                Coaches and athletes are already on board. Join them and get early access, whether you’re a coach, athlete, or fitness lover.
              </p>
              <div className="flex justify-center">
                <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-md">
                  <input
                    type="name"
                    required
                    placeholder="Jon Jones"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-lg text-lg px-3 py-2"
                  />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg text-lg px-3 py-2"
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
                    className="rounded-xl bg-gradient-to-r bg-sky-900 hover:bg-sky-700 active:bg-sky-950 shadom-md px-6 py-3 text-white cursor-pointer font-bold space-x-3 flex text-lg justify-between"
                  >
                    <div className="w-5"></div>
                    <div className="text-center grow">Subscribe for Early Access</div>
                    <div className="w-5 flex items-center justify-end">
                      {status === 'loading' && (<SpinnerIcon className="h-6 w-6" />)}
                    </div>
                  </button>
                  {msg && (
                    <p className={classNames(
                      "p-1 rounded-md text-center", {
                      "text-red-600": status === "error",
                      "text-green-700": status !== "error"
                    }
                    )}>{msg}</p>
                  )}
                </form>
              </div>
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
