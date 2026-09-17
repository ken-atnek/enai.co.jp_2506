/* =======================================
 * 梨園 応募フォーム Layout
 * URL: src/app/form/layout.tsx
 * Created: 2026-09-17
 * Last updated: 2026-09-17
 * ======================================= */

import type { ReactNode } from 'react';

export { metadata } from './metadata';

export default function FormLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
