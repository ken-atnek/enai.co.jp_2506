/* =======================================
 * ニュース詳細ページ
 * URL: src/app/blog/[id]/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import type { Metadata } from 'next';
import { newsData } from '@/data/newsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/PageNews.module.scss';
type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = newsData.find((item) => item.id === id);
  if (!article) return {};

  return {
    title: `${article.title} | 梨園のお知らせ・更新情報`,
    description: article.body.excerpt,
  };
}
export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const article = newsData.find((item) => item.id === id);

  if (!article) return notFound();

  return (
    <>
      <section className={styles.containerDetailTitle}>
        <article>
          <nav className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <Link href="/news/">お知らせ・更新情報</Link>
            <span>{article.title}</span>
          </nav>
          <h3>{article.title}</h3>
        </article>
      </section>
      <section className={styles.containerDetailContent}>
        <article>{article.body.content}</article>
        <Link href="/news/" className={styles.linkList}>
          お知らせ一覧へ
        </Link>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return newsData.map((item) => ({ id: item.id }));
}
