/* =======================================
 * いにしえ通所介護事業所
 * URL:src/app/concept/day-service/page.tsx
 * Created: 2025-06-17
 * Last updated: 2025-06-17
 * ======================================= */

import styles from '@/styles/PageDayService.module.scss';
import Image from 'next/image';
import Block0101 from '@/assets/images/concept/day-service/block01-01.webp';
import Block0201 from '@/assets/images/concept/day-service/block02-01.webp';
import Block0202 from '@/assets/images/concept/day-service/block02-02.webp';
import Block0203 from '@/assets/images/concept/day-service/block02-03.webp';
import Link from 'next/link';
import ExternalLink from '@/components/common/ExternalLink';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: 'いにしえ通所介護事業所｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型の有料老人ホーム「梨園」は、熊本県荒尾市にある介護施設・有料老人ホームです。梨園は、住宅型の老人ホームであるため居住空間は快適で、一人の生活者として尊重・尊厳をもって寄り添っていきたいと考えております。 なお介護職・介護スタッフも募集中です。',
  };
};
export default function DayServicePage() {
  return (
    <>
      <section className={styles.containerDetailTitle}>
        <article>
          <nav className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <Link href="/concept/">梨園について</Link>
            <span>いにしえ通所介護事業所</span>
          </nav>
          <p className={styles.titleEn}>DAY SERVICE</p>
          <h3>いにしえ通所介護事業所</h3>
        </article>
      </section>
      <section className={styles.containerDayService}>
        <article className={styles.block01}>
          <h3>いにしえ通所介護事業所とは</h3>
          <div className={styles.boxContents}>
            <div className={styles.wrapText}>
              <p>
                利用者の心身の特性を踏まえて、その利用者が可能な限りその居宅において、その有する能力に応じ自立した日常生活を営むことができるよう支援いたします。
                <br />
                <br />
                更に利用者の社会的孤立感の解消及び心身機能の維持並びに利用者の家族の身体的・精神的負担の軽減を図るために、必要な日常生活上のお世話及び機能訓練等の介助とその他必要な援助を行います。
                <br />
                <br />
                事業の実施に当たっては、地域との結びつきを重視し、関係市町村、他の居宅サービス事業者その他の保健医療サービス及び福祉サービスを提供するものとの綿密な連携を図り、総合的なサービスの提供に努めます。
                <br />
                <br />
              </p>
              <ExternalLink href="/pdf/250922.pdf" className={styles.linkPdf}>
                <span>
                  いにしえ地域密着型通所介護事業所
                  <br className="sp" />
                  利用サービス重要事項説明書
                </span>
              </ExternalLink>
            </div>
            <figure>
              <Image src={Block0101} alt="デイサービス集合写真" />
              <figcaption>▲デイサービス集合写真</figcaption>
            </figure>
          </div>
          <div className={styles.boxDetailsList}>
            <dl>
              <dt>事業所名</dt>
              <dd>いにしえ通所介護事業所</dd>
            </dl>
            <dl>
              <dt>介護サービスの種類</dt>
              <dd>地域密着型サービス</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>
                <address>
                  <span>〒８６４－０１６１</span>
                  荒尾市菰屋２０３１番地１０－２
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
        <article className={styles.block02}>
          <h3>サービスの特色</h3>
          <p>
            １日のご利用者数１８名の地域密着型サービスです。スタッフの細やかな気配りでお一人一人の尊厳を大切にした対応を心がけています。また日常生活の中で行う機能訓練は、残存機能の維持と向上へと繋がりを見せています。身体の痛みの緩和や精神的な安定を図るために、週に1回のタクティールケアとヘッドマッサージを取り入れていいます。
            現在、特に力を入れているのが、沢山の刺激を感じて頂くことです。そのため、地域の方達とのふれあいや自然との共存を目指し季節感をできるだけ五感で感じられるように日々工夫を致しております。
            ※地域密着型サービスとは、高齢者が要介護状態になっても可能な限り住み慣れた自宅や地域で生活を継続できるようにするためのサービスです。（原則として市町村の住民及び被保険者の実が利用可能）ただし、住所地特例者にについては別条件となります。
          </p>
          <div className={styles.listImage}>
            <Image src={Block0201} alt="いにしえ通所介護事業所" />
            <Image src={Block0202} alt="いにしえ通所介護事業所" />
            <Image src={Block0203} alt="いにしえ通所介護事業所" />
          </div>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>従業員より皆様へ</h3>
          <p>
            看護師８名、介護福祉士４名、保育士１名、その他の資格として介護支援専門員２名、認知症介護実践者研修終了２名、認知症ケア専門士２名（うち１名は上級者）と十分なサービス提供ができる専門スタッフが揃っています。人と人との関わりの中で、色々な年齢層に合わせることができる優れた職員の職能意識は、利用者の尊厳を尊重すると共に、家族の介護負担も軽減できるよう日々支援のあり方を模索しております。「その人らしく」生涯を送って頂くことが、一番の喜びと考えています。
          </p>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>利用者様について</h3>
          <p>
            最高年齢１０１歳の女性から大正生まれの方が４０人中２０人、６０歳代の方もいらっしゃいますので、平均年齢は、８８歳となります。皆さんお元気にレクリエーションに参加されています。運動公園でのウォーキングコースでは、歩行器やシルバーカー等を使用し一生懸命に歩かれています。食事に関しては、お昼ごはんの手作りラーメン定食が人気で、残さずペロリと召し上がります。食欲だけを見ていますと、まだまだ青年の方たちみたいに錯覚することもしばしばです。
            <br />
            <br />
            活動的な面で一番活気づくのが、紅白対抗の運動会です。高齢になっても対抗戦となると、是が非でも勝ちたいという気持ちが前面に現れ、気分の高揚を抑えることが出来ない程エキサイトしています。いつ何時でも、生きていることに感謝しながら“アァ～楽しかった・・・”と思える毎日を上手に過ごしていらっしゃいます。
          </p>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>サービスに関する補足</h3>
          <p>
            地域の方たちと共に活動の輪を広め、地域に根付いた通所介護サービスを心がけています。
            <br />
            <br />
            事業所内だけでのレクリェーションに留まることなく、踊りや歌にマジックショー、手芸等芸術参加と、運動会や餅つき大会など沢山の事に地域のボランテイアの方達に参加して頂いています。運動会では、地域の小学生のソーラン節の参加もあり大賑わいでした。生活の中から自分の力に応じた機能訓練が出来ることを理解して頂き、明るく楽しいそして互いに思いやりのある事業所でありたいと考えています。
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
        <article className={styles.blockTextOnly}>
          <h3>身体拘束ゼロ宣言について</h3>
          <p>
            私たちは、身体拘束が人権擁護の観点から問題があるだけではなく、高齢者のQOL（生活の質）を根本から損なう危険性があることを認識し、すべての人の人格が尊重された利用者本位のより良いケアを実現するために、身体拘束ゼロに向けて取り組むことを宣言します。
          </p>
          <ExternalLink
            href="/pdf/zero-sengen.pdf"
            aria-label="身体拘束ゼロ宣言（PDFが開きます）"
          >
            身体拘束ゼロ宣言（PDF: 120KB）
          </ExternalLink>
        </article>
      </section>
    </>
  );
}
