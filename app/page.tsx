"use client"

import { useState } from "react"
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

const benefits = [
  "3+ years of construction experience",
  "Clean work, respect for your home",
  "Clear scope agreed before work begins",
  "Transparent pricing — no surprises",
]

const featureItems = [
  {
    title: "Fully Insured",
    desc: "Your property is protected with full insurance coverage.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Clean & Respectful",
    desc: "We keep the workspace clean and treat your home like our own.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
        />
      </svg>
    ),
  },
  {
    title: "Clear & Agreed",
    desc: "All steps and scope are agreed before work begins.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
        />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Fair, upfront pricing with no hidden fees or surprises.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectDescription: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you! We will contact you soon for your free estimate.")
    setFormData({ name: "", phone: "", email: "", projectDescription: "" })
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 h-20 border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="ClearHandy" className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#services" className="text-[15px] font-medium text-gray-700 transition-colors hover:text-gray-900">
              Services
            </a>
            <a href="#about" className="text-[15px] font-medium text-gray-700 transition-colors hover:text-gray-900">
              About
            </a>
            <a href="#contact" className="text-[15px] font-medium text-gray-700 transition-colors hover:text-gray-900">
              Contact
            </a>

            <a
              href="tel:+17272223122"
              className="flex items-center gap-2 text-[15px] font-semibold text-gray-900 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              (727) 222-3122
            </a>

            <Button asChild className="h-12 px-6 text-[15px] font-semibold">
              <a href="#contact">Get a Free Estimate</a>
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button asChild size="sm">
              <a href="#contact">Estimate</a>
            </Button>
            <a href="tel:+17272223122" className="rounded-md p-2">
              <Phone className="h-5 w-5 text-gray-900" />
            </a>
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 bg-primary p-3 md:hidden">
        <a
          href="tel:+17272223122"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-primary"
        >
          <Phone className="h-4 w-4" />
          Call (727) 222-3122
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/20 py-3 text-sm font-bold text-white"
        >
          Get Estimate
        </a>
      </div>

      <section className="relative flex h-[calc(100vh-80px)] max-h-[820px] flex-col overflow-hidden">
        {/* FULL WIDTH background */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="Home interior"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* soft overlay to mute full background */}
        <div className="absolute inset-0 bg-[#eae3da]/70" />

        {/* lighter left reading panel */}
        <div className="absolute inset-y-0 left-0 hidden w-[43%] bg-[#f4f2ef]/92 lg:block" />

        {/* soft blend to center */}
        <div className="absolute inset-y-0 left-[35%] hidden w-[22%] bg-gradient-to-r from-[#f4f2ef]/92 via-[#f4f2ef]/45 to-transparent lg:block" />

        <div className="relative z-10 flex-1">
          <div className="mx-auto grid h-full max-w-[1400px] grid-cols-1 px-6 lg:grid-cols-[42%_58%]">
            <div className="flex items-center py-6 lg:py-2">
              <div className="max-w-[520px]">
                <h1 className="text-[42px] font-bold leading-[0.98] tracking-[-0.03em] text-[#081a38] lg:text-[58px] xl:text-[66px]">
                  Fix It Right
                  <br />
                  the First Time
                </h1>

                <p className="mt-3 text-[24px] font-semibold text-[#10254b]">
                  No Delays. No Headaches.
                </p>

                <p className="mt-4 text-[16px] text-gray-600">
                  Fully insured &nbsp;•&nbsp; Clean work &nbsp;•&nbsp; Fair pricing
                </p>

                <div className="mt-5 space-y-2.5">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                        <svg
                          className="h-3.5 w-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[16px] font-medium text-[#1a2d4d]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[24px] text-[#f5b400]">★★★★★</span>
                    <span className="text-[16px] font-semibold text-[#243a5f]">
                      5.0 rating from local clients
                    </span>
                  </div>
                  <p className="text-[14px] text-gray-600">
                    Trusted by homeowners across Tampa Bay
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 px-6 text-[16px] font-semibold shadow-md">
                    <a href="#contact">Get a Free Estimate</a>
                  </Button>

                  <a
                    href="tel:+17272223122"
                    className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 text-[16px] font-semibold text-[#243a5f] transition-colors hover:border-primary hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    (727) 222-3122
                  </a>
                </div>

                <p className="mt-4 flex items-center gap-2 text-[14px] text-gray-600">
                  <MapPin className="h-4 w-4" />
                  Serving Clearwater, Tampa & nearby areas
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="/ClearHandy.png"
                alt="Professional handyman"
                className="absolute bottom-0 right-2 max-h-[74vh] w-auto object-contain object-bottom drop-shadow-2xl xl:right-6"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-gray-200 bg-[#f7f4f0]" id="about">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid grid-cols-1 gap-6 py-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
              {featureItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 xl:px-8 ${i !== 0 ? "xl:border-l xl:border-gray-200" : ""}`}
                >
                  <div className="mt-1 flex-shrink-0 text-primary">{item.icon}</div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#0d2142]">{item.title}</h3>
                    <p className="mt-1.5 max-w-[240px] text-[14px] leading-6 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From small repairs to complete home improvements, we handle it all with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="group overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-card py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Contact Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Ready to start your project? Get in touch for a free estimate.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+17272223122" className="text-muted-foreground transition-colors hover:text-primary">
                      (727) 222-3122
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:konst@clearhandy.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      konst@clearhandy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
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

              <div className="h-[300px] overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112841.65657196096!2d-82.84739585!3d27.96579045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f0a864f2e337%3A0xab41ee576c9bb8eb!2sClearwater%2C%20FL!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clearwater, FL"
                />
              </div>
            </div>

            <Card className="p-6 md:p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Get a Free Estimate</h3>
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

      <footer className="bg-foreground py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold">Konstantin Group LLC</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                Professional handyman services for all your home repair and improvement needs.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contact Info</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+17272223122" className="transition-colors hover:text-primary-foreground">
                    (727) 222-3122
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:konst@clearhandy.com"
                    className="transition-colors hover:text-primary-foreground"
                  >
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
              <h4 className="mb-4 font-semibold">Service Area</h4>
              <p className="text-sm text-primary-foreground/80">
                Serving Clearwater, St. Petersburg, Tampa and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2026 Konstantin Group LLC. All rights reserved. ClearHandy is a trade name of Konstantin Group LLC.</p>
            <p className="mt-2">
              <a href="/privacy" className="transition-colors hover:text-primary-foreground">
                Privacy Policy
              </a>
              <span className="mx-3">|</span>
              <a href="/terms" className="transition-colors hover:text-primary-foreground">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
