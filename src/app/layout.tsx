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
// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://enai.co.jp/')
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
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
  }),
  title: '住宅型有料老人ホーム　梨園',
  description: isRealProduction
    ? '住宅型の有料老人ホーム「梨園」は、熊本県荒尾市にある介護施設・有料老人ホームです。梨園は、住宅型の老人ホームであるため居住空間は快適で、一人の生活者として尊重・尊厳をもって寄り添っていきたいと考えております。 なお介護職・介護スタッフも募集中です。'
    : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
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
