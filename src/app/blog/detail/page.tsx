/* =======================================
 * ニュース詳細ページ（クエリパラメータ使用）
 * URL: /news/detail?id=◯
 * output: 'export' 対応
 * ======================================= */

import { Suspense } from 'react';
import BlogDetailClient from '@/app/blog/detail/BlogDetailClient';

export default function BlogDetailPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <BlogDetailClient />
    </Suspense>
  );
}
