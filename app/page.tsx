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

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          <FramerSpotlight />
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">Full-Stack Development & Technical Solutions</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Build, Scale, and Automate Your Startup's Technology
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12">
                From web apps to mobile platforms, SaaS solutions to automation systems - we handle your complete technical journey with proven results and rapid delivery.
              </p>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-3 mt-16">
                <Button className="flex items-center gap-3 px-5 py-6 h-[60px] bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/20 to-brand-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  <Zap className="h-5 w-5 text-white relative z-10" />
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-[15px] font-medium">Start Your Project</span>
                    <span className="text-xs text-blue-100 -mt-0.5">Free consultation</span>
                  </div>
                </Button>
                <Button className="px-5 py-6 h-[60px] rounded-xl border-2 border-brand-orange bg-transparent hover:bg-brand-orange hover:text-white text-[15px] font-medium text-brand-orange transition-all duration-300">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works */}
        <section className="py-20" id="how-it-works" aria-labelledby="how-it-works-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Proven Development Process
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From concept to launch in 4-12 weeks with rapid iteration and continuous delivery.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Discovery & Planning (1-2 weeks)</h3>
                <p className="text-muted-foreground">
                  Requirements analysis, technical architecture design, and project roadmap creation with detailed specifications and timeline.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Development & Testing (3-10 weeks)</h3>
                <p className="text-muted-foreground">
                  Agile development with weekly demos, automated testing, CI/CD pipelines, and continuous feedback integration.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Launch & Support (Ongoing)</h3>
                <p className="text-muted-foreground">
                  Production deployment, monitoring setup, performance optimization, and ongoing maintenance with feature updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCases />

        {/* Partners & Clients */}
        <section className="py-20 bg-muted/30 dark:bg-muted/10" aria-labelledby="partners-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-orange px-3 py-1 text-sm text-white mb-2">
                  Partners & Clients
                </div>
                <h2 id="partners-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trusted by Leading Companies
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We've partnered with innovative companies across Quebec and beyond to deliver exceptional technical solutions.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-8"
                animate={{ x: [0, -1200] }}
                transition={{ 
                  duration: 15, 
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
                        src="/clients-logo/upgr8.png" 
                        alt="UPGR8 Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">UPGR8</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      SaaS Platform
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
                        src="/clients-logo/gosholo.png" 
                        alt="Gosholo Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Gosholo</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Mobile App
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
                        src="/clients-logo/morduSport.png" 
                        alt="Mordu Sport Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Mordu Sport</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Mobile App
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
                        src="/clients-logo/webnique.png" 
                        alt="Webnique Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Webnique</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Web Agency
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
                        src="/clients-logo/welpco.png" 
                        alt="WELPCO Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">WELPCO</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      SaaS Platform
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
                        src="/clients-logo/upgr8.png" 
                        alt="UPGR8 Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">UPGR8</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      SaaS Platform
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
                        src="/clients-logo/gosholo.png" 
                        alt="Gosholo Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Gosholo</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Mobile App
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
                        src="/clients-logo/morduSport.png" 
                        alt="Mordu Sport Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Mordu Sport</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Mobile App
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
                        src="/clients-logo/webnique.png" 
                        alt="Webnique Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">Webnique</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Web Agency
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
                        src="/clients-logo/welpco.png" 
                        alt="WELPCO Logo" 
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center">WELPCO</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      SaaS Platform
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Partnership Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Partnership</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Service Packages Section */}
        <section id="packages" className="py-20 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-muted/20" aria-labelledby="packages-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-blue px-3 py-1 text-sm text-white mb-2">
                  Services
                </div>
                <h2 id="packages-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Development Solutions
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive technical solutions for Quebec startups and scale-ups at every growth stage.
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
                      <h3 className="text-2xl font-bold mb-2">MVP Development</h3>
                      <p className="text-muted-foreground">Early-stage startups</p>
                      <p className="text-sm text-muted-foreground">≤10 developers</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Web app or mobile MVP</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Basic automation setup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Cloud infrastructure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Security & compliance</span>
                        </li>
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
                    <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-6 pt-4">
                      <h3 className="text-2xl font-bold mb-2">SaaS Platform</h3>
                      <p className="text-muted-foreground">Growing startups</p>
                      <p className="text-sm text-muted-foreground">10-50 developers</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Everything in MVP</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Full SaaS platform</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Advanced automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Mobile app companion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Analytics & monitoring</span>
                        </li>
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
                      <h3 className="text-2xl font-bold mb-2">Enterprise Platform</h3>
                      <p className="text-muted-foreground">Scale-ups</p>
                      <p className="text-sm text-muted-foreground">50+ developers</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Everything in SaaS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Multi-platform ecosystem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Advanced AI automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>24/7 monitoring & support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Custom integrations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees and Benefits */}
            <div className="bg-muted/30 dark:bg-muted/10 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Our Guarantees & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">5x ROI Guarantee</h4>
                  <p className="text-sm text-muted-foreground">Or full refund</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Database className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">40-70% Cost Reduction</h4>
                  <p className="text-sm text-muted-foreground">Typical cloud savings</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Bot className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">10-15x Faster</h4>
                  <p className="text-sm text-muted-foreground">Deployment speeds</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">99.9% Uptime</h4>
                  <p className="text-sm text-muted-foreground">Achievement target</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Start Your Development Journey</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Begin with our comprehensive technical consultation to identify opportunities and create your development roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="text-muted-foreground">Free consultation with project roadmap</div>
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
                  Start Your Project
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Ready to build your next big thing? Contact us to discuss your project and get a free consultation.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
