"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslations, type Locale } from "@/lib/i18n"
import { useTheme } from "next-themes"

interface NavbarProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const t = useTranslations(locale)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { label: t.nav.ourServices, href: "#features" },
    { label: t.nav.ourWork, href: "/our-work" },

    { label: t.nav.specializations, href: "#use-cases" },
    { label: t.nav.contact, href: "#contact" },
  ]

  // Determine which logo to use based on theme, but only after mounting
  const logoSrc = mounted && theme === 'dark' ? '/luxevo-white-logo.png' : '/clients-logo/luxevo.png'

  return (
    <header className="fixed top-5 z-50 w-full">
      <div className="container flex items-center justify-center">
        {/* Glassmorphism Navigation Menu with Logo inside */}
        <nav className="flex items-center rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg gap-6 px-6	" aria-label="Main Navigation">
          {/* Logo inside the menu */}
          <Link href="/" className="flex items-center space-x-2 h-16" aria-label="Luxévo Inc. Homepage">
          <Image src={logoSrc} alt="WEBNIQUE" width={140} height={80} className="scale-60" priority />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                  className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#564eba]  hover:bg-white/20 dark:hover:bg-white/10 rounded-full transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} onLocaleChange={onLocaleChange} />
            <ThemeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="outline" 
                  size="icon" 
                  aria-label="Open Menu"
                  className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-white/10"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-white/10">
                <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-black/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex items-center gap-4 mt-4">
                    <ThemeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
