'use client';
/* =======================================
 * ブログデータ取得コンポーネント
 * 動的にAPIからデータを取得して BlogList に渡す
 * URL: src/components/blog/BlogClient.tsx
 * Referenced in:src/app/blog/page.tsx
 * Created: 2025-06-28
 * Last updated: 2025-07-08
 * ======================================= */
import { useEffect, useState } from 'react';
import { fetchBlogs } from '@/lib/fetchBlogApi';
import type { BlogItem } from '@/types/blog';
import BlogList from '@/components/blog/BlogList';
import styles from '@/styles/PageBlog.module.scss';
//APIから取得するデータの件数
const PER_PAGE = 3;
//ブログ一覧を表示するコンポーネント
export default function BlogClient() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fetchData = (page: number) => {
    const offset = page * PER_PAGE;
    fetchBlogs(PER_PAGE, offset)
      .then(({ blogs, total }) => {
        setItems(blogs);
        setTotal(total);
      })
      .catch((err) => {
        console.error('API取得失敗:', err);
        setError('ブログデータの取得に失敗しました');
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
      <BlogList items={items} showBody={true} />
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
