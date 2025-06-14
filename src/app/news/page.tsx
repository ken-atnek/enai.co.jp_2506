/* =======================================
 * ニュースページ
 * URL: src/app/blog/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import NewsList from '@/components/news/NewsList';
import { newsData } from '@/data/newsData';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageNews.module.scss';

export default function NewsPage() {
  return (
    <>
      <PageTitle
        title="お知らせ・更新情報"
        titleEn="NEWS・UPDATE INFORMATION"
      />
      <section className={styles.containerNewsList}>
        <article>
          <NewsList items={newsData} />
        </article>
      </section>
    </>
  );
}
