import { useState } from "react";
import SpinnerIcon from "../icons/SpinnerIcon";
import classNames from "classnames";
import { Card, Title, Body, FeatureFrame } from "./feature";
import CalendarDayView from "./CalendarDayView";
import VoiceToText from "./VoiceToText";
import TrackingDashboard from "./TrackingDashboard";
import ContactSection from "./ContactSection";
import ChatInterface from "./ChatInterface";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocaleFromPath } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export default function Home() {
    const { t } = useTranslation();
    const pathname = usePathname();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
    const [msg, setMsg] = useState("");

    const locale = getLocaleFromPath(pathname);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!consent) {
            setStatus("error");
            setMsg(t("consentError")); return;
        }
        setStatus("loading"); setMsg("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    locale: locale,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || t("subscriptionError"));
            setStatus("ok");

            setMsg(t("subscriptionSuccess"));
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
                <section className="relative flex flex-col bg-gradient-to-br from-sky-800 to-teal-950 text-white">

                    <div className="absolute inset-0 pointer-events-none bg-[url('/hexagons.png')] bg-repeat opacity-4"></div>

                    {/* Nav */}
                    <div className="relative z-10 flex justify-between w-full px-6 pt-4">
                        <a href="/" className="flex items-center">
                            <img src="/strv-white.svg" alt="STRV Logo" className="h-8 w-8 sm:h-12 sm:w-12" />
                            <span className="sm:text-xl font-bold text-white">{t("siteTitle")}</span>
                        </a>
                        <div className="flex items-center gap-8">
                            <a className="sm:text-xl font-bold text-white" href={locale == "en" ? "/en/features" : "/hu/features"}>
                                {t("navFeatures")}
                            </a>
                            <a className="sm:text-xl font-bold text-white" href={locale == "en" ? "/hu" : "/"}>
                                {locale == "en" ? "HU" : "EN"}
                            </a>
                        </div>
                    </div>

                    {/* Hero content */}
                    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-14 sm:py-20 flex flex-col lg:flex-row items-center gap-12">
                        {/* Left: title + form */}
                        <div className="flex-1 w-full">
                            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
                                {t("heroTitle")}
                            </h1>
                            <p className="mt-4 text-lg sm:text-xl opacity-90 max-w-lg">
                                {t("heroDescription")}
                            </p>
                            <div className="mt-8 max-w-md">
                                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                                    <input
                                        type="name"
                                        required
                                        placeholder={t("namePlaceholder")}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border rounded-lg text-lg px-3 py-2"
                                    />
                                    <input
                                        type="email"
                                        required
                                        placeholder={t("emailPlaceholder")}
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
                                        <span className="text-left">
                                            {t("consentText")}{" "}
                                            <a href="/privacy" className="underline" target="_blank">{t("privacyPolicy")}</a>.
                                        </span>
                                    </label>
                                    {/* Honeypot */}
                                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="rounded-xl bg-gradient-to-r bg-lime-700 hover:bg-lime-600 active:bg-lime-900 shadom-md px-4 space-x-1 py-3 text-white cursor-pointer font-bold flex text-lg justify-between"
                                    >
                                        <div className="w-5"></div>
                                        <div className="text-center grow">{t("subscribeButton")}</div>
                                        <div className="w-5 flex items-center justify-end">
                                            {status === 'loading' && (<SpinnerIcon className="h-5 w-5" />)}
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
                                <p className="mt-4 opacity-70 text-sm">{t("earlyAccessNote")}</p>
                            </div>
                        </div>

                        {/* Right: chat interface — desktop only */}
                        <div className="hidden lg:block lg:flex-1 lg:max-w-sm w-full">
                            <ChatInterface />
                        </div>
                    </div>
                </section>
                <section className="py-24 px-6 bg-white text-black/80">
                    <div className="max-w-6xl mx-auto">
                        {/* Chat interface — mobile only, shown here on white background */}
                        <div className="lg:hidden mb-16">
                            <ChatInterface />
                        </div>

                        <div className="text-left md:text-center mb-18 md:mb-36">
                            <h2 className="text-4xl font-bold mb-4 sm:mb-6 text-heading max-w-3xl mx-auto">
                                {t("featuresTitle")}
                            </h2>
                            <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
                                {t("featuresSubtitle")}
                            </p>
                        </div>

                        <div className="space-y-12 sm:space-y-20">
                            <div className="flex flex-col sm:flex-row gap-10">
                                <Card>
                                    <Title>
                                        {t("trackingTitle")}
                                    </Title>
                                    <Body>
                                        {t("trackingBody")}
                                    </Body>
                                </Card>
                                <FeatureFrame className="h-[580px]">
                                    <TrackingDashboard />
                                </FeatureFrame>
                            </div>
                            <div className="flex flex-col-reverse sm:flex-row gap-10">
                                <FeatureFrame>
                                    <VoiceToText />
                                </FeatureFrame>
                                <Card className="sm:pl-5">
                                    <Title>
                                        {t("aiAssistanceTitle")}
                                    </Title>
                                    <Body className="">
                                        {t("aiAssistanceBody")}
                                    </Body>
                                </Card>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-10">
                                <Card>
                                    <Title>
                                        {t("coachingTitle")}
                                    </Title>
                                    <Body>
                                        {t("coachingBody")}
                                    </Body>
                                </Card>
                                <FeatureFrame>
                                    <CalendarDayView />
                                </FeatureFrame>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-24 px-6 bg-white text-black/80">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-left md:text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 text-heading">
                                {t("ctaTitle")}
                            </h2>
                            <p className="text-xl mb-10 max-w-3xl mx-auto">
                                {t("ctaDescription")}
                            </p>
                            <div className="flex justify-center">
                                <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-md">
                                    <input
                                        type="name"
                                        required
                                        placeholder={t("namePlaceholder")}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border rounded-lg text-lg px-3 py-2"
                                    />
                                    <input
                                        type="email"
                                        required
                                        placeholder={t("emailPlaceholder")}
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
                                            {t("consentText")}{" "}
                                            <a href="/privacy" className="underline" target="_blank">{t("privacyPolicy")}</a>.
                                        </span>
                                    </label>
                                    {/* Honeypot */}
                                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="rounded-xl bg-gradient-to-r bg-sky-900 hover:bg-sky-700 active:bg-sky-950 shadom-md px-4 py-3 text-white cursor-pointer font-bold flex text-lg justify-between"
                                    >
                                        <div className="w-5"></div>
                                        <div className="text-center grow">{t("subscribeButton")}</div>
                                        <div className="w-5 flex items-center justify-end">
                                            {status === 'loading' && (<SpinnerIcon className="h-5 w-5" />)}
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
                <ContactSection />
            </main>
            <footer className="my-5 flex items-center justify-center">
                <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {t("footerCopyright")}</p>
            </footer>
        </div>
    );
}