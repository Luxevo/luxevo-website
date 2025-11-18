"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"
import { useTranslations } from "@/lib/i18n"
import { useLocale } from "@/lib/locale-context"
import Link from "next/link"

export default function CookieConsent() {
  const { locale } = useLocale()
  const t = useTranslations(locale)
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Always show the badge so user can change their mind (RGPD requirement)
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
      setIsExpanded(true) // Show expanded on first visit
    } else {
      // Show badge even if consent was given, so user can withdraw it
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(true) // Keep badge visible so user can change mind
    setIsExpanded(false) // Collapse after choice
    // Trigger Google Analytics load
    loadGoogleAnalytics()
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(true) // Keep badge visible so user can change mind
    setIsExpanded(false) // Collapse after choice
    // Disable Google Analytics if it was already loaded (RGPD requirement)
    disableGoogleAnalytics()
  }

  const disableGoogleAnalytics = () => {
    // Remove Google Analytics scripts if they exist
    const scripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag/js"], script#google-analytics')
    scripts.forEach(script => script.remove())
    
    // Clear dataLayer
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer = []
    }
    
    // Disable gtag function
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag = function() {}
    }
  }

  const loadGoogleAnalytics = () => {
    // Check if already loaded
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      return
    }

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-MRD7FBH1KV'
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.id = 'google-analytics'
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-MRD7FBH1KV');
    `
    document.head.appendChild(script2)
  }

  // Load analytics if consent was already given
  useEffect(() => {
    if (!mounted) return
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      loadGoogleAnalytics()
    }
  }, [mounted])

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) return null

  // Get current consent status
  const currentConsent = mounted ? localStorage.getItem('cookie-consent') : null

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div 
        className={`
          bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg rounded-lg
          transition-all duration-300 ease-in-out overflow-hidden
          ${isExpanded 
            ? 'w-80 md:w-96 p-4' 
            : 'w-12 h-12 p-2 cursor-pointer'
          }
        `}
      >
        {!isExpanded ? (
          // Collapsed state - just icon
          <div className="flex items-center justify-center h-full">
            <Cookie className="w-4 h-4 text-brand-blue" />
          </div>
        ) : (
          // Expanded state - full content
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Cookie className="w-5 h-5 text-brand-blue" />
              <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                {locale === 'fr' ? 'Cookies' : 'Cookies'}
              </h3>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {locale === 'fr' 
                  ? 'Pour vous offrir la meilleure expérience possible, nous utilisons des technologies comme les cookies pour stocker et/ou accéder aux informations de votre appareil. En acceptant ces technologies, vous nous autorisez à traiter des données telles que votre comportement de navigation ou votre identifiant unique sur ce site. Refuser ou retirer votre consentement peut affecter certaines fonctionnalités.'
                  : 'To offer you the best possible experience, we use technologies such as cookies to store and/or access information on your device. By accepting these technologies, you authorize us to process data such as your browsing behavior or unique identifier on this site. Refusing or withdrawing your consent may affect certain features.'}
              </p>
              {currentConsent && (
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {currentConsent === 'accepted' 
                    ? (locale === 'fr' 
                      ? '✓ Vous avez accepté les cookies. Vous pouvez retirer votre consentement à tout moment.'
                      : '✓ You have accepted cookies. You can withdraw your consent at any time.')
                    : (locale === 'fr'
                      ? '✓ Vous avez refusé les cookies. Vous pouvez changer d\'avis à tout moment.'
                      : '✓ You have rejected cookies. You can change your mind at any time.')
                  }
                </p>
              )}
              <Link href="/privacy" className="text-xs underline hover:no-underline text-brand-blue">
                {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
              </Link>
            </div>
            <div className="flex gap-2 pt-2">
              <Button
                variant={currentConsent === 'rejected' ? 'default' : 'outline'}
                size="sm"
                onClick={handleReject}
                className={`flex-1 text-xs h-8 ${
                  currentConsent === 'rejected' 
                    ? 'bg-orange-600 hover:bg-orange-600 text-white hover:text-white' 
                    : 'bg-white hover:bg-white border-gray-300 text-gray-700 hover:text-gray-700'
                }`}
              >
                {locale === 'fr' ? 'Refuser' : 'Reject'}
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                variant={currentConsent === 'accepted' ? 'default' : currentConsent === 'rejected' ? 'outline' : 'default'}
                className={`flex-1 text-xs h-8 ${
                  currentConsent === 'accepted' 
                    ? 'bg-green-600 hover:bg-green-600 text-white hover:text-white'
                    : currentConsent === 'rejected'
                    ? 'bg-white hover:bg-white border-gray-300 text-gray-700 hover:text-gray-700'
                    : 'bg-brand-blue hover:bg-brand-blue text-white hover:text-white'
                }`}
              >
                {locale === 'fr' ? 'Accepter' : 'Accept'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

