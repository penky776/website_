import './globals.css'

import { Libre_Baskerville } from 'next/font/google'

const baskerville = Libre_Baskerville({
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Me</title>
      </head>
      <body className={baskerville.className}>{children}</body>
    </html>
  )
}
