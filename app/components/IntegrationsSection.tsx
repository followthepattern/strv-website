'use client'

import IntegrationHub from './IntegrationHub';
import { useTranslation } from '@/hooks/useTranslation';

export default function IntegrationsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-white text-black/80">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('integrationsTitle')}</h2>
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-16">
          {t('integrationsSubtitle')}
        </p>

        <IntegrationHub />

        <p className="mt-12 text-sm text-gray-400">{t('integrationsMore')}</p>
      </div>
    </section>
  );
}
