import { translations, TranslationKey } from '@/lib/translations';

export function useTranslation() {
  const t = (key: TranslationKey): string => {
    return translations.en[key];
  };

  return { t };
}
