'use client'

import { usePathname } from 'next/navigation';
import { translations, TranslationKey } from '@/lib/translations';
import { getLocaleFromPath, Locale } from '@/lib/i18n';

export function useTranslation() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || translations['en'][key];
  };

  return { t, locale };
}
