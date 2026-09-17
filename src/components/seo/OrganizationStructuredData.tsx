/* =======================================
 * 合同会社 縁合 構造化データ
 * URL: src/components/seo/OrganizationStructuredData.tsx
 * Created: 2026-09-17
 * Last updated: 2026-09-17
 * ======================================= */

import { metadataBase } from '@/lib/env';

export default function OrganizationStructuredData() {
  if (!metadataBase) {
    return null;
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': new URL('/about-enai/#organization', metadataBase).toString(),
    name: '合同会社 縁合',
    url: new URL('/about-enai/', metadataBase).toString(),
    telephone: '+81-968-68-5222',
    address: {
      '@type': 'PostalAddress',
      postalCode: '864-0161',
      addressRegion: '熊本県',
      addressLocality: '荒尾市',
      streetAddress: '菰屋2031番地8',
      addressCountry: 'JP',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, '\\u003c'),
      }}
    />
  );
}
