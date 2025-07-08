'use client';

/* =======================================
 * ニュース詳細ページ（クエリパラメータ使用）
 * URL: /news/detail?id=◯
 * output: 'export' 対応
 * ======================================= */

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/PageBlog.module.scss';

type ApiBlogItem = {
  k_id: number | string;
  k_date?: string;
  k_title: string;
  k_body: string;
  k_next?: number | string;
  k_back?: number | string;
};

export default function BlogDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState<ApiBlogItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    fetch(`https://demo-enai.tuna-pic.co.jp/api/blog/index.php?id=${id}`)
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
            <Link href="/blog/">梨園のブログ</Link>
            <span>{data.k_title}</span>
          </nav>
          <h3>{data.k_title}</h3>
        </article>
      </section>
      <section className={styles.containerDetailContent}>
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: data.k_body }}
            className={styles.itemDetails}
          />
        </article>
        <nav className={styles.articleNav}>
          <ul>
            <li>
              {data.k_back != null && (
                <Link
                  href={`/blog/detail?id=${data.k_back}`}
                  className={styles.prev}
                >
                  <span>前の記事へ</span>
                </Link>
              )}
            </li>
            <li>
              {data.k_next != null && (
                <Link
                  href={`/blog/detail?id=${data.k_next}`}
                  className={styles.next}
                >
                  <span>次の記事へ</span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
