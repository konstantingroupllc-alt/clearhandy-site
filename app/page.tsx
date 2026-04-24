"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Wrench,
  Package,
  Tv,
  Lightbulb,
  Droplets,
  Blinds,
  Paintbrush,
  Home,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "General Repairs & Maintenance",
    description: "Keeping your home in top shape with reliable, professional repairs.",
    image: "/service-repairs.png",
  },
  {
    icon: Package,
    title: "Furniture & Equipment Assembly",
    description: "Quick and accurate assembly of any furniture or equipment.",
    image: "/service-assembly.png",
  },
  {
    icon: Tv,
    title: "TV & Media Mounting",
    description: "Secure mounting of TVs, soundbars, and wire concealment.",
    image: "/service-tv.png",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Electrical Fixtures",
    description: "Installation of ceiling fans, chandeliers, and light fixtures.",
    image: "/service-lighting.png",
  },
  {
    icon: Droplets,
    title: "Plumbing Fixtures & Kitchen",
    description: "Faucet, sink, toilet, and garbage disposal installation.",
    image: "/service-plumbing.png",
  },
  {
    icon: Blinds,
    title: "Window Treatments & Blinds",
    description: "Curtain rods, blinds, and window treatment installation.",
    image: "/service-blinds.png",
  },
  {
    icon: Paintbrush,
    title: "Painting & Drywall",
    description: "Interior painting and drywall repair.",
    image: "/service-painting.png",
  },
  {
    icon: Home,
    title: "Home Improvement & Installations",
    description: "Mailbox, washer/dryer, and general home installations.",
    image: "/service-home.png",
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectDescription: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We will contact you soon for your free estimate.")
    setFormData({ name: "", phone: "", email: "", projectDescription: "" })
  }

  return (
    <div className="min-h-screen">
      {/* Header - transparent over hero */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="ClearHandy" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="tel:+17272223122" className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> (727) 222-3122
              </a>
              <Button asChild>
                <a href="#contact">Get a Free Estimate</a>
              </Button>
            </nav>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <Button asChild size="sm">
                <a href="#contact">Get a Free Estimate</a>
              </Button>
              <a href="tel:+17272223122" className="p-2">
                <Phone className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex gap-2 p-3 bg-primary">
        <a href="tel:+17272223122" className="flex-1 flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 rounded-lg text-sm">
          <Phone className="h-4 w-4" /> Call (727) 222-3122
        </a>
        <a href="#contact" className="flex-1 flex items-center justify-center gap-2 bg-white/20 text-white font-bold py-3 rounded-lg text-sm border border-white/30">
          💬 Text Us
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 md:pb-0">
        {/* Background image - right side */}
        <div className="absolute right-0 top-0 w-full md:w-[58%] h-full">
          <img
            src="/hero-bg.png"
            alt="Home interior"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay on left edge to blend with text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f0ebe3] via-[#f0ebe3]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row min-h-[580px] items-center">

            {/* Left - Text */}
            <div className="w-full lg:w-[52%] py-12 lg:py-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Fix It Right<br />the First Time
              </h1>
              <p className="mt-2 text-xl md:text-2xl font-semibold text-gray-700">
                No Delays. No Headaches.
              </p>
              <p className="mt-3 text-sm md:text-base text-gray-500">
                Fully insured &nbsp;•&nbsp; Quality-focused work &nbsp;•&nbsp; Fair pricing
              </p>

              <div className="mt-5 flex flex-col gap-2">
                {[
                  "3+ years of construction experience",
                  "Clean work, respect for your home",
                  "All steps agreed on paper before we start",
                  "Transparent pricing — no surprises",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="text-sm font-semibold text-gray-700 ml-1">5.0 rating from local clients</span>
              </div>
              <p className="text-xs text-gray-500">Trusted by homeowners across Tampa Bay</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild className="text-base">
                  <a href="#contact">Get a Free Estimate</a>
                </Button>
                <a href="tel:+17272223122" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg text-base font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" /> (727) 222-3122
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Serving Clearwater, Tampa &amp; nearby areas
              </p>
            </div>

            {/* Right - Photo */}
            <div className="hidden lg:flex lg:w-[48%] justify-end items-end h-full">
              <img
                src="/ClearHandy.png"
                alt="Professional handyman"
                className="max-h-[560px] w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Icons block */}
      <section id="about" className="bg-[#f7f4f0] border-t border-gray-200 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                title: "Fully Insured",
                desc: "Your property is protected with full insurance coverage."
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
                title: "Clean & Respectful",
                desc: "We keep the workspace clean and treat your home like our own."
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
                title: "Clear & Agreed",
                desc: "All steps and scope are agreed on paper before we start."
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Transparent Pricing",
                desc: "Fair, upfront pricing with no hidden fees or surprises."
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="text-primary flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From small repairs to complete home improvements, we handle it all with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? Get in touch for a free estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+17272223122" className="text-muted-foreground hover:text-primary transition-colors">
                      (727) 222-3122
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:konst@clearhandy.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      konst@clearhandy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Clearwater, FL — serving the entire Tampa Bay Area
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden border border-border h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112841.65657196096!2d-82.84739585!3d27.96579045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f0a864f2e337%3A0xab41ee576c9bb8eb!2sClearwater%2C%20FL!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Konstantin Group LLC Location - Clearwater, FL"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get a Free Estimate</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="projectDescription">Project Description</FieldLabel>
                  <Textarea
                    id="projectDescription"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    required
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full">
                  Get a Free Estimate
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Konstantin Group LLC</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Professional handyman services for all your home repair and improvement needs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+17272223122" className="hover:text-primary-foreground transition-colors">
                    (727) 222-3122
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:konst@clearhandy.com" className="hover:text-primary-foreground transition-colors">
                    konst@clearhandy.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Clearwater, FL</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Area</h4>
              <p className="text-sm text-primary-foreground/80">
                Serving Clearwater, St. Petersburg, Tampa and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>© 2026 Konstantin Group LLC. All rights reserved. ClearHandy is a trade name of Konstantin Group LLC.</p>
            <p className="mt-2">
              <a href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <span className="mx-3">|</span>
              <a href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
