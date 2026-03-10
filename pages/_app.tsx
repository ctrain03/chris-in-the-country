import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

const defaultSEO = {
  titleTemplate: '%s | Chris in the Country',
  defaultTitle: 'Chris in the Country – Bay Area Luxury Farm, Ranch & Country Real Estate',
  description: 'Chris Traina (CA DRE #02013484) specializes in luxury farm, ranch, homestead and country properties throughout the Bay Area. East Bay, South Bay, North Bay – 0.5+ acres.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chrisinthecountry.com',
    siteName: 'Chris in the Country',
    images: [
      {
        url: 'https://www.chrisinthecountry.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chris in the Country – Bay Area Luxury Ranch & Farm Real Estate',
      },
    ],
  },
  twitter: {
    handle: '@chrisinthecountry',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Chris Traina' },
    { name: 'geo.region', content: 'US-CA' },
    { name: 'geo.placename', content: 'Bay Area, California' },
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </>
  );
}
