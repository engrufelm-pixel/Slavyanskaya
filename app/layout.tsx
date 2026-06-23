import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { CookieConsent } from '@/components/CookieConsent';
import { brand, contacts, seo, services } from '@/lib/site';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

const ogImage =
  'https://images.pexels.com/photos/26871052/pexels-photo-26871052/free-photo-of-beige-interior-of-a-mercedes-amg-s-63.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'; // заменить на /og.jpg

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  applicationName: brand.name,
  keywords: [
    'перетяжка салона',
    'пошив автомобильного салона',
    'реставрация кожи салона',
    'перетяжка руля',
    'автомобильное ателье',
    'кожа алькантара салон',
    `автоателье ${brand.city}`,
    'Выборная 141А',
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: seo.url,
    siteName: `${brand.name} — ${brand.tagline}`,
    title: seo.title,
    description: seo.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'automotive',
};

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['AutoRepair', 'LocalBusiness'],
  '@id': `${seo.url}/#business`,
  name: `${brand.name} — ${brand.tagline}`,
  description: seo.description,
  url: seo.url,
  image: ogImage,
  telephone: contacts.phoneHref.replace('tel:', ''),
  email: contacts.email,
  priceRange: '₽₽₽',
  currenciesAccepted: 'RUB',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contacts.address,
    addressLocality: brand.city,
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: contacts.geo.lat,
    longitude: contacts.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  sameAs: [contacts.max],
  areaServed: { '@type': 'City', name: brand.city },
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, description: s.description },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="overflow-x-hidden bg-ink">
        {/* Зерно поверх всего — фиксировано, не перерисовывается при скролле */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] bg-grain opacity-[0.035] mix-blend-soft-light"
        />
        {children}
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
