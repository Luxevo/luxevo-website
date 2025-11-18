import type React from "react"
import type { Metadata } from "next"
import { Inter, Figtree } from 'next/font/google'
import "./globals.css"
import { LocaleProvider } from "@/lib/locale-context"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })
const figtree = Figtree({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree"
})

export const metadata: Metadata = {
  title: "Luxévo Inc. | Full-Stack Development & Technical Solutions for Quebec Startups",
  description:
    "Complete web development, SaaS platforms, mobile apps, automation, and infrastructure solutions. From concept to scale for Quebec FinTech, HealthTech, and FoodTech startups.",
  keywords: "web development, SaaS development, mobile apps, automation, technical infrastructure, DevOps consulting, Quebec startups, FinTech, HealthTech, full-stack development",
  icons: {
    icon: '/icon-tab.png',
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://your-domain.com",
    title: "Luxévo Inc. | Complete Technical Solutions for Startups",
    description:
      "End-to-end development services: web apps, SaaS platforms, mobile apps, automation, and infrastructure. Transform your startup with our comprehensive technical expertise.",
    siteName: "Luxévo Inc.",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxévo Inc. - Complete Technical Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxévo Inc. | Complete Technical Solutions for Startups",
    description: "Web development, SaaS platforms, mobile apps, automation, and infrastructure - everything your startup needs to scale.",
    images: ["https://your-domain.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.className} ${figtree.variable}`}>
        <LocaleProvider>
          {children}
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  )
}
