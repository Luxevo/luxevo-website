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
import { useTranslations, type Locale } from "@/lib/i18n"

interface ContactFormProps {
  locale?: Locale
}

export default function ContactForm({ locale = 'en' }: ContactFormProps) {
  const t = useTranslations(locale)
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
          <h3 className="text-2xl font-boldonse mb-2">{t.common.thankYou}</h3>
          <p className="text-muted-foreground mb-6">
            {t.common.consultationReceived}
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
          }}>{t.common.submitAnotherInquiry}</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.common.startYourProject}</CardTitle>
        <CardDescription>
          {t.common.getFreeConsultation}
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
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label htmlFor="firstName">{t.common.firstName}</Label>
               <Input 
                 id="firstName" 
                 placeholder="John" 
                 required 
                 value={formData.firstName}
                 onChange={(e) => handleInputChange('firstName', e.target.value)}
               />
             </div>
             <div className="space-y-2">
               <Label htmlFor="lastName">{t.common.lastName}</Label>
               <Input 
                 id="lastName" 
                 placeholder="Doe" 
                 required 
                 value={formData.lastName}
                 onChange={(e) => handleInputChange('lastName', e.target.value)}
               />
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label htmlFor="email">{t.common.workEmail}</Label>
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
               <Label htmlFor="phone">{t.common.phoneNumber}</Label>
               <Input 
                 id="phone" 
                 type="tel" 
                 placeholder="+1 (514) 555-0123" 
                 value={formData.phone}
                 onChange={(e) => handleInputChange('phone', e.target.value)}
               />
               <p className="text-xs text-muted-foreground">{t.common.fasterContact}</p>
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label htmlFor="company">{t.common.company}</Label>
               <Input 
                 id="company" 
                 placeholder="Acme Inc." 
                 required 
                 value={formData.company}
                 onChange={(e) => handleInputChange('company', e.target.value)}
               />
             </div>
             <div className="space-y-2">
               <Label htmlFor="role">{t.common.yourRole}</Label>
               <Input 
                 id="role" 
                 placeholder="CTO, IT Director, etc." 
                 required 
                 value={formData.role}
                 onChange={(e) => handleInputChange('role', e.target.value)}
               />
             </div>
           </div>
          <div className="space-y-2">
            <Label htmlFor="size">{t.common.organizationSize}</Label>
            <Select value={formData.size} onValueChange={(value) => handleInputChange('size', value)}>
              <SelectTrigger id="size">
                <SelectValue placeholder={t.common.selectOrgSize} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">{t.common.oneToTen}</SelectItem>
                <SelectItem value="10-50">{t.common.tenToFifty}</SelectItem>
                <SelectItem value="50+">{t.common.fiftyPlus}</SelectItem>
                <SelectItem value="series-a">{t.common.seriesAB}</SelectItem>
                <SelectItem value="pre-series">{t.common.preSeriesA}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t.common.howCanWeHelp}</Label>
            <Textarea 
              id="message" 
              placeholder={t.common.projectPlaceholder}
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white" disabled={isSubmitting}>
            {isSubmitting ? t.common.submitting : t.common.requestFreeConsultation}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            {t.common.agreementText}
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
