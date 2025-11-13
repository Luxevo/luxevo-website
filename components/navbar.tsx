"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from 'lucide-react'
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslations } from "@/lib/i18n"
import { useLocale } from "@/lib/locale-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale } = useLocale()
  const t = useTranslations(locale)

  const navItems = [
    { label: t.nav.ourServices, href: `/#features` },
    { label: t.nav.about, href: `/about` },
    { label: t.nav.contact, href: `/#contact` },
  ]

  return (
    <header className="fixed top-5 z-50 w-full">
      <div className="container flex items-center justify-center">
        {/* Glassmorphism Navigation Menu with Logo inside */}
        <nav className="flex items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg gap-6 px-6	" aria-label="Main Navigation">
          {/* Logo inside the menu */}
          <Link href={`/`} className="flex items-center space-x-2 h-16" aria-label="Luxévo Inc. Homepage">
          <Image src="/clients-logo/luxevo.png" alt="WEBNIQUE" width={140} height={80} className="scale-60" priority />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-5 py-2.5 text-sm font-medium text-gray-800 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-gradient-to-b hover:from-white/70 hover:to-white/50 hover:backdrop-blur-[120px] hover:backdrop-saturate-[180%] hover:backdrop-brightness-110 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15),0_2px_10px_rgba(255,255,255,0.1),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:border-white/40"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="outline" 
                  size="icon" 
                  aria-label="Open Menu"
                  className="bg-white/10 backdrop-blur-md border-white/20"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/50 backdrop-blur-xl border-white/40">
                <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-lg font-medium text-gray-800 px-5 py-3 rounded-full border border-transparent hover:bg-gradient-to-b hover:from-white/70 hover:to-white/50 hover:backdrop-blur-[120px] hover:backdrop-saturate-[180%] hover:backdrop-brightness-110 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15),0_2px_10px_rgba(255,255,255,0.1),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:border-white/40 transition-all duration-300 ease-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
