/* =======================================
 * ニュース詳細ページ（クエリパラメータ使用）
 * URL: /news/detail?id=◯
 * output: 'export' 対応
 * ======================================= */

import { Suspense } from 'react';
import NewsDetailClient from '@/app/news/detail/NewsDetailClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お知らせ詳細｜住宅型有料老人ホーム 梨園',
  description:
    '住宅型有料老人ホーム 梨園からのお知らせ・更新情報の詳細ページです。',
};

export default function BlogDetailPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <NewsDetailClient />
    </Suspense>
  );
}
