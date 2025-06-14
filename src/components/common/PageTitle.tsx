/* =======================================
 * ページタイトル
 * URL: src/components/common/PageTitle.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */
import styles from '@/styles/components/common/PageTitle.module.scss';
import Link from 'next/link';
type PageHeadProps = {
  titleEn: string;
  title: string;
};

const PageTitle = ({ title, titleEn }: PageHeadProps) => {
  return (
    <>
      <section className={styles.containerTitle}>
        <article>
          <nav className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <span>{title}</span>
          </nav>
          <div className={styles.titleEn}>{titleEn}</div>
          <h3>{title}</h3>
        </article>
      </section>
    </>
  );
};
export default PageTitle;
