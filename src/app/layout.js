// app/layout.js
import React from 'react'
import '../../public/css/input.css'
import '../../public/css/stylesheet.css'
import Header from '../app/Header/page'
import Footer from '../app/Footer/page'

export const metadata = {
  description: 'Daniella Nicolli',
  title: 'Daniella Nicolli Payload',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="lenis">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
