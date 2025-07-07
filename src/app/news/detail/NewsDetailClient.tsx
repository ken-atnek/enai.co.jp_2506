'use client';

/* =======================================
 * ニュース詳細ページ（クエリパラメータ使用）
 * URL: /news/detail?id=◯
 * output: 'export' 対応
 * ======================================= */

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/PageNews.module.scss';

type ApiNewsItem = {
  k_id: string | number;
  k_title: string;
  k_body: string;
  k_date?: string;
};

export default function NewsDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState<ApiNewsItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    fetch(`https://demo-enai.tuna-pic.co.jp/api/news/?id=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('記事が見つかりません');
        return res.json();
      })
      .then((item) => setData(item))
      .catch((err) => setError(err.message));
  }, [id]);
  if (!id) return <div className={styles.error}>IDが指定されていません</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!data) return <div className={styles.loading}>読み込み中...</div>;
  return (
    <>
      <section className={styles.containerDetailTitle}>
        <article>
          <nav className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <Link href="/news/">お知らせ・更新情報</Link>
            <span>{data.k_title}</span>
          </nav>
          <h3>{data.k_title}</h3>
        </article>
      </section>
      <section className={styles.containerDetailContent}>
        <article>
          <div dangerouslySetInnerHTML={{ __html: data.k_body }} />
        </article>
        <Link href="/news/" className={styles.linkList}>
          お知らせ一覧へ
        </Link>
      </section>
    </>
  );
}
