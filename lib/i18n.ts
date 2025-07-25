import { en } from './translations/en'
import { fr } from './translations/fr'

export const locales = ['en', 'fr'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

// Translation keys and their values
export const translations = {
  en,
  fr,
} as const

export type TranslationKey = keyof typeof translations.en

// Hook to get translations
export function useTranslations(locale: Locale = defaultLocale) {
  return translations[locale]
}

// Get translation for a specific key
export function t(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
} 