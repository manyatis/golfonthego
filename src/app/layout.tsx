import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GolfOnTheGo - Premium Golf Simulator Rentals for Your Event',
  description: 'Bring the golf course to your party! Rent our state-of-the-art indoor/outdoor golf simulators for unforgettable entertainment at your next event.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}