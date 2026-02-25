"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { getLocaleFromPath } from "@/lib/i18n";
import { usePathname } from "next/navigation";

interface PhaseProps {
  number: string;
  title: string;
  timeline: string;
  status: string;
  statusColor: string;
  accentColor: string;
  children: React.ReactNode;
  isLast?: boolean;
}

function Phase({
  number,
  title,
  timeline,
  status,
  statusColor,
  accentColor,
  children,
  isLast,
}: PhaseProps) {
  return (
    <div className="relative flex gap-4 sm:gap-8">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white font-extrabold text-base sm:text-xl shrink-0">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-white/30 to-white/5 mt-2" />
        )}
      </div>

      {/* Content card */}
      <div className="pb-10 sm:pb-16 grow">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-8 hover:bg-white/8 transition-colors">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {title}
            </h3>
          </div>

          <div className="mb-5 text-white/80">{children}</div>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${statusColor}`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-current" />
            </span>
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
          <span className="text-teal-400 mt-0.5 shrink-0">&#x2022;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-3">
      <p className="text-sm font-semibold text-white/90 mb-1.5">{title}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
            <span className="text-teal-400 mt-0.5 shrink-0">&#x2022;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-800 to-teal-950">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 pt-4 pb-2">
        <a href={locale === "hu" ? "/hu" : "/"} className="flex items-center">
          <img
            src="/strv-white.svg"
            alt="STRV Logo"
            className="h-8 w-8 sm:h-12 sm:w-12"
          />
          <span className="sm:text-xl font-bold text-white">
            {t("siteTitle")}
          </span>
        </a>
        <div className="flex items-center gap-8">
          <a
            className="sm:text-xl font-bold text-white"
            href={locale === "hu" ? "/hu" : "/"}
          >
            {t("navHome")}
          </a>
          <a
            className="sm:text-xl font-bold text-white"
            href={locale === "en" ? "/hu/features" : "/en/features"}
          >
            {locale === "en" ? "HU" : "EN"}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 text-center py-12 sm:py-20 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          {t("roadmapTitle")}
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
          {t("roadmapSubtitle")}
        </p>
      </section>

      {/* Timeline */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Phase 1 */}
        <Phase
          number="1"
          title={t("phase1Title")}
          timeline={t("phase1Timeline")}
          status={t("phase1Status")}
          statusColor="text-green-400 bg-green-400/10"
          accentColor="bg-green-500"
        >
          <FeatureList
            items={[
              t("phase1Feature1"),
              t("phase1Feature2"),
              t("phase1Feature9"),
              t("phase1Feature3"),
              t("phase1Feature4"),
              t("phase1Feature5"),
              t("phase1Feature6"),
              t("phase1Feature7"),
              t("phase1Feature8"),
            ]}
          />
          <SubSection
            title={t("phase1AiTitle")}
            items={[t("phase1Ai1"), t("phase1Ai2"), t("phase1Feature10")]}
          />
        </Phase>

        {/* Phase 2 */}
        <Phase
          number="2"
          title={t("phase2Title")}
          timeline={t("phase2Timeline")}
          status={t("phase2Status")}
          statusColor="text-yellow-400 bg-yellow-400/10"
          accentColor="bg-yellow-500"
        >
          <FeatureList
            items={[
              t("phase2Feature1"),
              t("phase2Feature2"),
              t("phase2Feature3"),
              t("phase2Feature4"),
              t("phase2Feature5"),
              t("phase2Feature6"),
              t("phase2Feature7"),
              t("phase2Feature8"),
            ]}
          />
        </Phase>

        {/* Phase 3 */}
        <Phase
          number="3"
          title={t("phase3Status")}
          timeline={t("phase3Timeline")}
          status={t("statusPlanned")}
          statusColor="text-purple-400 bg-purple-400/10"
          accentColor="bg-purple-500"
        >
          <FeatureList
            items={[
              t("phase3Feature1"),
              t("phase3Feature2"),
              t("phase3Feature3"),
              t("phase3Feature4"),
              t("phase3Feature5"),
              t("phase3Feature6"),
            ]}
          />
        </Phase>

        {/* Phase 4 */}
        <Phase
          number="4"
          title={t("phase4Title")}
          timeline={t("phase4Timeline")}
          status={t("statusPlanned")}
          statusColor="text-purple-400 bg-purple-400/10"
          accentColor="bg-purple-500"
        >
          <SubSection
            title={t("phase4InitialFocus")}
            items={[t("phase4Sport1"), t("phase4Sport2")]}
          />
          <SubSection
            title={t("phase4Expansion")}
            items={[
              t("phase4Sport3"),
              t("phase4Sport4"),
              t("phase4Sport5"),
              t("phase4Sport6"),
              t("phase4Sport7"),
            ]}
          />
          <SubSection
            title={t("phase4SpecialGoal")}
            items={[
              t("phase4Special1"),
              t("phase4Special2"),
              t("phase4Special3"),
              t("phase4Special4"),
              t("phase4Special5"),
            ]}
          />
        </Phase>

        {/* Phase 5 */}
        <Phase
          number="5"
          title={t("phase5Title")}
          timeline={t("phase5Timeline")}
          status={t("statusPlanned")}
          statusColor="text-purple-400 bg-purple-400/10"
          accentColor="bg-purple-500"
          isLast
        >
          <FeatureList items={[t("phase5Feature1"), t("phase5Feature4")]} />
        </Phase>
      </section>

      {/* Back to Home */}
      <section className="relative z-10 text-center pb-16">
        <a
          href={locale === "hu" ? "/hu" : "/"}
          className="inline-block px-6 py-3 rounded-xl bg-lime-700 hover:bg-lime-600 active:bg-lime-900 text-white font-bold transition-colors"
        >
          {t("featuresPageBackHome")}
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-5 flex items-center justify-center">
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} {t("footerCopyright")}
        </p>
      </footer>
    </div>
  );
}
