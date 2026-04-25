"use client"

import { useState, useEffect } from "react"
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
} from "lucide-react"

const services = [
  { icon: Wrench, title: "General Repairs & Maintenance", description: "Keeping your home in top shape with reliable, professional repairs.", image: "/service-repairs.png" },
  { icon: Package, title: "Furniture & Equipment Assembly", description: "Quick and accurate assembly of any furniture or equipment.", image: "/service-assembly.png" },
  { icon: Tv, title: "TV & Media Mounting", description: "Secure mounting of TVs, soundbars, and wire concealment.", image: "/service-tv.png" },
  { icon: Lightbulb, title: "Lighting & Electrical Fixtures", description: "Installation of ceiling fans, chandeliers, and light fixtures.", image: "/service-lighting.png" },
  { icon: Droplets, title: "Plumbing Fixtures & Kitchen", description: "Faucet, sink, toilet, and garbage disposal installation.", image: "/service-plumbing.png" },
  { icon: Blinds, title: "Window Treatments & Blinds", description: "Curtain rods, blinds, and window treatment installation.", image: "/service-blinds.png" },
  { icon: Paintbrush, title: "Painting & Drywall", description: "Interior painting and drywall repair.", image: "/service-painting.png" },
  { icon: Home, title: "Home Improvement & Installations", description: "Mailbox, washer/dryer, and general home installations.", image: "/service-home.png" },
]

