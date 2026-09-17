/* =======================================
 * ニュース詳細ページ（クエリパラメータ使用）
 * URL: /news/detail?id=◯
 * output: 'export' 対応
 * ======================================= */

import { Suspense } from 'react';
import BlogDetailClient from '@/app/blog/detail/BlogDetailClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ブログ詳細｜住宅型有料老人ホーム 梨園',
  description: '住宅型有料老人ホーム 梨園のブログ記事詳細ページです。',
};

export default function BlogDetailPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <BlogDetailClient />
    </Suspense>
  );
}
