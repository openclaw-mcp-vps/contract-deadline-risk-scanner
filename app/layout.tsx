import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Deadline Risk Scanner',
  description: 'Scan contracts for missed deadline risks. AI-powered deadline extraction, risk scoring, and calendar sync for small business owners and freelancers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="597b4a47-c2d8-4791-996a-67ec274f972c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
