"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Globe, Smartphone, Database, Zap } from 'lucide-react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations, defaultLocale, type Locale } from "@/lib/i18n"

export default function OurWork() {
  const [locale, setLocale] = React.useState<Locale>(defaultLocale)
  const t = useTranslations(locale)

  const projects = [
    {
      id: 1,
      title: "Desjardins - Enterprise Solution",
      description: "Enterprise-grade financial platform with advanced security, compliance, and automation features.",
      image: "/clients-logo/desjardins-logo.png",
      category: "Enterprise",
      technologies: ["React", "Java Spring", "Oracle", "Kubernetes", "Azure"],
      features: ["Security Compliance", "Workflow Automation", "Data Analytics", "Multi-tenancy"],
      link: "#",
      github: "#",
      color: "bg-green-600",
      stats: {
        transactions: "1M+",
        security: "SOC 2",
        compliance: "PCI DSS"
      }
    },
    {
      id: 2,
      title: "Radio-Canada - Digital Platform",
      description: "Comprehensive digital media platform with content management, streaming, and audience analytics.",
      image: "/clients-logo/radio-canada-logo.png",
      category: "Enterprise",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      features: ["Content Management", "Live Streaming", "Analytics Dashboard", "Multi-platform"],
      link: "#",
      github: "#",
      color: "bg-red-600",
      stats: {
        viewers: "2M+",
        content: "10K+",
        uptime: "99.9%"
      }
    },
    {
      id: 3,
      title: "UPGR8 - Hockey Management Platform",
      description: "Comprehensive hockey management platform for coaches and players, featuring camp management, tryouts, regular season tracking, team management, and player evaluations.",
      image: "/clients-logo/upgr8-logo.png",
      category: "SaaS Platform",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "AWS"],
      features: ["Camp Management", "Tryout Organization", "Season Tracking", "Player Evaluations"],
      link: "#",
      github: "#",
      color: "bg-blue-500",
      stats: {
        coaches: "500+",
        players: "10K+",
        teams: "200+"
      }
    },
    {
      id: 4,
      title: "Gosholo - Mobile App",
      description: "AI-powered food delivery app with OCR receipt scanning, geolocation services, and intelligent food recommendations based on restaurant popularity.",
      image: "/clients-logo/gosholo-logo.png",
      category: "Mobile App",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe"],
      features: ["OCR Receipt Scanning", "AI Food Recommendations", "Geolocation Services", "Real-time Tracking"],
      link: "#",
      github: "#",
      color: "bg-green-500",
      stats: {
        downloads: "50K+",
        orders: "100K+",
        accuracy: "92%"
      }
    },
    {
      id: 5,
      title: "Gosholo - Business Dashboard",
      description: "AI-powered restaurant management platform with offer/event publishing, intelligent marketing insights, and predictive analytics to maximize customer attraction.",
      image: "/clients-logo/gosholo-logo.png",
      category: "SaaS Platform",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      features: ["AI Marketing Insights", "Offer/Event Publishing", "Predictive Analytics", "Customer Attraction Tools"],
      link: "#",
      github: "#",
      color: "bg-green-600",
      stats: {
        restaurants: "500+",
        offers: "2K+",
        conversion: "+45%"
      }
    },
    {
      id: 6,
      title: "WELPCO - Freelance Marketplace",
      description: "SaaS marketplace platform connecting freelancers with clients, featuring project management, payment processing, and talent matching.",
      image: "/clients-logo/welpco-logo.png",
      category: "SaaS Platform",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: ["Talent Matching", "Project Management", "Payment Processing", "Review System"],
      link: "#",
      github: "#",
      color: "bg-blue-600",
      stats: {
        freelancers: "5K+",
        projects: "10K+",
        revenue: "$2M+"
      }
    },
    {
      id: 7,
      title: "Mordu Sport - Sports Betting Platform",
      description: "AI-powered sports betting platform with live chat, intelligent betting proposals, and real-time odds analysis.",
      image: "/clients-logo/mordu-sport-logo.png",
      category: "SaaS Platform",
      technologies: ["React Native", "Python", "PostgreSQL", "Redis", "AWS"],
      features: ["AI Betting Proposals", "Live Chat", "Real-time Odds", "Betting Analytics"],
      link: "#",
      github: "#",
      color: "bg-orange-500",
      stats: {
        users: "25K+",
        bets: "500K+",
        accuracy: "78%"
      }
    },
    {
      id: 8,
      title: "Webnique - Agency Platform",
      description: "Complete agency management platform for client projects, time tracking, and invoicing.",
      image: "/clients-logo/webnique-logo.png",
      category: "Web Agency",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "DigitalOcean"],
      features: ["Project Management", "Time Tracking", "Client Portal", "Automated Invoicing"],
      link: "#",
      github: "#",
      color: "bg-purple-500",
      stats: {
        projects: "200+",
        clients: "50+",
        efficiency: "+40%"
      }
    }
  ]

  const categories = ["All", "SaaS Platform", "Mobile App", "Enterprise", "Web Agency", "E-commerce"]

  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      
      <div className="min-h-screen bg-background">
        {/* Sticky Construction Banner */}
        <div className="sticky top-16 z-40 bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 text-white py-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">🚧 Portfolio in Development</span>
              </div>
              <span className="text-sm">|</span>
              <span className="text-sm">sample data - Full details coming soon!</span>
            </motion.div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4">
                  Our Portfolio
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                  Transforming Ideas Into
                  <span className="text-primary"> Digital Reality</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how we've helped startups and enterprises build scalable, innovative solutions that drive real business results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={120}
                        height={120}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${project.color}`}></div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <Badge variant="outline" className="mb-3">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                                         <CardContent className="space-y-4">
                       {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4">
                        <Button size="sm" className="flex-1" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Build Your Next Project?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss your ideas and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/#contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/#contact">
                      Get Free Consultation
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer locale={locale} />
      </div>
    </>
  )
} 