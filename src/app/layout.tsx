import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ainul & Dea Wedding Invitation',
  description:
    'You are cordially invited to witness the union of Romeo & Juliet on August 8, 2026. Join us for this galactic celebration of love.',
  openGraph: {
    title: 'Romeo & Juliet — Wedding Invitation',
    description: 'A love story written in the stars. August 8, 2026.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
