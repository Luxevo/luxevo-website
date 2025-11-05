"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useTranslations } from "@/lib/i18n"
import { useLocale } from "@/lib/locale-context"
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function About() {
  const { locale } = useLocale()
  const t = useTranslations(locale)

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-brand-orange text-white">
                  {t.about.badge}
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-boldonse mb-6">
                  {t.about.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {t.about.subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/60 dark:bg-muted/15">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-boldonse mb-6">{t.about.mission.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {t.about.mission.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-8 w-8 text-brand-blue" />
                      <div>
                        <h3 className="font-medium mb-2">{t.about.mission.values.innovation.title}</h3>
                        <p className="text-muted-foreground">{t.about.mission.values.innovation.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-8 w-8 text-brand-blue" />
                      <div>
                        <h3 className="font-medium mb-2">{t.about.mission.values.collaboration.title}</h3>
                        <p className="text-muted-foreground">{t.about.mission.values.collaboration.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-8 w-8 text-brand-blue" />
                      <div>
                        <h3 className="font-medium mb-2">{t.about.mission.values.excellence.title}</h3>
                        <p className="text-muted-foreground">{t.about.mission.values.excellence.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 rounded-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-2">30+</div>
                        <div className="text-sm text-muted-foreground font-medium">{t.about.stats.projects}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-2">6</div>
                        <div className="text-sm text-muted-foreground font-medium">{t.about.stats.experience}</div>
                      </div>
                        <div className="text-center">
                          <div className="text-xl font-boldonse text-brand-blue mb-2">{t.about.stats.clients}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-boldonse text-brand-blue mb-2">{t.about.stats.support}</div>
                        </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Hidden for now */}
        {/* 
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-boldonse mb-4">{t.about.team.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t.about.team.subtitle}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.about.team.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full text-center">
                      <CardHeader>
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-brand-blue">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription className="text-brand-blue font-medium">
                          {member.role}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">
                          {member.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {member.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-boldonse mb-4">{t.about.cta.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t.about.cta.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
                    <Link href={`/#contact?lang=${locale}`}>
                      {t.about.cta.contact}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href={`/#features?lang=${locale}`}>
                      {t.about.cta.services}
                    </Link>
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
