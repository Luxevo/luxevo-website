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
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">Technical Infrastructure Consulting</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Transform Your Startup's Technical Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12">
                Reduce cloud costs by 40-70%, accelerate deployments by 10x, and achieve 99.9% uptime with our proven 15-day audit and transformation process.
              </p>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-3 mt-16">
                <Button className="flex items-center gap-3 px-5 py-6 h-[60px] bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/20 to-brand-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  <Zap className="h-5 w-5 text-white relative z-10" />
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-[15px] font-medium">Get Your Audit</span>
                    <span className="text-xs text-blue-100 -mt-0.5">15-day assessment</span>
                  </div>
                </Button>
                <Button className="px-5 py-6 h-[60px] rounded-xl border-2 border-brand-orange bg-transparent hover:bg-brand-orange hover:text-white text-[15px] font-medium text-brand-orange transition-all duration-300">
                  View Case Studies
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
                  Our Proven 3-Phase Process
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From comprehensive audit to full transformation in 60-90 days.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Comprehensive Audit (15 days)</h3>
                <p className="text-muted-foreground">
                  Analyze 150+ critical infrastructure points, security assessment, and cost optimization analysis with detailed technical report.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Transformation (30-90 days)</h3>
                <p className="text-muted-foreground">
                  Implement Infrastructure as Code, CI/CD automation, monitoring setup, and security hardening with team training.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Knowledge Transfer (30 days)</h3>
                <p className="text-muted-foreground">
                  Complete documentation, hands-on team training, process implementation, and ongoing support setup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCases />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact/Pricing Section */}
        <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Transformation Packages
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Tailored solutions for Quebec startups and scale-ups at every growth stage.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg">Starter Package - $50K CAD</h3>
                    <p className="text-muted-foreground">Early-stage startups ≤10 developers</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg">Growth Package - $120K CAD</h3>
                    <p className="text-muted-foreground">Growing startups 10-50 developers</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg">Enterprise Package - $250K CAD</h3>
                    <p className="text-muted-foreground">Scale-ups 50+ developers</p>
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>5x minimum ROI guarantee or full refund</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>40-70% cloud cost reduction typical</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <span>10-15x faster deployment speeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>99.9% uptime achievement</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-medium">
                    Start with our 15-day Technical Infrastructure Audit ($15K-25K CAD)
                  </p>
                </div>
              </div>
              <div className="lg:ml-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
