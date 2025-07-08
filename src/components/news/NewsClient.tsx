'use client';
/* =======================================
 * ニュースデータ取得コンポーネント
 * 動的にAPIからデータを取得して NewsList に渡す
 * URL: src/components/news/NewsClient.tsx
 * Created: 2025-06-28
 * ======================================= */
import { useEffect, useState } from 'react';
import { fetchNews } from '@/lib/fetchNewsApi';
import type { NewsItem } from '@/types/news';
import NewsList from '@/components/news/NewsList';
import styles from '@/styles/PageNews.module.scss';
//APIから取得するデータの件数
const PER_PAGE = 5;
//ブログ一覧を表示するコンポーネント
export default function NewsClient() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fetchData = (page: number) => {
    const offset = page * PER_PAGE;
    fetchNews(PER_PAGE, offset)
      .then(({ news, total }) => {
        setItems(news);
        setTotal(total);
      })
      .catch((err) => {
        console.error('API取得失敗:', err);
        setError('ニュースデータの取得に失敗しました');
      });
  };
  useEffect(() => {
    fetchData(page);
  }, [page]);
  // エラーハンドリング
  if (error) return <p>{error}</p>;
  if (!items.length) return <p>読み込み中...</p>;
  //最終ページの判定
  const isLastPage = (page + 1) * PER_PAGE >= total;
  return (
    <>
      <NewsList items={items} />
      {/* ページャーが必要なときだけ表示 */}
      {(page > 0 || !isLastPage) && (
        <div className={styles.wrapPager}>
          {/* Backボタンは1ページ目では表示しない */}
          {page > 0 && (
            <button
              className={styles.prev}
              type="button"
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            >
              Back
            </button>
          )}
          {/* Nextボタンは最終ページで非表示 */}
          {!isLastPage && (
            <button
              className={styles.next}
              type="button"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
}
