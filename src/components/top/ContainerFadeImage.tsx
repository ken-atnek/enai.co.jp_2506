/* =======================================
 * TOP スライド
 * URL:src/components/ContainerFadeImage.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-13
 * Last updated: 2025-06-13
 * ======================================= */
'use client';
import styles from '@/styles/PageTop.module.scss';
import { useEffect, useState } from 'react';
import Logo from '@/assets/images/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
const fadeImages = [
  '/images/fade/fade01.webp',
  '/images/fade/fade02.webp',
  '/images/fade/fade03.webp',
  '/images/fade/fade04.webp',
];

const ContainerFadeImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fadeImages.length);
    }, 5000); // ←秒ごとに切り替え

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.containerFadeImage}>
      {fadeImages.map((src, index) => (
        <div
          key={index}
          className={`${styles.slideImage} ${index === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className={styles.boxTitle}>
        <div className={styles.itemLogo}>
          <Image src={Logo} alt="梨園" />
          <span>住宅型老人ホーム 梨園</span>
        </div>
        <nav>
          <Link href="/blog/" className={styles.itemLink}>
            梨園のブログ
          </Link>
          <Link href="#" className={styles.itemLink}>
            縁合について
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default ContainerFadeImage;
