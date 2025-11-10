import Link from "next/link"
import Image from "next/image"
import { useTranslations, type Locale } from "@/lib/i18n"

interface FooterProps {
  locale?: Locale
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const t = useTranslations(locale)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center h-24 w-auto">
              <Image
                src="/clients-logo/luxevo.png"
                alt="Luxévo Logo"
                width={400}
                height={150}
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              {locale === 'fr'
                ? 'Solutions techniques complètes pour startups ambitieuses.'
                : 'Complete technical solutions for ambitious startups.'}
            </p>
          </div>

          {/* Links & Contact */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-boldonse">{locale === 'fr' ? 'Navigation' : 'Quick Links'}</h3>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                      {t.nav.ourServices}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                      {t.nav.contact}
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                      {locale === 'fr' ? 'Confidentialité' : 'Privacy'}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-boldonse">Contact</h3>
              <div className="flex flex-col space-y-3 text-sm">
                <a
                  href="mailto:contact@luxevotech.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@luxevotech.com
                </a>
                <a
                  href="https://www.linkedin.com/company/luxevotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright.replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}
