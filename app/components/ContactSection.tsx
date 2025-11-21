'use client'

import { useTranslation } from "@/hooks/useTranslation";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-sky-800 to-teal-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("contactTitle")}
          </h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            {t("contactDescription")}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="flex items-center gap-4">
              <div className="">
                <svg
                  className="w-8 h-8 text-lime-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t("contactEmailTitle")}</h3>
                <a
                  href="mailto:info@strv.ai"
                  className="text-lime-300 hover:text-lime-200 underline"
                >
                  csaba@followthepattern.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
