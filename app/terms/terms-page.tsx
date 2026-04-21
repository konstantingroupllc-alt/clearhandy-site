export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4 px-8">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="ClearHandy" className="h-12 w-auto" />
        </a>
      </header>
      <main className="container mx-auto px-8 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 21, 2026</p>

        <section className="space-y-6 text-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Services</h2>
            <p>ClearHandy (a trade name of Konstantin Group LLC) provides handyman and home repair services in the Tampa Bay Area, Florida. All services are performed by or under the supervision of Konstantin Group LLC.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Estimates and Pricing</h2>
            <p>All estimates are provided free of charge. Final pricing may vary from estimates based on actual scope of work. Prices are for labor only unless otherwise stated. Materials are not included unless specifically agreed upon in writing.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Licensing Disclaimer</h2>
            <p>ClearHandy does not hold a Florida contractor's license for plumbing or electrical work requiring a permit. We perform general handyman tasks only. Work requiring licensed contractors will not be performed.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Visit Fee</h2>
            <p>If we arrive and the item you purchased (mount, fixture, appliance, etc.) is incorrect, incompatible, or missing, a $50 visit fee applies to cover travel and time.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Payment</h2>
            <p>Payment is due upon completion of work. We accept cash, credit/debit cards, Apple Pay, and checks. Returned checks are subject to a $35 fee.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Cancellation</h2>
            <p>Please notify us at least 24 hours in advance if you need to cancel or reschedule. Late cancellations may result in a $50 fee.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Liability</h2>
            <p>ClearHandy carries general liability insurance. We are not responsible for pre-existing conditions, defects in materials supplied by the client, or damage caused by incorrect items purchased by the client.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in Pinellas County, Florida.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
            <p>Questions about these terms? Contact us at konst@clearhandy.com or (727) 222-3122.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2026 Konstantin Group LLC. All rights reserved. ClearHandy is a trade name of Konstantin Group LLC.
      </footer>
    </div>
  )
}
