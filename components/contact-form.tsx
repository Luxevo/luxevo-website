"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your audit request has been received. Our technical team will contact you within 24 hours to discuss your infrastructure challenges and schedule your comprehensive assessment.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Inquiry</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Your Infrastructure Audit</CardTitle>
        <CardDescription>
          Start with our 15-day comprehensive audit to identify optimization opportunities and transformation roadmap.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input id="email" type="email" placeholder="john.doe@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" placeholder="Acme Inc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input id="role" placeholder="CTO, IT Director, etc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Organization Size</Label>
            <Select>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select organization size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 developers (Starter)</SelectItem>
                <SelectItem value="10-50">10-50 developers (Growth)</SelectItem>
                <SelectItem value="50+">50+ developers (Enterprise)</SelectItem>
                <SelectItem value="series-a">Series A/B stage</SelectItem>
                <SelectItem value="pre-series">Pre-Series A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" placeholder="Tell us about your current infrastructure challenges, tech stack, and growth goals..." rows={4} />
          </div>
          <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Infrastructure Audit"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
