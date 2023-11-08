import './globals.css'

import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}
