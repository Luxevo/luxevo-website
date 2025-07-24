import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Their infrastructure audit saved us $180K annually in cloud costs and reduced our deployment time from 4 hours to 15 minutes. The ROI was immediate and transformational.",
      name: "Sarah Chen",
      title: "CTO, FinTech Startup",
      avatar: "SC",
    },
    {
      quote:
        "The team's expertise in healthcare compliance was crucial for our Series A. They implemented HIPAA-compliant infrastructure that passed all investor security audits.",
      name: "Michael Dubois",
      title: "VP Engineering, HealthTech Scale-up",
      avatar: "MD",
    },
    {
      quote:
        "From constant production fires to 99.9% uptime in 60 days. Their monitoring and alerting setup transformed our operations and eliminated weekend emergencies.",
      name: "David Rodriguez",
      title: "Head of DevOps, FoodTech Company",
      avatar: "DR",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-blue px-3 py-1 text-sm text-white mb-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Quebec Startups
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See what our clients say about their infrastructure transformation results.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">"</div>
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
