import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PitchCraft AI | Win More Clients',
  description:
    'The ultimate AI tool for generating professional freelance proposals and contracts.',
  icons: {
    icon: '/favicon.ico', // Make sure to add a favicon in your public folder
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-[#020617] text-white antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        {/* The layout wraps all pages. Since this is a landing page, 
            the Navbar and Footer can be here or inside page.tsx. 
            Keeping them in page.tsx is better for custom landing page layouts. */}
        {children}
      </body>
    </html>
  )
}
