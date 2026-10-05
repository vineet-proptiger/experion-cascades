import './globals.css'
import { Poppins, Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://experioncascades88a.co.in'),
  title: 'Experion Cascades Sector 88A Gurgaon | 3, 3.5 & 4 BHK',
  description: 'Experion Cascades at Sector 88A Dwarka Expressway Gurgaon offers luxury 3, 3.5 & 4 BHK apartments from ₹3 Cr*. Premium clubhouse & amenities. Enquire now!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Experion Cascades Sector 88A Gurgaon | 3, 3.5 & 4 BHK',
    description: 'Experion Cascades at Sector 88A Dwarka Expressway Gurgaon offers luxury 3, 3.5 & 4 BHK apartments from ₹3 Cr*. Premium clubhouse & amenities. Enquire now!',
    url: 'https://experioncascades88a.co.in',
    siteName: 'Experion Cascades',
    type: 'website',
  },
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WCBT5KRZ" />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCBT5KRZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
