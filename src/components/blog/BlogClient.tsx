'use client';
/* =======================================
 * ニュースデータ取得コンポーネント
 * 動的にAPIからデータを取得して NewsList に渡す
 * URL: src/components/news/NewsClient.tsx
 * Created: 2025-06-28
 * ======================================= */

import { useEffect, useState } from 'react';
import BlogList from '@/components/blog/BlogList';
import type { BlogItem } from '@/types/blog';

type ApiBlogItem = {
  k_id: number | string;
  k_date?: string;
  k_title: string;
  k_body: string;
  k_img?: string;
  k_total: number | string;
};

//APIから取得するデータの件数
const PER_PAGE = 6;

export default function BlogClient() {
  const [items, setItems] = useState<BlogItem[]>([]);
  //現在のページ（0スタート）
  const [page, setPage] = useState(0);
  const fetchData = (page: number) => {
    const offset = page * PER_PAGE;
    fetch(
      `https://demo-enai.tuna-pic.co.jp/api/blog/index.php?limit=${PER_PAGE}&offset=${offset}`
    )
      .then((res) => {
        if (!res.ok) throw new Error('API接続エラー');
        return res.json();
      })
      .then((data: ApiBlogItem[]) => {
        const converted: BlogItem[] = data.map((item: ApiBlogItem) => ({
          id: String(item.k_id),
          date: item.k_date || '',
          title: item.k_title,
          body: {
            excerpt: '',
            content: <div dangerouslySetInnerHTML={{ __html: item.k_body }} />,
          },
          // firstImage: item.k_first_image ? (item.k_first_image as StaticImageData) : null, // 画像URLがある場合は設定
          firstImage: item.k_img ? item.k_img : '', // 画像URLがある場合は設定
        }));
        setItems(converted);
      })
      .catch((err) => {
        console.error('API取得失敗:', err);
      });
  };
  useEffect(() => {
    fetchData(page);
  }, [page]);
  return (
    <>
      <BlogList items={items} />
      {/* ページャーが必要なときだけ表示 */}
      {(page > 0 || items.length === PER_PAGE) && (
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          {/* Backボタンは1ページ目では表示しない */}
          {page > 0 && (
            <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>
              ← Back
            </button>
          )}
          {/* Nextボタンは最終ページで非表示 */}
          {items.length === PER_PAGE && (
            <button onClick={() => setPage((prev) => prev + 1)}>Next →</button>
          )}
        </div>
      )}
    </>
  );
}
