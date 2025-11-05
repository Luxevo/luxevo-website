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
import { useTranslations } from "@/lib/i18n"
import { useLocale } from "@/lib/locale-context"
import Link from "next/link"

export default function Home() {
  const { locale } = useLocale()
  const t = useTranslations(locale)

  return (

    <>
            <Navbar />

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
              <h1 className="text-[68px] mb-8 font-boldonse text-[#1A2234] text-center leading-tight whitespace-pre-line">   
                {t.hero.title}
              </h1>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
                <Button asChild className="bg-[#1A2234] hover:bg-[#1A2234]/90 text-white px-8 py-4 rounded-xl text-lg font-medium">
                  <Link href="#contact">
                    {t.hero.startProject}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-[#1A2234] text-[#1A2234] hover:bg-[#1A2234] hover:text-white px-8 py-4 rounded-xl text-lg font-medium">
                  <Link href="#features">
                    {t.hero.viewWork}
                  </Link>
                </Button>
              </div>
            </div>
          </div>        
        </section>

         {/* Features Section */}
         <FeaturesSection locale={locale} />

         {/* Trusted Companies Section */}
         <section className="py-20 bg-muted/60 dark:bg-muted/15 relative">
           <div className="container px-4 md:px-6">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-boldonse tracking-tighter sm:text-4xl md:text-5xl mb-4">
                 {t.trustedCompanies.title}
               </h2>
               <p className="text-muted-foreground md:text-xl ">
                 {t.trustedCompanies.subtitle}
               </p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center relative">
              {/* UPGR8 */}
              <div className="flex items-center justify-center h-28 w-44">
                <Image 
                  width={160}
                  height={80}
                  src="/clients-logo/upgr8-logo.png" 
                  alt="UPGR8 Logo" 
                  className="object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
               
              {/* Gosholo */}
              <div className="flex items-center justify-center h-28 w-44">
                <Image 
                  width={160}
                  height={80}
                  src="/clients-logo/gosholo-logo.png" 
                  alt="Gosholo Logo" 
                  className="object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
               
              {/* Prestige Media */}
              <div className="flex items-center justify-center h-28 w-44">
                <Image 
                  width={160}
                  height={80}
                  src="/Logo_prestige-media.png" 
                  alt="Prestige Media Logo" 
                  className="object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
               
               {/* Mordu Sport */}
               <div className="flex items-center justify-center h-20 w-32">
                 <Image 
                   width={120}
                   height={60}
                   src="/clients-logo/mordu-sport-logo.png" 
                   alt="Mordu Sport Logo" 
                   className="object-contain transition-all duration-300 hover:scale-105"
                 />
               </div>
               
               {/* Heritage Chiropractice */}
               <div className="flex items-center justify-center h-20 w-32">
                 <Image 
                   width={120}
                   height={60}
                   src="/logoheritage.png" 
                   alt="Heritage Chiropractice Logo" 
                   className="object-contain transition-all duration-300 hover:scale-105"
                 />
               </div>

               {/* Desjardins */}
               <div className="flex items-center justify-center h-20 w-32">
                 <Image 
                   width={120}
                   height={60}
                   src="/clients-logo/desjardins-logo.png" 
                   alt="Desjardins Logo" 
                   className="object-contain transition-all duration-300 hover:scale-105"
                 />
               </div>
               
               {/* Radio Canada */}
               <div className="flex items-center justify-center h-20 w-32">
                 <Image 
                   width={120}
                   height={60}
                   src="/clients-logo/radio-canada-logo.png" 
                   alt="Radio Canada Logo" 
                   className="object-contain transition-all duration-300 hover:scale-105"
                 />
               </div>
               
               {/* FMM */}
               <div className="flex items-center justify-center h-20 w-32">
                 <Image 
                   width={120}
                   height={60}
                   src="/fmm.png" 
                   alt="FMM Logo" 
                   className="object-contain transition-all duration-300 hover:scale-105"
                 />
               </div>
             </div>
             
             {/* Fade effect to white at bottom */}
             <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
           </div>
         </section>

        {/* Testimonials */}
        <Testimonials locale={locale} />

        {/* Service Packages Section */}
        <section id="packages" className="py-20 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-muted/20" aria-labelledby="packages-heading">
          <div className="container px-4 md:px-6">


          


          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pb-20 bg-muted/50 dark:bg-muted/10" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="contact-heading" className="text-3xl font-boldonse tracking-tighter sm:text-4xl md:text-5xl mb-4">
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
