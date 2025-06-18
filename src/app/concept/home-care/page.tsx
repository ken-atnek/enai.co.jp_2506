/* =======================================
 * 居宅介護支援事業所
 * URL:src/app/concept/day-service/page.tsx
 * Created: 2025-06-17
 * Last updated: 2025-06-18
 * ======================================= */

import styles from '@/styles/PageDayService.module.scss';
import Link from 'next/link';
import ExternalLink from '@/components/common/ExternalLink';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: '居宅介護支援事業所｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型の有料老人ホーム「梨園」は、熊本県荒尾市にある介護施設・有料老人ホームです。梨園は、住宅型の老人ホームであるため居住空間は快適で、一人の生活者として尊重・尊厳をもって寄り添っていきたいと考えております。 なお介護職・介護スタッフも募集中です。',
  };
};
export default function HomeCarePage() {
  return (
    <>
      <section className={styles.containerDetailTitle}>
        <article>
          <nav className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <Link href="/concept/">梨園について</Link>
            <span>居宅介護支援事業所</span>
          </nav>
          <p className={styles.titleEn}>HELPER STATION</p>
          <h3>居宅介護支援事業所</h3>
        </article>
      </section>
      <section className={styles.containerDayService}>
        <article className={styles.block01}>
          <h3>居宅介護支援事業所とは</h3>
          <p>
            利用者個人の特性に合わせた介護サービスの利用を利用者とともに計画作成します。本事業所は、次に掲げる基本方針に基づき事業を運営しております。
            <br />
            <br />
            １．利用者が要介護状態になった場合においてもその利用者が可能な限りその居宅において、その有する能力に応じ自立した日常生活を営むことができるよう配慮する。
            <br />
            <br />
            ２．利用者の心身の状況、そのおかれている環境等に応じて、利用者が選択に基づき、適切な保健医療サービス及び福祉サービスが、多様な事業から総合的かつ効果的に提供されるよう配慮する。
          </p>
          <div className={styles.boxDetailsList}>
            <dl>
              <dt>事業所名</dt>
              <dd>梨園 居宅介護支援事業所</dd>
            </dl>
            <dl>
              <dt>介護サービスの種類</dt>
              <dd>居宅介護支援</dd>
            </dl>
            <dl>
              <dt>サービス提供地域</dt>
              <dd>荒尾市　長洲町　大牟田市　玉名市</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>
                <address>
                  <span>〒８６４－０１６１</span>
                  熊本県荒尾市菰屋２０３１番地８
                </address>
              </dd>
            </dl>
            <dl>
              <dt>電話番号</dt>
              <dd>
                <a href="tel:0968685222">０９６８－６８－５２２２</a>
              </dd>
            </dl>
            <dl>
              <dt>ファックス</dt>
              <dd>
                <a href="tel:0968685220">０９６８－６８－５２２０</a>
              </dd>
            </dl>
          </div>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>個人情報の取り扱いについて</h3>
          <p>
            当社では、利用者の個人情報を適正に取り扱うことは、介護サービスに携わる者の重大な責務であると考え、介護保険事業者として高い職業倫理感をもって業務を進めてまいります。
            <br />
            <br />
            また、個人情報に関するリスクには合理的な管理策を構築し、維持向上させるために以下に示す個人情報保護方針を定め、この方針を具体的に実施するための個人情報保護マネージメントシステムを確実に運用致します。
          </p>
          <ExternalLink
            href="/pdf/privacy-policy.pdf"
            aria-label="個人情報の取り扱いに関する基本方針（PDFが開きます）"
          >
            個人情報の取り扱いに関する基本方針（PDF: 120KB）
          </ExternalLink>
        </article>
      </section>
    </>
  );
}
