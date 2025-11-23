import { useTranslation } from "@/hooks/useTranslation";
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';

export default function SubscribedComponent() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-800 to-teal-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 pointer-events-none bg-[url('/hexagons.png')] bg-repeat opacity-4"></div>

      <div className="relative z-10 max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r bg-lime-700 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-lime-600" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {t("subscribedTitle")}
          </h1>
          <p className="text-white/90 text-lg">
            {t("subscribedMessage")}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Check Email Card */}
          <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("subscribedCheckEmail")}
                </h3>
                <p className="text-gray-700">
                  {t("subscribedCheckEmailDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* What's Next Card */}
          <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("subscribedWhatsNext")}
                </h3>
                <p className="text-gray-700">
                  {t("subscribedWhatsNextDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center pt-4">
            <a
              href={t("root")}
              className="inline-flex items-center gap-2 bg-teal-900 active:bg-teal-950 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              {t("subscribedBackHome")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}