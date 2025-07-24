import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxévo Inc. | Technical Infrastructure for Quebec Startups",
  description:
    "Reduce cloud costs by 40-70%, accelerate deployments by 10x, and achieve 99.9% uptime. Specialized infrastructure consulting for Quebec FinTech, HealthTech, and FoodTech startups.",
  keywords: "technical infrastructure, DevOps consulting, cloud optimization, Quebec startups, FinTech infrastructure, HealthTech compliance, CI/CD automation",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://your-domain.com",
    title: "Luxévo Inc. | Infrastructure Transformation for Startups",
    description:
      "Proven 15-day audit and transformation process for Quebec startups. 5x ROI guarantee with 40-70% cost reduction and 10x deployment acceleration.",
    siteName: "Luxévo Inc.",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxévo Inc. - Technical Infrastructure Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxévo Inc. | Infrastructure Transformation for Startups",
    description: "Reduce cloud costs by 40-70% and accelerate deployments by 10x with our proven transformation process.",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
