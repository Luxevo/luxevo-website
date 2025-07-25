"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { locales, type Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languageNames = {
    en: 'EN',
    fr: 'FR',
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="min-w-[60px]"
      >
        {languageNames[currentLocale]}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-background border rounded-md shadow-lg z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => {
                onLocaleChange(locale)
                setIsOpen(false)
              }}
              className={`block w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors ${
                locale === currentLocale ? 'bg-muted font-medium' : ''
              }`}
            >
              {languageNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 