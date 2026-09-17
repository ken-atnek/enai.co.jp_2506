import type { Metadata } from 'next';
import { metadataBase } from '@/lib/env';

export function getCanonicalMetadata(pathname: string): Metadata {
  if (!metadataBase) {
    return {};
  }

  return {
    alternates: {
      canonical: new URL(pathname, metadataBase).toString(),
    },
  };
}
