export type Locale = 'en' | 'hu';

export const defaultLocale: Locale = 'en';

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment === 'hu') {
    return 'hu';
  }

  return defaultLocale;
}
