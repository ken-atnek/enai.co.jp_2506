/* =======================================
 * FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-06-13
 * Last updated: 2025-06-13
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';
import LogoEnai from '@/assets/images/logo-enai.webp';
import { navMenu } from '@/data/navMenuData';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <section className={styles.blockTop}>
        <article>
          <div className={styles.boxContact}>
            <p className={styles.textHead}>
              見学・入居のご検討など、お気軽にお問い合わせください。
            </p>
            <p className={styles.sidebarHead}>
              その他、梨園に関すること、合同会社縁合に関することなども下記連絡先までどうぞ。
            </p>
            <div className={styles.wrapTel}>
              <a href="tel:0968685222">0968-68-5222</a>
              <span>担当：藪内</span>
            </div>
            <div className={styles.workTime}>
              月曜日〜金曜日<span>9時〜18時</span>
            </div>
            <a href="mailto:contact@enai.co.jp" className={styles.itemMail}>
              contact@enai.co.jp
            </a>
            <Link href="#" className={styles.linkContact}>
              お問い合わせページへ
            </Link>
          </div>
          <div className={styles.boxShopInfo}>
            <Image src={Logo} alt="梨園" />
            <span>いにしえ通所介護事業所</span>
            <span>訪問介護事業所梨園</span>
            <span>梨園居宅介護支援事業所</span>
            <address>
              <span>〒864-0161</span>
              熊本県荒尾市菰屋2031番地8
            </address>
          </div>
        </article>
      </section>
      <section className={styles.blockBottom}>
        <nav>
          {navMenu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.itemLink} ${
                item.label === '採用情報' ? styles.recruit : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <article>
          <Image src={LogoEnai} alt="縁合" />
          <div className={styles.wrapShopInfo}>
            <div className={styles.itemName}>合同会社 縁合(えんあい)</div>
            <address>
              <span>〒864-0161</span>
              熊本県荒尾市菰屋2031番地8
            </address>
            <div className={styles.wrapTel}>
              <a href="tel:0968685222" className={styles.tel}>
                0968-68-5222
              </a>
              <a href="tel:0968685220" className={styles.fax}>
                0968-68-5220
              </a>
            </div>
            <div className={styles.works}>
              <span>いにしえ通所介護事業所</span>
              <span>訪問介護事業所梨園</span>
              <span>梨園居宅介護支援事業所</span>
            </div>
          </div>
        </article>
      </section>
      <div className={styles.copyright}>
        Copyright (C)Enai Co.,Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
