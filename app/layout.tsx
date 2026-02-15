import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Giorgio Studios | Investor-Grade Operations in 60–90 Days',
  description:
    'Giorgio Studios helps growth-stage tech companies turn messy, risky internal operations into investor-grade, audit-ready systems. 30–90 day transformation program.',
  keywords: [
    'investor readiness',
    'operational transformation',
    'governance',
    'due diligence',
    'PMO',
    'ERP',
    'audit-ready',
    'Series A',
    'Series B',
    'M&A preparation',
    'IPO readiness',
  ],
  authors: [{ name: 'Giorgio Studios' }],
  creator: 'Giorgio Studios',
  publisher: 'Giorgio Studios',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans bg-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
