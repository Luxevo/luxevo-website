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
    <footer className="border-t py-12 md:py-16 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-10 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 w-80 h-80 bg-gradient-to-br from-teal-400/15 to-cyan-500/15 rounded-full blur-3xl"></div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center h-24 w-auto">
              <Image 
                src="/clients-logo/luxevo.png" 
                alt="Luxévo Logo" 
                width={400}
                height={150}
                
              />
            </div>
          </div>
          
          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-boldonse">{t.footer.services}</h3>
            <nav aria-label="Services Navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.webDevelopment.title}
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.saasPlatforms.title}
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.mobileApps.title}
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.automationSystems.title}
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.ecommercePlatform.title}
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.uxuiDesign.title}
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.brandIdentity.title}
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    {t.featuresContent.aiIntegration.title}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-boldonse">Contact</h3>
            <div className="flex flex-col items-start space-y-3">
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              </Link>
              <Link 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t.footer.contactUs}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex justify-center items-center">
          <p className="text-sm text-muted-foreground">{t.footer.copyright.replace('2024', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  )
}
