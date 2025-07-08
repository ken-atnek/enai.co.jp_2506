'use client';
/* =======================================
 * トップページ用 ブログ表示コンポーネント（最新3件）
 * URL: src/components/blog/TopBlogClient.tsx
 * ======================================= */
import { useEffect, useState } from 'react';
import { fetchBlogs } from '@/lib/fetchBlogApi';
import type { BlogItem } from '@/types/blog';
import BlogList from '@/components/blog/BlogList';

export default function TopBlogClient() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchBlogs(3)
      .then(({ blogs }) => {
        setItems(blogs);
      })
      .catch((err) => {
        console.error('トップブログ取得失敗:', err);
        setError('最新ブログの取得に失敗しました');
      });
  }, []);
  //エラーハンドリング
  if (error) return <p>{error}</p>;
  if (!items.length) return <p>読み込み中...</p>;
  //応答
  return <BlogList items={items} />;
}
