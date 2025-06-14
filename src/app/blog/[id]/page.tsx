/* =======================================
 * ブログ詳細ページ
 * URL: src/app/blog/[id]/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import type { Metadata } from 'next';
import { blogData } from '@/data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/PageBlog.module.scss';
type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = blogData.find((item) => item.id === id);
  if (!article) return {};

  return {
    title: `${article.title} | 梨園ブログ`,
    description: article.body.excerpt,
  };
}
export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const article = blogData.find((item) => item.id === id);

  if (!article) return notFound();

  const currentIndex = blogData.findIndex((item) => item.id === id);
  const prevArticle = blogData[currentIndex - 1] ?? null;
  const nextArticle = blogData[currentIndex + 1] ?? null;

  return (
    <>
      <section className={styles.containerDetailTitle}>
        <article>
          <nav className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <Link href="/blog/">梨園のブログ</Link>
            <span>{article.title}</span>
          </nav>
          <h3>{article.title}</h3>
        </article>
      </section>
      <section className={styles.containerDetailContent}>
        <article>{article.body.content}</article>
        <nav className={styles.articleNav}>
          <ul>
            <li>
              {prevArticle && (
                <Link href={`/blog/${prevArticle.id}`} className={styles.prev}>
                  <span>前の記事へ</span>
                </Link>
              )}
            </li>
            <li>
              {nextArticle && (
                <Link href={`/blog/${nextArticle.id}`} className={styles.next}>
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

export async function generateStaticParams() {
  return blogData.map((item) => ({ id: item.id }));
}
