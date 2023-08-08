import './globals.css'
import { Outfit } from 'next/font/google'


const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'QR code component challenge ',
  description: 'Code By AcerNg548',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
