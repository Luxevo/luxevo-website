"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    size: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError(result.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your consultation request has been received. Our technical team will contact you within 24 hours to discuss your project requirements and schedule your free consultation.
          </p>
          <Button onClick={() => {
            setIsSubmitted(false)
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              company: '',
              role: '',
              size: '',
              message: ''
            })
          }}>Submit Another Inquiry</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Start Your Project</CardTitle>
        <CardDescription>
          Get a free consultation to discuss your project requirements and receive a detailed development roadmap.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                placeholder="John" 
                required 
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Doe" 
                required 
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john.doe@company.com" 
              required 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+1 (514) 555-0123" 
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <p className="text-xs text-muted-foreground">For faster contact and consultation scheduling</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input 
              id="company" 
              placeholder="Acme Inc." 
              required 
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input 
              id="role" 
              placeholder="CTO, IT Director, etc." 
              required 
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Organization Size</Label>
            <Select value={formData.size} onValueChange={(value) => handleInputChange('size', value)}>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select organization size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 developers</SelectItem>
                <SelectItem value="10-50">10-50 developers</SelectItem>
                <SelectItem value="50+">50+ developers</SelectItem>
                <SelectItem value="series-a">Series A/B stage</SelectItem>
                <SelectItem value="pre-series">Pre-Series A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your project idea, current challenges, tech requirements, and business goals..." 
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Free Consultation"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
