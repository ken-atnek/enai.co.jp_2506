/* =======================================
 * 料金・サービス
 * URL:src/app/service/page.tsx
 * Created: 2025-06-16
 * Last updated: 2025-06-18
 * ======================================= */

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageService.module.scss';
import Image from 'next/image';
import block01Image from '@/assets/images/service/service-image.webp';
import ExternalLink from '@/components/common/ExternalLink';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: '料金・サービス｜住宅型有料老人ホーム 梨園',
    description:
      '住宅型有料老人ホーム 梨園では、建物清掃・設備管理・警備業務など、快適な環境づくりを支える多様なサービスを提供しています。信頼と実績で地域社会に貢献します。',
  };
};
export default function ServicePage() {
  return (
    <>
      <PageTitle title="料金・サービス" titleEn="SERVICES & FEE" />
      <section className={styles.containerService}>
        <article className={styles.block01}>
          <h3>「住宅型有料老人ホーム」とは</h3>
          <p>
            住宅型有料老人ホームは食事などのサービスが付いた居住施設ですが、介護サービスはありません。入居対象者（要介護１以上）は、居宅サービス（訪問介護・通所介護）から介護サービスを提供してもらいます。その場合、介護サービスは有料となります。
          </p>
          <Image src={block01Image} alt="「住宅型有料老人ホーム」とは" />
        </article>
        <article className={styles.block02}>
          <h3>利用対象者</h3>
          <ul>
            <li>１．入居時要介護１以上（概ね６５歳以上）</li>
            <li>２．共同生活を送ることに支障のない方</li>
            <li>３．身元引受人・連帯保証人を立てることができる方</li>
          </ul>
        </article>
        <article className={styles.block03}>
          <h3>運営について</h3>
          <div className={styles.detailList}>
            <h4>Ⅰ号館</h4>
            <dl>
              <dt>入居金</dt>
              <dd>200,000円</dd>
            </dl>
            <dl>
              <dt>内訳</dt>
              <dd>200,000円は敷金としてお預かりいたします。</dd>
            </dl>
            <dl>
              <dt>月額利用費</dt>
              <dd>109,700円</dd>
            </dl>
            <dl>
              <dt>内訳</dt>
              <dd className={styles.itemDetails}>
                <h5>家　賃</h5>
                <span>50,000円</span>
                <h5>食　事</h5>
                <span>41,100円</span>
                <h5>管理費</h5>
                <span>18,600円</span>
              </dd>
            </dl>
            <p>
              ※光熱費を別途徴収　1,500円／月（夏期：7月～9月、冬期：12月〜3月）
            </p>
            <p>
              ※その他、介護保険サービス利用料、医療費、オムツ代など実費（日常に関わる消耗品や衛生材料なども個人購入となります）
            </p>
          </div>
          <div className={styles.detailList}>
            <h4>Ⅱ号館</h4>
            <dl>
              <dt>入居金</dt>
              <dd>200,000円</dd>
            </dl>
            <dl>
              <dt>内訳</dt>
              <dd>200,000円は敷金としてお預かりいたします。</dd>
            </dl>
            <dl>
              <dt>月額利用費</dt>
              <dd>130,000円</dd>
            </dl>
            <dl>
              <dt>内訳</dt>
              <dd className={styles.itemDetails}>
                <h5>家　賃</h5>
                <span>55,000円</span>
                <h5>食　事</h5>
                <span>41,100円</span>
                <h5>光熱費</h5>
                <span>10,000円</span>
                <h5>管理費</h5>
                <span>23,900円</span>
              </dd>
            </dl>
            <p>
              ※その他、介護保険サービス利用料、医療費、オムツ代など実費（日常に関わる消耗品や衛生材料なども個人購入となります）
            </p>
          </div>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>老人ホーム利用料のお支払いについて</h3>
          <p>
            月額利用料を、毎月末日までに、その翌月分を事業者の指定する口座に振り込んで支払うか、または自動引き落とし、もしくは直接持参して支払うものとします。
          </p>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>介護保険利用料のお支払いについて</h3>
          <p>
            入居者の希望により提供した各種生活支援などの介護保険利用料金などについては、前月分を翌月の１０日までに入居者宛に費用項目の明細を付して請求します。入居者は前月分を翌月末日までに事業者の指定する口座に振り込んで支払うか、または自動引き落とし、もしくは直接持参して支払うものとします。
          </p>
        </article>
        <article className={styles.blockTextOnly}>
          <h3>入居お手続きの流れについて</h3>
          <p>
            以下の【ご入居のしおり】から詳しくご覧になれます。何かご不明な点、必要事項ございましたら、お気軽にお問い合わせください。
          </p>
          <ExternalLink
            href="/pdf/rien.pdf"
            aria-label="ご入園のしおり（PDFが開きます）"
          >
            【ご入園のしおり】
          </ExternalLink>
        </article>
      </section>
    </>
  );
}
