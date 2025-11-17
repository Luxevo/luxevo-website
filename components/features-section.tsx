"use client"

import { useState, useEffect } from "react"
import FeatureCard from "@/components/feature-card"
import {
  BotIcon,
  SparklesIcon,
  DatabaseIcon,
  ShieldIcon,
  FileTextIcon,
  ServerIcon,
  LockIcon,
  ZapIcon,
  ShopIcon,
  PhoneIcon,
  DesignIcon,
  BrandIcon,
} from "@/components/feature-icons"
import { useTranslations, type Locale } from "@/lib/i18n"

interface FeaturesSectionProps {
  locale: Locale
}

export default function FeaturesSection({ locale }: FeaturesSectionProps) {
  const t = useTranslations(locale)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      if (e instanceof MouseEvent) {
        const section = document.getElementById('features')
        if (section) {
          const rect = section.getBoundingClientRect()
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          })
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleMouseMove) // Recalculate on scroll too
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleMouseMove)
    }
  }, [])

  const features = [
    {
      icon: <ZapIcon />,
      title: t.featuresContent.webDevelopment.title,
      description: t.featuresContent.webDevelopment.description,
      accentColor: "rgba(36, 101, 237, 0.5)",
    },
    {
      icon: <SparklesIcon />,
      title: t.featuresContent.saasPlatforms.title,
      description: t.featuresContent.saasPlatforms.description,
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      icon: <PhoneIcon />,
      title: t.featuresContent.mobileApps.title,
      description: t.featuresContent.mobileApps.description,
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: <ShieldIcon />,
      title: t.featuresContent.automationSystems.title,
      description: t.featuresContent.automationSystems.description,
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <ShopIcon />,
      title: t.featuresContent.ecommercePlatform.title,
      description: t.featuresContent.ecommercePlatform.description,
      accentColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      icon: <DesignIcon />,
      title: t.featuresContent.uxuiDesign.title,
      description: t.featuresContent.uxuiDesign.description,
      accentColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: <BrandIcon />,
      title: t.featuresContent.brandIdentity.title,
      description: t.featuresContent.brandIdentity.description,
      accentColor: "rgba(255, 107, 107, 0.5)",
    },
    {
      icon: <BotIcon />,
      title: t.featuresContent.aiIntegration.title,
      description: t.featuresContent.aiIntegration.description,
      accentColor: "rgba(16, 185, 129, 0.5)",
    },
  ]

  return (
    <section 
      className="relative py-20 overflow-hidden bg-muted/60 rounded-t-[3rem]" 
      id="features" 
      aria-labelledby="features-heading"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1), transparent 40%)`,
          opacity: isHovering ? 1 : 0.3
        }}
      />


      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-blue px-3 py-1 text-sm text-white mb-2">
              {t.features.badge}
            </div>
            <h2 id="features-heading" className="text-2xl font-boldonse tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl px-4">
              {t.features.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t.features.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}