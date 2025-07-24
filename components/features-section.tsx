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
      title: "Infrastructure Audit",
      description:
        "Comprehensive 15-day assessment of 150+ critical infrastructure points with detailed technical report and ROI calculations.",
      accentColor: "rgba(36, 101, 237, 0.5)",
    },
    {
      icon: <SparklesIcon />,
      title: "Cost Optimization",
      description: "Reduce cloud costs by 40-70% through intelligent resource management and architecture optimization.",
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      icon: <DatabaseIcon />,
      title: "CI/CD Automation",
      description: "Transform manual deployments from 4+ hours to 15 minutes with automated pipelines and testing.",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: <ShieldIcon />,
      title: "Security Hardening",
      description: "Implement enterprise-grade security measures and compliance frameworks for your industry.",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <FileTextIcon />,
      title: "Infrastructure as Code",
      description: "Implement scalable, version-controlled infrastructure with automated provisioning and management.",
      accentColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      icon: <ServerIcon />,
      title: "Monitoring & Alerting",
      description: "Set up comprehensive monitoring systems to achieve 99.9% uptime and reduce incidents by 80%.",
      accentColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: <LockIcon />,
      title: "Compliance Readiness",
      description: "Ensure PCI-DSS, HIPAA, SOC 2, and industry-specific compliance for funding and growth.",
      accentColor: "rgba(251, 191, 36, 0.5)",
    },
    {
      icon: <ZapIcon />,
      title: "Team Training",
      description: "Comprehensive knowledge transfer and hands-on training to ensure your team's autonomy and success.",
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
              Technical Infrastructure Services
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Proven solutions for Quebec startups and scale-ups to optimize, secure, and scale their technical infrastructure.
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
