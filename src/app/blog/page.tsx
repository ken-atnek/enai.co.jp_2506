/* =======================================
 * 梨園 ブログページ
 * URL: src/app/blog/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-07-08
 * ======================================= */
import BlogClient from '@/components/blog/BlogClient';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageBlog.module.scss';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: '梨園のブログ｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型有料老人ホーム 梨園のスタッフブログでは、日々の出来事や職場の雰囲気、採用情報に関するお知らせなどを発信中。エナイのリアルな魅力を感じていただけます。',
  };
};
export default function BlogPage() {
  return (
    <>
      <PageTitle title="梨園のブログ" titleEn="OFFICIAL BLOG" />
      <section className={styles.containerBlogList}>
        <article>
          <BlogClient />
        </article>
      </section>
    </>
  );
}
