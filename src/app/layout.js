import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight:['400', '700']  })

export const metadata = {
  title: 'E-commerce product page',
  description: 'These low-profile sneakers...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>{children}</body>
    </html>
  )
}
