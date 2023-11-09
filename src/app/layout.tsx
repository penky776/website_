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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Me</title>
      </head>
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}
