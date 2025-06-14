/* =======================================
 * ブログページ
 * URL: src/app/blog/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import BlogList from '@/components/blog/BlogList';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageBlog.module.scss';
import { blogData } from '@/data/blogData';

export default function BlogPage() {
  return (
    <>
      <PageTitle title="梨園のブログ" titleEn="OFFICIAL BLOG" />
      <section className={styles.containerBlogList}>
        <article>
          <BlogList items={blogData} />
        </article>
      </section>
    </>
  );
}