const mobileTrustItems = [
  {
    title: "3+ years of construction experience",
    desc: "Skilled in a wide range of repairs and installations.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Clean work, respect for your home",
    desc: "We keep the workspace clean and treat your home like our own.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "All steps agreed on paper before we start",
    desc: "Clear scope. No changes, no surprises.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    title: "Transparent pricing — no surprises",
    desc: "Fair, upfront pricing. What we agree on is what you pay.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [formData, setFormData] = useState({ name: "", phone: "", email: "", projectDescription: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We will contact you soon for your free estimate.")
    setFormData({ name: "", phone: "", email: "", projectDescription: "" })
  }

  return (
    <div className="min-h-screen">

      {/* ════════════════════════════════════════
          DESKTOP HEADER
      ════════════════════════════════════════ */}
      <header className="hidden lg:block sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        {/* FIX 2: logo left padding matches text pl-[80px] */}
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="flex items-center justify-between h-16">
            <a href="#"><img src="/logo.png" alt="ClearHandy" className="h-12 w-auto" /></a>
            <nav className="flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="tel:+17272223122" className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> (727) 222-3122
              </a>
              <Button asChild><a href="#contact">Get a Free Estimate</a></Button>
            </nav>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          MOBILE HEADER
      ════════════════════════════════════════ */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#"><img src="/logo.png" alt="ClearHandy" className="h-10 w-auto" /></a>
            <div className="flex items-center gap-2">
              <a href="#contact" className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg">Get a Free Estimate</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="bg-white border-t border-border px-4 py-3 flex flex-col gap-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium py-1">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium py-1">About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium py-1">Contact</a>
            <a href="tel:+17272223122" className="text-gray-700 font-medium py-1">(727) 222-3122</a>
          </div>
        )}
      </header>

      {/* ════════════════════════════════════════
          DESKTOP — Hero + Cards
      ════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <div className="relative overflow-visible">

          {/* Background */}
          <div className="absolute inset-0 w-full h-full">
            <img src="/hero-bg.png" alt="" className="w-full h-full object-cover object-[center_75%]" />
          </div>

          {/* Gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to right,
                rgba(244,242,239,0.98) 0%,
                rgba(244,242,239,0.94) 40%,
                rgba(244,242,239,0.75) 60%,
                rgba(244,242,239,0.35) 75%,
                rgba(244,242,239,0.0) 90%)`,
            }}
          />

          {/* Satisfaction badge */}
          <div className="absolute left-[55%] top-[52%] z-[9] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-[270px] rounded-3xl bg-white/50 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.10)] border border-white/70 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[22px] font-bold text-[#0B1F3A] leading-tight">100%</p>
                  <p className="text-[15px] font-semibold text-[#0B1F3A] leading-tight">Satisfaction</p>
                  <p className="text-[15px] font-semibold text-[#0B1F3A] leading-tight">Guarantee</p>
                </div>
              </div>
              <div className="my-3 h-px bg-gray-300/50" />
              <p className="text-[13px] text-gray-600 leading-snug">We stand behind our work.<br />Your satisfaction is our priority.</p>
            </div>
          </div>

          {/* Hero */}
          <section className="relative z-10">
            <div className="max-w-[1200px] mx-auto px-0">
              <div className="flex flex-row h-[calc(100vh-64px-107px)] min-h-[380px] max-h-[700px] items-stretch">

                {/* Left — Text */}
                <div className="w-[52%] flex items-center pl-[80px]">
                  <div className="-mt-5">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      Fix It Right<br />the First Time
                    </h1>
                    <p className="mt-1 text-lg font-semibold text-gray-700">No Delays. No Headaches.</p>
                    <p className="mt-1 text-sm text-gray-500">Fully insured &nbsp;•&nbsp; Quality-focused work &nbsp;•&nbsp; Fair pricing</p>

                    <div className="mt-3 flex flex-col gap-1.5">
                      {["3+ years of construction experience","Clean work, respect for your home","All steps agreed on paper before we start","Transparent pricing — no surprises"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">★★★★★</span>
                      <span className="text-sm font-semibold text-gray-700 ml-1">5.0 rating from local clients</span>
                    </div>
                    <p className="text-xs text-gray-500">Trusted by homeowners across Tampa Bay</p>

                    <div className="mt-3 flex flex-row gap-3">
                      <Button size="default" asChild className="text-sm"><a href="#contact">Get a Free Estimate</a></Button>
                      <a href="tel:+17272223122" className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" /> (727) 222-3122
                      </a>
                    </div>

                    <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Serving Clearwater, Tampa &amp; nearby areas
                    </p>
                  </div>
                </div>

                {/* FIX 1: Photo restored to full viewport height */}
                <div className="w-[48%] relative">
                  <img
                    src="/ClearHandy.png"
                    alt="Professional handyman"
                    className="absolute bottom-0 right-[26px] w-auto h-[calc(100vh-64px)] object-contain object-bottom translate-y-[107px]"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* Feature cards */}
          <section id="about" className="relative z-20 bg-transparent -mt-[60px]">
            <div className="max-w-[1200px] mx-auto px-[80px] pb-6">
              <div className="grid grid-cols-4 gap-6">
                {[
                  { title: "Fully Insured", desc: "Your property is protected with full insurance coverage.", icon: <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg> },
                  { title: "Clean & Respectful", desc: "We keep the workspace clean and treat your home like our own.", icon: <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 12 3l9.75 9M4.5 10.5V21h5.25v-5.25h4.5V21h5.25V10.5" /></svg> },
                  { title: "Clear & Agreed", desc: "All steps and scope are agreed on paper before we start.", icon: <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5.25h6M9 12h6m-6 3.75h4.5M7.5 3.75h9A2.25 2.25 0 0 1 18.75 6v12A2.25 2.25 0 0 1 16.5 20.25h-9A2.25 2.25 0 0 1 5.25 18V6A2.25 2.25 0 0 1 7.5 3.75Z" /></svg> },
                  { title: "Transparent Pricing", desc: "Fair, upfront pricing with no hidden fees or surprises.", icon: <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m3-8.25c0-1.24-1.343-2.25-3-2.25s-3 1.01-3 2.25S10.343 12 12 12s3 1.01 3 2.25-1.343 2.25-3 2.25-3-1.01-3-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> },
                ].map((card) => (
                  <div key={card.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-green-100">{card.icon}</div>
                      <h3 className="font-semibold text-[#0B1F3A]">{card.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE
      ════════════════════════════════════════ */}
      <div className="lg:hidden pb-20">
        <div className="relative overflow-hidden bg-[#f0ebe3]">
          <div className="absolute inset-0 w-full h-full">
            <img src="/hero-bg.png" alt="" className="w-full h-full object-cover object-center opacity-40" />
          </div>
          <div className="relative z-10 flex items-end min-h-[340px]">
            <div className="flex-1 px-5 pt-6 pb-6">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">Fix It Right<br />the First Time</h1>
              <p className="mt-1 text-lg font-semibold text-gray-800">No Delays. No Headaches.</p>
              <p className="mt-1 text-xs text-gray-500">Fully insured &nbsp;•&nbsp; Quality-focused work &nbsp;•&nbsp; Fair pricing</p>
              <div className="mt-4 flex flex-col gap-2">
                <a href="#contact" className="bg-primary text-white text-sm font-bold px-5 py-3 rounded-xl text-center shadow">Get a Free Estimate</a>
                <a href="tel:+17272223122" className="flex items-center justify-center gap-2 border-2 border-gray-400 bg-white/80 text-gray-800 text-sm font-semibold px-5 py-3 rounded-xl">
                  <Phone className="h-4 w-4" /> (727) 222-3122
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Serving Clearwater, Tampa &amp; nearby areas
              </p>
            </div>
            <div className="flex-shrink-0 w-[48%] flex items-end justify-end">
              <img src="/ClearHandy.png" alt="Professional handyman" className="w-full object-contain object-bottom max-h-[320px]" />
            </div>
          </div>
        </div>

        <div className="bg-[#f7f4f0] px-5 py-4">
          {mobileTrustItems.map((item, i) => (
            <div key={item.title}>
              <div className="flex gap-4 items-start py-4">
                <div className="text-primary flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
              {i < mobileTrustItems.length - 1 && <div className="border-t border-gray-200" />}
            </div>
          ))}
        </div>

        <div className="bg-white px-5 py-4 flex items-center justify-between border-t border-gray-100">
          <div>
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <p className="text-sm font-bold text-gray-900 mt-0.5">5.0 rating from local clients</p>
            <p className="text-xs text-gray-500">Trusted by homeowners in Tampa Bay</p>
          </div>
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
            <svg className="w-7 h-7" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div>
              <p className="text-sm font-bold text-gray-900">5.0</p>
              <p className="text-xs text-gray-500">Google Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex gap-2 p-3 bg-white border-t border-gray-200 shadow-lg">
        <a href="tel:+17272223122" className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 rounded-xl text-sm">
          <Phone className="h-4 w-4" /> Call (727) 222-3122
        </a>
        <a href="sms:+17272223122" className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-800 font-bold py-3 rounded-xl text-sm">
          💬 Text Us
        </a>
      </div>

      {/* ════════════════════════════════════════
          FIX 3: SERVICES — max-w with side padding
      ════════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Services</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
              From small repairs to complete home improvements, we handle it all with expertise and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FIX 4: CONTACT — max-w with side padding, smaller text
      ════════════════════════════════════════ */}
      <section id="contact" className="py-16 md:py-20 bg-card">
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contact Us</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">Ready to start your project? Get in touch for a free estimate.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10"><Phone className="h-4 w-4 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Phone</h3>
                    <a href="tel:+17272223122" className="text-muted-foreground hover:text-primary transition-colors text-sm">(727) 222-3122</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10"><Mail className="h-4 w-4 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Email</h3>
                    <a href="mailto:konst@clearhandy.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">konst@clearhandy.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10"><MapPin className="h-4 w-4 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Location</h3>
                    <p className="text-muted-foreground text-sm">Clearwater, FL — serving the entire Tampa Bay Area</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-border h-[260px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112841.65657196096!2d-82.84739585!3d27.96579045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f0a864f2e337%3A0xab41ee576c9bb8eb!2sClearwater%2C%20FL!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Clearwater FL"
                />
              </div>
            </div>
            <Card className="p-5 md:p-6">
              <h3 className="text-lg font-semibold text-foreground mb-5">Get a Free Estimate</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input id="phone" type="tel" placeholder="(555) 555-5555" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="projectDescription">Project Description</FieldLabel>
                  <Textarea id="projectDescription" placeholder="Tell us about your project..." rows={4} value={formData.projectDescription} onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })} required />
                </Field>
                <Button type="submit" size="default" className="w-full">Get a Free Estimate</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="py-10 bg-foreground text-primary-foreground">
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Konstantin Group LLC</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">Professional handyman services for all your home repair and improvement needs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact Info</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+17272223122" className="hover:text-primary-foreground">(727) 222-3122</a></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:konst@clearhandy.com" className="hover:text-primary-foreground">konst@clearhandy.com</a></li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Clearwater, FL</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Service Area</h4>
              <p className="text-sm text-primary-foreground/80">Serving Clearwater, St. Petersburg, Tampa and surrounding areas.</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
            <p>© 2026 Konstantin Group LLC. All rights reserved. ClearHandy is a trade name of Konstantin Group LLC.</p>
            <p className="mt-2">
              <a href="/privacy" className="hover:text-primary-foreground">Privacy Policy</a>
              <span className="mx-3">|</span>
              <a href="/terms" className="hover:text-primary-foreground">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
