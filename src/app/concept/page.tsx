/* =======================================
 * 梨園について
 * URL:src/app/concept/page.tsx
 * Created: 2025-06-17
 * Last updated: 2025-06-17
 * ======================================= */

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageConcept.module.scss';
import Image from 'next/image';
import Block0201 from '@/assets/images/concept/block02-01.webp';
import Block0202 from '@/assets/images/concept/block02-02.webp';
import Block0203 from '@/assets/images/concept/block02-03.webp';
import Block0204 from '@/assets/images/concept/block02-04.webp';
import Block0205 from '@/assets/images/concept/block02-05.webp';
import Block0206 from '@/assets/images/concept/block02-06.webp';
import Block0301 from '@/assets/images/concept/block03-01.webp';
import Block0302 from '@/assets/images/concept/block03-02.webp';
import Block0303 from '@/assets/images/concept/block03-03.webp';
import Block0304 from '@/assets/images/concept/block03-04.webp';

import Link from 'next/link';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: '梨園について｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型有料老人ホーム 梨園の企業理念と経営方針をご紹介します。「信頼・誠実・挑戦」を柱に、地域社会とともに歩む企業としての想いを発信しています。',
  };
};
export default function ConceptPage() {
  return (
    <>
      <PageTitle title="梨園について" titleEn="ABOUT RIEN" />
      <section className={styles.containerConcept}>
        <article className={styles.blockTextOnly}>
          <h3>住宅型有料老人ホーム　梨園とは</h3>
          <p>
            いくつになっても学ぶ喜びを忘れることなく、生きがいを持ちつづけられるコミュニティ広場です。自立への日常生活支援と自己決定の自律を大切に「一人の生活者」として尊重・尊厳をもって寄り添っていきたいと考えております。
            また、住宅であることを踏まえ、良好な居住空間を形成し、毎日が安定したゆとりある生活ができるように作り上げていくことをホームの基本方針としております。
            ご質問、ご相談など、なんでもお気軽にお問い合わせください。
          </p>
        </article>
        <article className={styles.block02}>
          <h3>人にやさしいecoハウス</h3>
          <p>
            レンガ住宅は日本の風土に適合し、夏は涼しく冬は暖かい地球環境に配慮した住宅です。暖かなレンガの色彩にこだわり、誰もが立ち寄りたくなるホームをつくりあげました。
          </p>
          <div className={styles.listImage}>
            <Image src={Block0201} alt="お部屋" />
            <Image src={Block0202} alt="共有スペース" />
            <Image src={Block0203} alt="共有スペース2" />
            <Image src={Block0204} alt="お風呂" />
            <Image src={Block0205} alt="お食事" />
            <Image src={Block0206} alt="お食事2" />
          </div>
        </article>
        <article className={styles.block03}>
          <h3>人にやさしいecoハウス</h3>
          <p className={styles.sidebarH3}>ーいにしえ通所介護事業所ー</p>
          <p>
            利用者がデイサービスに通い、食事、入浴、排泄や機能訓練を受け、これ以外にもレクリエーションを楽しんだりして充実した時間を過ごしていただく介護施設サービスのことをいいます。自宅に閉じこもりがちなお年寄りに社交の場を提供し、いろいろな人たちのふれあいの場を提供することで、孤独の解消やストレスの軽減、精神面での維持向上を図ります。これに加え、毎日介護を行っている家族の負担軽減も大きな役割となります。
          </p>
          <div className={styles.boxDetails}>
            <div className={styles.wrap01}>
              <h4>タクティールケア</h4>
              <p>
                タクティールケア
                やわらかく包みこむように触れていくことで、さまざまな効果をもたらします。孤独感やストレスが和らぐ、血行が改善される、リラックスできる、よく眠れる、心地よい、落ち着きを取り戻すといった効果があります。言葉を交わさなくても、お互いの肌のぬくもりを感じることで信頼関係が生まれます。
              </p>
              <Image src={Block0301} alt="タクティールケア" />
              <Image src={Block0302} alt="タクティールケア2" />
            </div>
            <div className={styles.wrap02}>
              <h4>イベント</h4>
              <p>
                季節を体で感じ五感のはたらきを刺激します。その他に、ふじ棚・菖蒲園や絵画鑑賞など盛りだくさんの野外活動を計画しています
              </p>
              <Image src={Block0303} alt="タクティールケア" />
              <span>▲バラ園見学の様子</span>
            </div>
            <div className={styles.wrap03}>
              <h4>3時のおやつ</h4>
              <p>
                毎日、手作りのおやつを召し上がっていただいています。メニューはいろいろです。今日は何かな？
              </p>
              <Image src={Block0304} alt="3時のおやつ" />
            </div>
          </div>
          <div className={styles.wrapLink}>
            <Link href="/concept/day-service/" className="page-link">
              <span>デイサービスの詳細情報はこちら</span>
            </Link>
          </div>
        </article>
        <article className={styles.block03}>
          <h3>ヘルパーステーション</h3>
          <p className={styles.sidebarH3}>−訪問介護事業所　梨園−</p>

          <p>
            日常生活を営むのに支障がある方のご家庭を訪問して、日常生活のお世話をし、在宅での生活が快適にできるようにお手伝いをいたします。事業所では本人が自ら意欲的に実行していく「本人の望む生活」の実現が「自立支援」そのものと考え支援いたします。
          </p>
          <div className={styles.wrapLink}>
            <Link href="/concept/helper-station/" className="page-link">
              <span>ヘルパーステーションの詳細情報はこちら</span>
            </Link>
          </div>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>梨園　居宅介護支援事業所</h3>

          <p>
            利用者個人の特性に合わせた介護サービスの利用を利用者とともに計画作成します。本事業所は、次に掲げる基本方針に基づき事業を運営しております。
            <br />
            １．利用者が要介護状態になった場合においてもその利用者が可能な限りその居宅において、その有する能力に応じ自立した日常生活を営むことができるよう配慮する。
            <br />
            ２．利用者の心身の状況、そのおかれている環境等に応じて、利用者が選択に基づき、適切な保健医療サービス及び福祉サービスが、多様な事業から総合的かつ効果的に提供されるよう配慮する。
          </p>
          <div className={styles.wrapLink}>
            <Link href="/concept/home-care/" className="page-link">
              <span>居宅介護支援事業所の詳細情報はこちら</span>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
