/* =======================================
 * ページ上部タイトル
 * URL: src/components/common/PageTitle.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */

import styles from '@/styles/components/common/PageHead.module.scss';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
type PageHeadProps = {
  title: string;
  backgroundImage?: StaticImageData;
};

const PageHead = ({ title, backgroundImage }: PageHeadProps) => {
  return (
    <>
      <section
        className={styles.containerPageHead}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage.src})`
            : undefined,
        }}
      >
        <div className={styles.boxContents}>
          <h2>{title}</h2>
          <div className={styles.sidebarH2}>
            <Link href="/" className={styles.itemLink}>
              home
            </Link>
            <span>{title}</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageHead;
