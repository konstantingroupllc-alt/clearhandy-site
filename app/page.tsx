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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="ClearHandy" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="tel:+17272223122" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">(727) 222-3122</a>
              <Button asChild>
                <a href="#contact">Get a Free Estimate</a>
              </Button>
            </nav>

            {/* Mobile - phone + compact CTA */}
            <div className="flex md:hidden items-center gap-2">
              <a href="tel:+17272223122" className="text-sm font-bold text-foreground">(727) 222-3122</a>
              <Button asChild size="sm" className="text-xs px-3">
                <a href="#contact">Free Estimate</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary p-3 flex gap-2">
        <a href="tel:+17272223122" className="flex-1 bg-white text-primary font-bold text-center py-3 rounded-lg text-sm">
          📞 Call Now
        </a>
        <a href="#contact" className="flex-1 bg-primary-foreground/20 text-white font-bold text-center py-3 rounded-lg text-sm border border-white/30">
          Get Free Estimate
        </a>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row lg:h-[calc(100vh-56px)] overflow-hidden pb-20 md:pb-0" style={{background: "linear-gradient(135deg, #f5f0eb 0%, #ede8e1 50%, #e8e2d9 100%)"}}>

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 py-8">

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Fix It Right the First Time
            <span className="block lg:whitespace-nowrap">No Delays. No Headaches.</span>
          </h1>
          <p className="mt-3 text-base md:text-xl lg:text-2xl text-muted-foreground">
            Fast. Clean. Reliable.
          </p>

          {/* Mobile: checkmarks left, photo right */}
          <div className="mt-4 flex flex-row lg:block gap-4">
            <div className="flex flex-col gap-2 text-sm text-foreground font-medium flex-1 justify-center">
              <span>✔ Same-day response</span>
              <span>✔ On-time arrival</span>
              <span>✔ No hidden fees</span>
            </div>
            {/* Mobile photo - right of checkmarks, fixed height */}
            <div className="block lg:hidden flex-shrink-0" style={{width: '140px', height: '180px', overflow: 'hidden'}}>
              <img
                src="/ClearHandy.png"
                alt="Professional handyman"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>

          {/* Desktop only button + phone */}
          <div className="hidden md:flex mt-8 flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <a href="#contact">Get a Free Estimate</a>
            </Button>
          </div>
          <p className="hidden md:block mt-4 text-base font-bold text-foreground">
            📞 <a href="tel:+17272223122" className="hover:underline">(727) 222-3122</a>
          </p>
          <p className="hidden md:block mt-1 text-sm text-muted-foreground">
            Serving Clearwater, Tampa & nearby areas
          </p>

          {/* Mobile only - phone below checkmarks */}
          <p className="block md:hidden mt-4 text-sm text-muted-foreground">
            Serving Clearwater, Tampa & nearby areas
          </p>
        </div>

        {/* Right Side - Desktop only */}
        <div className="hidden lg:flex lg:w-[55%] items-end justify-center overflow-hidden">
          <img
            src="/ClearHandy.png"
            alt="Professional handyman services"
            className="w-auto max-h-[calc(100vh-64px)] object-contain object-bottom"
          />
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
