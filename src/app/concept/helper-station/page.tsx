/* =======================================
 * 訪問介護事業所 梨園
 * URL:src/app/concept/day-service/page.tsx
 * Created: 2025-06-17
 * Last updated: 2025-06-17
 * ======================================= */

import styles from '@/styles/PageDayService.module.scss';
import Image from 'next/image';
import Block0101 from '@/assets/images/concept/helper-station/block01-01.webp';

import Link from 'next/link';
import ExternalLink from '@/components/common/ExternalLink';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: '訪問介護事業所 梨園｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型の有料老人ホーム「梨園」は、熊本県荒尾市にある介護施設・有料老人ホームです。梨園は、住宅型の老人ホームであるため居住空間は快適で、一人の生活者として尊重・尊厳をもって寄り添っていきたいと考えております。 なお介護職・介護スタッフも募集中です。',
  };
};
export default function HelperStationPage() {
  return (
    <>
      <section className={styles.containerDetailTitle}>
        <article>
          <nav className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <Link href="/concept/">梨園について</Link>
            <span>訪問介護事業所 梨園</span>
          </nav>
          <p className={styles.titleEn}>HELPER STATION</p>
          <h3>訪問介護事業所 梨園</h3>
        </article>
      </section>
      <section className={styles.containerDayService}>
        <article className={styles.block01}>
          <h3>訪問介護事業所 梨園とは</h3>
          <div className={styles.boxContents}>
            <p>
              日常生活を営むのに支障がある方のご家庭を訪問して、日常生活のお世話をおこない在宅での生活が快適にできるようにお手伝いをいたします。
              <br />
              <br />
              事業所では、本人が自ら意欲的に実行していく「本人の望む生活」の実現が、「自立支援」そのものと考え支援いたします。
              <br />
              <br />
              訪問介護事業所 梨園は介護職員等特定処遇改善加算取得しています。
            </p>
            <figure>
              <Image
                src={Block0101}
                alt="訪問介護事業所 梨園 スタッフ集合写真"
              />
              <figcaption>▲訪問介護事業所 梨園 スタッフ集合写真</figcaption>
            </figure>
          </div>
          <div className={styles.boxDetailsList}>
            <dl>
              <dt>事業所名</dt>
              <dd>訪問介護事業所 梨園</dd>
            </dl>
            <dl>
              <dt>介護サービスの種類</dt>
              <dd>訪問介護</dd>
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
          <h3>従業員より皆様へ</h3>
          <p>
            決して若い職員とは言えませんが、油ののった熟年パワーで思いやりと気遣いを大切にしています。また、ケアに対しては妥協はせず、いつも真摯な態度で望んでいます。
          </p>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>利用者様について</h3>
          <p>
            利用者の平均年齢８７．３歳です。独居暮らしの不安はありますが、マイナスな面よりもプラス面を重視した生活が送れるよう努力されています。足腰の筋力低下があっても、“病院ぐらいは誰の世話にもならず自分で行く”“畑をもう一度耕したい”などと、自分なりの目標を掲げ日常生活の中にも変化が表れています。できることに着目し社会参加を支援することで、身体機能が低下していても生活機能が向上されています。
          </p>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>サービスに関する補足</h3>
          <p>
            利用者本位の尊重は言うまではありませんが、ただ利用者の自己中心的主張や要求を受け入れるだけではなく、“どう暮らしたいのか、どう生きたいのか”このために現状を認識し何が必要なのかを共に考え、利用者の潜在能力を生かした自己選択ができる情報を提供しつつ、自己決定ができるよう支援を行っています。幾つになっても自己獲得の権利を奪われることなく、職業倫理を遵守しながら利用者本人が住み慣れた地域で、自分らしく生きられる支援ができる信頼関係を築けるように日々努力しています。
            <br />
            <br />
            最後に、「ケアプランは生もの」だと教えを頂いたことを忘れず、必要なサービスを必要な時に必要な量だけ適切な方法で提供できる細やかなケアを目指しています。
          </p>
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
