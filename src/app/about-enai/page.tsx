/* =======================================
 * 縁合について
 * URL:src/app/about-enai/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageAboutEnai.module.scss';
import Image from 'next/image';
import ImageList01 from '@/assets/images/about-enai/list01.webp';
import ImageList02 from '@/assets/images/about-enai/list02.webp';
import ImageList03 from '@/assets/images/about-enai/list03.webp';
import ImageList04 from '@/assets/images/about-enai/list04.webp';
import ImageList05 from '@/assets/images/about-enai/list05.webp';
import ImageList06 from '@/assets/images/about-enai/list06.webp';
import Link from 'next/link';
import ExternalLink from '@/components/common/ExternalLink';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: '縁合について｜合同会社 縁合',
    description:
      '縁合（えんあい）は、住宅型有料老人ホーム 梨園（りえん）、訪問介護事業所 梨園、いにしえ通所介護事業所、梨園 居宅介護支援事業所を運営する合同会社です。',
  };
};
export default function AboutEnaiPage() {
  return (
    <>
      <PageTitle title="縁合について" titleEn="ABOUT US" />
      <section className={styles.containerAboutEnai}>
        <article className={styles.blockHead}>
          <p>
            縁合（えんあい）は、住宅型有料老人ホーム
            梨園（りえん）、訪問介護事業所 梨園、いにしえ通所介護事業所、梨園
            居宅介護支援事業所を運営する合同会社です。
          </p>

          <div className={styles.boxDetailsList}>
            <dl>
              <dt>法人名</dt>
              <dd>合同会社　縁合</dd>
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
          <p>
            合同会社縁合が平成30年度熊本県男女共同参画推進事業者【職場づくり部門】で受賞されました。
            <br />
            合同会社縁合は男女ともに、そして子育て中の方や障がい者の方などどんな人にとっても働きやすい職場を目指しています。
          </p>
          <div className={styles.wrapLink}>
            <ExternalLink
              href="https://www.city.arao.lg.jp/oshirase/shisei/shisaku/danjyo-kyodo/page11779.html"
              className="page-link"
            >
              <span>詳しく見る</span>
            </ExternalLink>
            <p>※外部サイトに移動します。</p>
          </div>
        </article>
        <article className={styles.blockFacilityOverview}>
          <h3>施設概要</h3>
          <div className={styles.boxDetailsList}>
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
              <dt>代表</dt>
              <dd>藪内　佳代子</dd>
            </dl>
            <dl>
              <dt>敷地概要</dt>
              <dd className={styles.wrapDetail}>
                <div className={styles.itemDetail}>
                  梨　園Ⅰ<span>995.76㎡</span>
                </div>
                <div className={styles.itemDetail}>
                  梨　園Ⅱ<span>2806.33㎡</span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>建物概要</dt>
              <dd className={styles.wrapDetail}>
                <div className={styles.itemDetail}>
                  梨　園Ⅰ<span>499.54㎡</span>
                </div>
                <div className={styles.itemDetail}>
                  梨　園Ⅱ<span>2806.33㎡</span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>部屋数</dt>
              <dd className={styles.wrapDetail}>
                <div className={styles.itemDetail}>
                  梨　園Ⅰ<span>20室</span>
                </div>
                <div className={styles.itemDetail}>
                  梨　園Ⅱ<span>16室</span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>部屋面積</dt>
              <dd className={styles.wrapDetail}>
                <div className={styles.itemDetail}>
                  梨　園Ⅰ<span>12.42㎡</span>
                </div>
                <div className={styles.itemDetail}>
                  梨　園Ⅱ<span>13.5㎡</span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>併発施設</dt>
              <ul>
                <li>
                  訪問介護事業所　梨園
                  <Link href="/concept/helper-station/">詳細情報を見る</Link>
                </li>
                <li>
                  いにしえ通所介護事業所
                  <Link href="/concept/day-service/">詳細情報を見る</Link>
                </li>
                <li>
                  梨園　居宅介護支援事業所
                  <Link href="/concept/home-care/">詳細情報を見る</Link>
                </li>
              </ul>
            </dl>
            <dl>
              <dt>有資格者</dt>
              <dd>
                <ul>
                  <li>看護師：常勤６名　非常勤４名</li>
                  <li>介護福祉士：９名　非常勤３名</li>
                  <li>ヘルパー２級：常勤５名　非常勤３名</li>
                  <li>介護支援専門員：主任１名専従　その他２名</li>
                  <li>社会福祉士：１名</li>
                  <li>精神福祉士：１名</li>
                  <li>認知症ケア上級専門士：２名</li>
                  <li>認知症ケア専門士：２名</li>
                  <li>保育士：２名</li>
                  <li>美容師：２名</li>
                  <li>栄養士：１名</li>
                  <li>調理師：２名</li>
                </ul>
                <p>※上記の免許・資格保有者は重複しています。</p>
              </dd>
            </dl>
          </div>
          <div className={styles.listImage}>
            <Image src={ImageList01} alt="施設画像" />
            <Image src={ImageList02} alt="施設画像" />
            <Image src={ImageList03} alt="施設画像" />
            <Image src={ImageList04} alt="施設画像" />
            <Image src={ImageList05} alt="施設画像" />
            <Image src={ImageList06} alt="施設画像" />
          </div>
          <p className={styles.announce}>
            梨園は周囲を梨畑に囲まれ、４月には白い花が満開となります。
          </p>
        </article>
      </section>
    </>
  );
}
