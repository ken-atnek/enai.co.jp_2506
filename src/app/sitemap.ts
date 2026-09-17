import type { MetadataRoute } from 'next';
import { isRealProduction, metadataBase } from '@/lib/env';

export const dynamic = 'force-static';

const routes = [
  '/',
  '/about-enai/',
  '/blog/',
  '/concept/',
  '/concept/day-service/',
  '/concept/helper-station/',
  '/concept/home-care/',
  '/contact/',
  '/news/',
  '/recruit/',
  '/service/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction || !metadataBase) {
    return [];
  }

  const baseUrl = metadataBase;
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified,
  }));
}
