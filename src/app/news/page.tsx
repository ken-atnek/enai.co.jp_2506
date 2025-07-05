/* =======================================
 * ニュースページ
 * URL: src/app/blog/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
// import NewsList from '@/components/news/NewsList';
// import { newsData } from '@/data/newsData';
import NewsClient from '@/components/news/NewsClient';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageNews.module.scss';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: 'お知らせ・更新情報｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型の有料老人ホーム「梨園」は、熊本県荒尾市にある介護施設・有料老人ホームです。梨園は、住宅型の老人ホームであるため居住空間は快適で、一人の生活者として尊重・尊厳をもって寄り添っていきたいと考えております。 なお介護職・介護スタッフも募集中です。',
  };
};
export default function NewsPage() {
  return (
    <>
      <PageTitle
        title="お知らせ・更新情報"
        titleEn="NEWS・UPDATE INFORMATION"
      />
      <section className={styles.containerNewsList}>
        <article>
          {/* <NewsList items={newsData} /> */}
          <NewsClient />
        </article>
      </section>
    </>
  );
}
