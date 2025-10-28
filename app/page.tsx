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
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-gray-50 to-white">
          {/* Abstract Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Left abstract shape - Purple/Blue */}
            <div className="absolute -left-32 -top-32 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" style={{
              animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite'
            }}></div>
            <div className="absolute left-20 top-40 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-blue-400/20 rounded-full blur-2xl" style={{
              animation: 'bounce 3s ease-in-out infinite, drift 8s ease-in-out infinite'
            }}></div>
            
            {/* Right abstract shape - Orange to Purple */}
            <div className="absolute right-0 top-20 w-80 h-[600px] bg-gradient-to-b from-orange-400/25 via-pink-400/20 to-purple-500/25 rounded-full blur-3xl" style={{
              animation: 'float 5s ease-in-out infinite, rotate 10s linear infinite'
            }}></div>
            <div className="absolute right-20 top-60 w-48 h-48 bg-gradient-to-br from-orange-300/15 to-purple-400/15 rounded-full blur-2xl" style={{
              animation: 'bounce 2.5s ease-in-out infinite, drift 7s ease-in-out infinite'
            }}></div>
          </div>

          {/* Custom CSS animations */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              25% { transform: translateY(-20px) translateX(10px); }
              50% { transform: translateY(-10px) translateX(-15px); }
              75% { transform: translateY(-30px) translateX(5px); }
            }
            @keyframes drift {
              0%, 100% { transform: translateX(0px) translateY(0px); }
              33% { transform: translateX(30px) translateY(-15px); }
              66% { transform: translateX(-20px) translateY(20px); }
            }
            @keyframes rotate {
              0% { transform: rotate(0deg); }
              25% { transform: rotate(45deg); }
              50% { transform: rotate(25deg); }
              75% { transform: rotate(50deg); }
              100% { transform: rotate(0deg); }
            }
          `}</style>

          <div className="container px-4 md:px-6 py-20 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Title with arrow */}
              <h1 className="text-[68px] mb-8 font-boldonse text-[#1A2234] text-center leading-tight">   
                  Le digital
                <br />
                est à <span className="italic">portée</span><br />
                de mains 
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 max-w-2xl mb-12 text-center">
                {t.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
                <Button asChild className="bg-[#1A2234] hover:bg-[#1A2234]/90 text-white px-8 py-4 rounded-xl text-lg font-medium">
                  <Link href="#contact">
                    {t.hero.startProject}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-[#1A2234] text-[#1A2234] hover:bg-[#1A2234] hover:text-white px-8 py-4 rounded-xl text-lg font-medium">
                  <Link href="/our-work">
                    {t.hero.viewWork}
                  </Link>
                </Button>
              </div>
            </div>
          </div>        
        </section>

        {/* Features Section */}
        <FeaturesSection locale={locale} />

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
