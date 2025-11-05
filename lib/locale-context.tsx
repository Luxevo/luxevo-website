"use client"

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { type Locale } from '@/lib/i18n'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

// Internal component that uses useSearchParams - must be wrapped in Suspense
function LocaleSync({ onLocaleChange }: { onLocaleChange: (locale: Locale) => void }) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get('lang') as Locale
    if (lang && ['en', 'fr'].includes(lang)) {
      onLocaleChange(lang)
    }
  }, [searchParams, onLocaleChange])

  return null
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>('fr')

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const lang = urlParams.get('lang') as Locale
      if (lang && ['en', 'fr'].includes(lang)) {
        setLocale(lang)
      }
    }
    
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    // Update URL with new language
    const newUrl = pathname === '/about' 
      ? `/about?lang=${newLocale}`
      : `/?lang=${newLocale}`
    window.history.pushState({}, '', newUrl)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      <Suspense fallback={null}>
        <LocaleSync onLocaleChange={setLocale} />
      </Suspense>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
