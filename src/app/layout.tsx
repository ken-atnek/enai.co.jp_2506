/* =======================================
 * 梨園 Layout
 * URL:src/app/layout.tsx
 * Created: 2025-06-13
 * Last updated: 2025-06-13
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Noto_Sans_JP } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Aleo } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import {
  metadataBase,
  siteDescription,
  siteName,
  siteTitle,
} from '@/lib/env';
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});
const aleo = Aleo({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  ...(metadataBase
    ? {
        metadataBase,
        openGraph: {
          title: siteTitle,
          description: siteDescription,
          url: metadataBase.toString(),
          siteName,
          locale: 'ja_JP',
          type: 'website',
          images: [
            {
              url: '/images/ogp.jpg',
              width: 1200,
              height: 630,
              alt: '梨園のOGP画像',
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: siteTitle,
          description: siteDescription,
          images: [
            {
              url: new URL('/images/ogp.jpg', metadataBase).toString(),
              alt: '梨園のOGP画像',
            },
          ],
        },
      }
    : {
        robots: 'noindex, nofollow',
      }),
  icons: [
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${notoSans.className} ${roboto.className} ${aleo.className}`}
    >
      <head>
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
