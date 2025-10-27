"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Bot, Database, Shield, Users, Zap } from 'lucide-react'
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/testimonials"
import UseCases from "@/components/use-cases"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TypingPromptInput from "@/components/typing-prompt-input"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import FeaturesSection from "@/components/features-section"
import StructuredData from "@/components/structured-data"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations, defaultLocale, type Locale } from "@/lib/i18n"
import Link from "next/link"

export default function Home() {
  const [locale, setLocale] = React.useState<Locale>(defaultLocale)
  const t = useTranslations(locale)

  return (

    <>
            <Navbar locale={locale} onLocaleChange={setLocale} />

      <StructuredData />
      <div className="flex min-h-screen flex-col">

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <CssGridBackground />
          <FramerSpotlight />
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">{t.hero.badge}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12">
                {t.hero.subtitle}
              </p>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-3 mt-16">
                <Button asChild>
                  <Link href="#contact" className="flex items-center gap-3 px-5 py-6 h-[60px] bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                    <Zap className="h-5 w-5 text-white relative z-10" />
                    <div className="flex flex-col items-start relative z-10">
                      <span className="text-[15px] font-medium">{t.hero.startProject}</span>
                      <span className="text-xs text-blue-100 -mt-0.5">{t.hero.freeConsultation}</span>
                    </div>
                  </Link>
                </Button>
                <Button className="px-5 py-6 h-[60px] rounded-xl border-2 border-brand-orange bg-transparent hover:bg-brand-orange hover:text-white text-[15px] font-medium text-brand-orange transition-all duration-300">
                  {t.hero.viewWork}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection locale={locale} />

        {/* How It Works */}
        <section className="py-20" id="how-it-works" aria-labelledby="how-it-works-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t.howItWorks.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t.howItWorks.subtitle}
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">{t.howItWorks.steps.discovery.title}</h3>
                <p className="text-muted-foreground">
                  {t.howItWorks.steps.discovery.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">{t.howItWorks.steps.development.title}</h3>
                <p className="text-muted-foreground">
                  {t.howItWorks.steps.development.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">{t.howItWorks.steps.deployment.title}</h3>
                <p className="text-muted-foreground">
                  {t.howItWorks.steps.deployment.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCases locale={locale} />

        {/* Partners & Clients */}
        <section id="partners" className="py-20 bg-muted/30 dark:bg-muted/10" aria-labelledby="partners-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-orange px-3 py-1 text-sm text-white mb-2">
                  {t.partners.badge}
                </div>
                <h2 id="partners-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t.partners.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t.partners.subtitle}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-8"
                animate={{ x: [0, -1200] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                
     
                {/* UPGR8 */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/upgr8-logo.png" 
                        alt="UPGR8 Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">UPGR8</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>

                {/* Gosholo */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/gosholo-logo.png" 
                        alt="Gosholo Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Gosholo</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.mobileApp}
                    </span>
                  </div>
                </div>
           {/* Desjardins */}
           <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/desjardins-logo.png" 
                        alt="Desjardins Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Desjardins</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>
                {/* Mordu Sport */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/mordu-sport-logo.png" 
                        alt="Mordu Sport Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Mordu Sport</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.mobileApp}
                    </span>
                  </div>
                </div>

                {/* Webnique */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/webnique-logo.png" 
                        alt="Webnique Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Webnique</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {t.partners.tags.webAgency}
                    </span>
                  </div>
                </div>
                {/* Radio Canada */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/radio-canada-logo.png" 
                        alt="Radio Canada Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Radio Canada</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>
                {/* WELPCO */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/welpco-logo.png" 
                        alt="WELPCO Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">WELPCO</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>

                {/* Duplicate items for seamless loop */}
                
        
                {/* UPGR8 */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/upgr8-logo.png" 
                        alt="UPGR8 Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">UPGR8</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>

                {/* Gosholo */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/gosholo-logo.png" 
                        alt="Gosholo Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Gosholo</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.mobileApp}
                    </span>
                  </div>
                </div>
           {/* Desjardins */}
           <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/desjardins-logo.png" 
                        alt="Desjardins Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Desjardins</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>
                {/* Mordu Sport */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/mordu-sport-logo.png" 
                        alt="Mordu Sport Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Mordu Sport</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.mobileApp}
                    </span>
                  </div>
                </div>

                {/* Webnique */}
              <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/webnique-logo.png" 
                        alt="Webnique Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Webnique</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {t.partners.tags.webAgency}
                    </span>
                  </div>
                </div>
             {/* Radio Canada */}
             <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/radio-canada-logo.png" 
                        alt="Radio Canada Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Radio Canada</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>
                {/* WELPCO */}
                <div className="flex-shrink-0 w-64">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                      <Image 
                        width={150}
                        height={150}
                        src="/clients-logo/welpco-logo.png" 
                        alt="WELPCO Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">WELPCO</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {t.partners.tags.saasPlatform}
                    </span>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Partnership Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">{t.common.projectsDelivered}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">{t.common.clientSatisfaction}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">{t.common.yearsPartnership}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">{t.common.supportAvailable}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials locale={locale} />

        {/* Service Packages Section */}
        <section id="packages" className="py-20 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-muted/20" aria-labelledby="packages-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-blue px-3 py-1 text-sm text-white mb-2">
                  {t.packages.badge}
                </div>
                <h2 id="packages-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t.packages.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t.packages.subtitle}
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 mb-16">
              {/* Starter Package */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-background border-2 border-primary/20 rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{t.packagesContent.mvpDevelopment.title}</h3>
                      <p className="text-muted-foreground">{t.packagesContent.mvpDevelopment.description}</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-3 text-sm">
                        {t.packagesContent.mvpDevelopment.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Package */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur opacity-100 transition duration-1000"></div>
                <div className="relative bg-background border-2 border-accent rounded-2xl p-8 h-full shadow-xl">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">{t.common.mostPopular}</span>
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-6 pt-4">
                      <h3 className="text-2xl font-bold mb-2">{t.packagesContent.saasPlatform.title}</h3>
                      <p className="text-muted-foreground">{t.packagesContent.saasPlatform.description}</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-3 text-sm">
                        {t.packagesContent.saasPlatform.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-background border-2 border-primary/20 rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{t.packagesContent.enterprisePlatform.title}</h3>
                      <p className="text-muted-foreground">{t.packagesContent.enterprisePlatform.description}</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-3 text-sm">
                        {t.packagesContent.enterprisePlatform.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees and Benefits */}
            <div className="bg-muted/30 dark:bg-muted/10 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">{t.common.guaranteesBenefits}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{t.common.provenResults}</h4>
                  <p className="text-sm text-muted-foreground">{t.common.successfulDeliveries}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Database className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{t.common.costReduction}</h4>
                  <p className="text-sm text-muted-foreground">{t.common.typicalCloudSavings}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Bot className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{t.common.fasterDeployment}</h4>
                  <p className="text-sm text-muted-foreground">{t.common.deploymentSpeeds}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{t.common.uptime}</h4>
                  <p className="text-sm text-muted-foreground">{t.common.achievementTarget}</p>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  {t.contact.title}
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  {t.contact.subtitle}
                </p>
              </div>
              <ContactForm locale={locale} />
            </div>
          </div>
        </section>

        <Footer locale={locale} />
      </div>
    </>
  )
}
