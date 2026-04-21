export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4 px-8">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="ClearHandy" className="h-12 w-auto" />
        </a>
      </header>
      <main className="container mx-auto px-8 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 21, 2026</p>

        <section className="space-y-6 text-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
            <p>ClearHandy is a trade name of Konstantin Group LLC, a Florida limited liability company providing handyman and home repair services in the Tampa Bay Area. Contact: konst@clearhandy.com | (727) 222-3122</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>When you submit our contact form, we collect your name, phone number, email address, and project description. We do not collect payment information through this website.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p>We use your information solely to respond to your service inquiries and provide estimates. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
            <p>We retain your contact information only as long as necessary to fulfill your service request or as required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
            <p>This website does not use tracking cookies or third-party analytics tools that collect personal data.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at konst@clearhandy.com.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
            <p>For any privacy-related questions, contact us at konst@clearhandy.com or call (727) 222-3122.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2026 Konstantin Group LLC. All rights reserved. ClearHandy is a trade name of Konstantin Group LLC.
      </footer>
    </div>
  )
}
