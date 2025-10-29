"use client"

import { locales, type Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const languageNames = {
    en: 'EN',
    fr: 'FR',
  }

  return (
    <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden">
      {locales.map((locale, index) => (
        <div key={locale} className="flex items-center">
          <button
            onClick={() => onLocaleChange(locale)}
            className={`px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
              locale === currentLocale 
                ? 'text-[#564eba] bg-white/20' 
                : 'text-gray-600 hover:text-[#564eba] hover:bg-white/10'
            }`}
          >
            {languageNames[locale]} 
          </button>
          {index < locales.length - 1 && (
            <div className="h-4 w-px bg-white/20" />
          )}
        </div>
      ))}
    </div>
  )
} 