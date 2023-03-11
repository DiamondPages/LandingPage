import './globals.sass'
import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics/page'
import Pixel from '@/components/PixelFacebook/page';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    icons: {
        icon: '../assets/logo.png',
    },
    title: 'Diamond Pages - Páginas profissionais',
    description: 'Páginas profissionais e de alta performance.',
    verification: {
        google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`,
        other: {
            'facebook-domain-verification': [`${process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION}`]
        }
    },
    alternates: {
        canonical: 'https://diamondpages.com.br/',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Landing Pages - Diamond Pages',
        description: 'Páginas profissionais e de alta performance.',
        images: ['https://i.imgur.com/zqfroaP.png'],
    },
    openGraph: {
        title: 'Landing Pages - Diamond Pages',
        description: 'Páginas profissionais e de alta performance.',
        url: 'https://diamondpages.com.br/',
        siteName: 'Diamond Pages',
        images: ['https://i.imgur.com/zqfroaP.png'],
        locale: 'pt_BR',
        type: 'website',
      },
      robots: {
        googleBot: {
            'max-image-preview': 'large',
        }
    }
  };

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics/>
        <Pixel/>
        {children}
        </body>
    </html>
  )
}
