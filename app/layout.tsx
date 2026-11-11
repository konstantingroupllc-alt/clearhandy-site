import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Konstantin Group LLC | Professional Handyman Services in Tampa Bay',
  description: 'Professional handyman services in Clearwater, FL serving the entire Tampa Bay Area. General repairs, furniture assembly, TV mounting, lighting, plumbing, painting and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HandymanService',
              name: 'ClearHandy',
              legalName: 'Konstantin Group LLC',
              url: 'https://www.clearhandy.com',
              telephone: '+1-727-222-3122',
              email: 'info@clearhandy.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1464 Pinebrook Dr',
                addressLocality: 'Clearwater',
                addressRegion: 'FL',
                postalCode: '33755',
                addressCountry: 'US',
              },
              areaServed: ['Clearwater', 'St. Petersburg', 'Tampa', 'Tampa Bay Area'],
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
