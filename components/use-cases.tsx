"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FrostedGlassIcon from "@/components/frosted-glass-icon"
import {
  BuildingIcon,
  GovernmentIcon,
  FinanceIcon,
  HealthcareIcon,
  LegalIcon,
  EducationIcon,
} from "@/components/use-case-icons"

import { useTranslations, type Locale } from "@/lib/i18n"

interface UseCasesProps {
  locale: Locale
}

export default function UseCases({ locale }: UseCasesProps) {
  const t = useTranslations(locale)
  const useCases = [
    {
      icon: <BuildingIcon />,
      title: t.specializations.items.startup.title,
      description: t.specializations.items.startup.description,
      accentColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      icon: <FinanceIcon />,
      title: t.specializations.items.saas.title,
      description: t.specializations.items.saas.description,
      accentColor: "rgba(245, 158, 11, 0.5)",
    },
    {
      icon: <LegalIcon />,
      title: t.specializations.items.enterprise.title,
      description: t.specializations.items.enterprise.description,
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
  ]

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-orange px-3 py-1 text-sm text-white mb-2">
              {t.specializations.badge}
            </div>
            <h2 className="text-3xl font-boldonse tracking-tighter sm:text-4xl md:text-5xl">{t.specializations.title}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t.specializations.subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-background/60 backdrop-blur-sm border transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <FrostedGlassIcon icon={useCase.icon} color={useCase.accentColor} className="mb-4" />
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
