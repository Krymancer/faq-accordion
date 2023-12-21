import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'faq-accordion',
  description: 'A simple faq accordion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
