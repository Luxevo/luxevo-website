import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "They built our entire SaaS platform from scratch in 8 weeks. The user experience is incredible, and our customer onboarding is now 90% automated. Game changer for our business.",
      name: "Sarah Chen",
      title: "CTO, FinTech Startup",
      avatar: "SC",
    },
    {
      quote:
        "The team delivered our mobile app and backend infrastructure on time and under budget. Their healthcare compliance expertise was crucial for our Series A funding.",
      name: "Michael Dubois",
      title: "VP Engineering, HealthTech Scale-up",
      avatar: "MD",
    },
    {
      quote:
        "From concept to launch in 6 weeks. Their automation systems reduced our operational costs by 60% and improved customer satisfaction by 40%. Outstanding results.",
      name: "David Rodriguez",
      title: "Head of Product, E-commerce Platform",
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
              See what our clients say about their development and automation results.
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
