import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import localFont from '@next/font/local'

const MontserratAlt1 = localFont({
  src: [
    {
      path: './webfonts/MontserratAlt1-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-MontserratAlt1'
})

const Helvetica = localFont({
  src: [
    {
      path: './webfonts/Helvetica-medium.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${MontserratAlt1.variable} font-sans ${Helvetica.variable} font-sans`}>    
      <head />
      <body>  
      <Navbar />
        {children}
      </body>
    </html>
  )
}
