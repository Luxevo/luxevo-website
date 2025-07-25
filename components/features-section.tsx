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
} from "@/components/feature-icons"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BotIcon />,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies for optimal performance and user experience.",
      accentColor: "rgba(36, 101, 237, 0.5)",
    },
    {
      icon: <SparklesIcon />,
      title: "SaaS Platforms",
      description: "Complete SaaS solutions with user management, billing, analytics, and scalable architecture for rapid growth.",
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      icon: <DatabaseIcon />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless backend integration.",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: <ShieldIcon />,
      title: "Automation Systems",
      description: "Intelligent automation solutions that streamline operations, reduce costs, and improve efficiency by 80%.",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <FileTextIcon />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture with AWS, Azure, or GCP, optimized for performance and cost efficiency.",
      accentColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      icon: <ServerIcon />,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines, monitoring, and infrastructure management for 99.9% uptime.",
      accentColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: <LockIcon />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance frameworks (PCI-DSS, HIPAA, SOC 2) for your industry.",
      accentColor: "rgba(251, 191, 36, 0.5)",
    },
    {
      icon: <ZapIcon />,
      title: "AI Integration",
      description: "Intelligent features, chatbots, and AI-powered automation to enhance user experience and operational efficiency.",
      accentColor: "rgba(16, 185, 129, 0.5)",
    },
  ]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="features" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-blue px-3 py-1 text-sm text-white mb-2">
              Key Features
            </div>
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Complete Technical Services
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              End-to-end development solutions for Quebec startups and scale-ups to build, scale, and automate their technology.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
