/* =======================================
 * お問い合わせ
 * URL: src/app/contact/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-18
 * ======================================= */

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageContact.module.scss';

import Link from 'next/link';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: 'お問い合わせ｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型有料老人ホーム 梨園へのお問い合わせはこちらの専用フォームから承っております。ご質問・ご相談・求人に関するお問い合わせなど、お気軽にご連絡ください。。',
  };
};
export default function ContactPage() {
  return (
    <>
      <PageTitle title="お問い合わせ" titleEn="CONTACT US" />
      <section className={styles.containerContact}>
        <article className={styles.blockHead}>
          <p>
            入居のご相談、施設への疑問などなんでもお気軽にお問い合わせください。お問い合わせはお電話または電子メールにて承っております。お急ぎの方はお電話にてお問い合わせください。（担当：薮内）
          </p>
          <div className={styles.wrapTel}>
            <a href="tel:0968685222">0968-68-5222</a>
          </div>
          <div className={styles.workTime}>
            月曜日〜金曜日<span>9時〜18時</span>
          </div>
          <a href="mailto:contact@enai.co.jp" className={styles.itemMail}>
            contact@enai.co.jp
          </a>
        </article>
        <article className={styles.blockMap}>
          <h3>梨園の所在について</h3>
          <dl>
            <dt>所在地</dt>
            <dd>
              <span>〒８６４－０１６１</span>
              熊本県荒尾市菰屋２０３１番地８
            </dd>
          </dl>
          <div className={styles.boxMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7411.268466994655!2d130.4611569857684!3d32.96606186181013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540450e000e1847%3A0xa4c8b2468fa2cf6f!2z5L2P5a6F5Z6L5pyJ5paZ6ICB5Lq644Ob44O844Og5qKo5ZySKOOCiuOBiOOCkyk!5e0!3m2!1sja!2sjp!4v1749895722321!5m2!1sja!2sjp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a href="https://maps.app.goo.gl/evaHdnrCKXRHCJxQA" target="_blank">
              大きな地図でみる
            </a>
          </div>
        </article>
        <article className={styles.blockAboutUs}>
          <h3>運営について</h3>
          <p>
            住宅型有料老人ホーム 梨園（りえん）は、合同会社
            縁合（えんあい）により運営されております。
            <br />
            施設の運営、ならびに合同会社
            縁合に関するお問い合わせは０９６８－６８－５２２２（電話）
            <br />
            または
            <Link href="/about-enai/">縁合について</Link>をご覧ください。
          </p>
        </article>
      </section>
    </>
  );
}
