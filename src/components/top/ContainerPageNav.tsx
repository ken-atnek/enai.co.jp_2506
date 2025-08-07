/* =======================================
 * 梨園 TOP ページナビゲーション
 * URL:src/components/top/ContainerPageNav.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-07-08
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Link01 from '@/assets/images/top/link01.webp';
import Link02 from '@/assets/images/top/link02.webp';
import Link03 from '@/assets/images/top/link03.webp';
import BanRecruit from '@/assets/images/top/ban-recruit.webp';
import BanRecruitMobile from '@/assets/images/top/ban-recruit-sp.webp';

const pageList = [
  {
    title: '梨園ので暮らし',
    image: Link01,
    description: '梨園での日々、主な生活の内容について',
    url: '/concept/',
  },
  {
    title: 'ご利用案内',
    image: Link02,
    description: '入居条件や利用料金、規制などについて',
    url: '/service/',
  },
  {
    title: '梨園のブログ',
    image: Link03,
    description: 'イベントや施設の日常、スタッフの日誌など',
    url: '/blog/',
  },
];

const ContainerPageNav = () => {
  return (
    <section className={styles.containerPageNav}>
      <article>
        <ul className={styles.listPage}>
          {pageList.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <Image src={item.image} alt={item.title} />
              <p>{item.description}</p>
              <Link href={item.url} className={styles.itemLink}>
                もっと見る
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/recruit/" className={styles.linkRecruit}>
          <span className={styles.wrapRecruitImage}>
            <Image
              src={BanRecruit}
              alt="採用情報"
              fill
              // sizes="(max-width: 768px) 0px, 100vw"
              className={styles.pcImage}
            />
            <Image
              src={BanRecruitMobile}
              alt="採用情報"
              fill
              // sizes="(max-width: 768px) 100vw, 0px"
              className={styles.spImage}
            />
          </span>
        </Link>
      </article>
    </section>
  );
};

export default ContainerPageNav;
