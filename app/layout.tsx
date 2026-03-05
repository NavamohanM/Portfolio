import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Navamohan M — Portfolio',
  description: 'AI Engineer & Full-Stack Developer. B.E. CSE at Government College of Technology, Coimbatore.',
  keywords: ['Navamohan', 'Portfolio', 'AI Engineer', 'Full Stack Developer', 'React', 'Next.js'],
  authors: [{ name: 'Navamohan M', url: 'https://github.com/NavamohanM' }],
  openGraph: {
    title: 'Navamohan M — Portfolio',
    description: 'AI Engineer & Full-Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fira.variable}`}>
      <body className="font-sans antialiased bg-dark-900 text-slate-200">
        {children}
      </body>
    </html>
  )
}
