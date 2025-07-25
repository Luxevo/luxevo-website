"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslations, type Locale } from "@/lib/i18n"

interface NavbarProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations(locale)

  const navItems = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.specializations, href: "#use-cases" },
    { label: t.nav.packages, href: "#packages" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" aria-label="Luxévo Inc. Homepage">
            <Image
              src="/clients-logo/luxevo.png"
              alt="Luxévo Inc. Logo"
              width={150}
              height={150}
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLocale={locale} onLocaleChange={onLocaleChange} />
          <ThemeToggle />

          <Button
            asChild
            className="hidden md:flex items-center gap-3 px-4 py-2 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl border-0 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#contact">
              <Zap className="h-4 w-4 text-white" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">Start Project</span>
                <span className="text-xs text-blue-100 -mt-0.5">Free consultation</span>
              </div>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  <ThemeToggle />
                  <Button
                    asChild
                    className="w-full flex items-center gap-3 px-4 py-2 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl border-0 h-auto shadow-lg"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      <Zap className="h-4 w-4 text-white" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Start Project</span>
                        <span className="text-xs text-blue-100 -mt-0.5">Free consultation</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
