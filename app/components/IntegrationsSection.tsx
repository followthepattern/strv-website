'use client'

import IntegrationHub from './IntegrationHub';
import { useTranslation } from '@/hooks/useTranslation';

export default function IntegrationsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-sky-900 to-teal-950 text-white overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{t('integrationsTitle')}</h2>
        <p className="text-xl text-white/60 max-w-xl mx-auto mb-16">
          {t('integrationsSubtitle')}
        </p>

        <IntegrationHub />

        <p className="mt-12 text-sm text-white/30">{t('integrationsMore')}</p>
      </div>
    </section>
  );
}
