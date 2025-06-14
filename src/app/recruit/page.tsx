/* =======================================
 * 採用情報
 * URL: src/app/recruit/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageRecruit.module.scss';
import ImageHead01 from '@/assets/images/recruit/head01.webp';
import ImageHead02 from '@/assets/images/recruit/head02.webp';
import ImageHead03 from '@/assets/images/recruit/head03.webp';
import Image from 'next/image';
import Link from 'next/link';

export default function RecruitPage() {
  return (
    <>
      <PageTitle title="採用情報" titleEn="RECRUITING" />
      <section className={styles.containerRecruit}>
        <article className={styles.blockHead}>
          <h3>
            合同会社縁合(住宅型有料老人ホーム梨園)が平成30年度熊本県男女共同参画推進事業者【職場づくり部門】で受賞！
          </h3>
          <p>
            　合同会社縁合(住宅型有料老人ホーム梨園)が、平成30年度男女共同参画推進事業者【職場づくり部門】で、蒲島熊本県知事から表彰を受けました。
            <br />
            <br />
            合同会社縁合では、社員一人ひとりの状況を鑑み、勤務シフトの調整を行い、社員が休みやすい風土づくりに取り組んでいるため、年次有給休暇取得率が非常に高く、産休・育休取得の実績もあります。また、あらゆる作業手順の写真などを掲載し、マニュアル化しており、障がいのある社員にも理解しやすく、働きやすい環境にしています。
            <br />
            <br />
            このように、合同会社縁合では、男女ともにどんな人にとっても働きやすく、休みやすい職場を目指しております。
          </p>
          <div className={styles.boxImage}>
            <Image src={ImageHead01} alt="【職場づくり部門】で受賞" />
            <Image src={ImageHead02} alt="【職場づくり部門】で受賞" />
            <Image src={ImageHead03} alt="【職場づくり部門】で受賞" />
          </div>
        </article>
        <article className={styles.blockContents}>
          <h3>介護職員</h3>
          <div className={styles.boxDetails}>
            <dl>
              <dt>雇用形態</dt>
              <dd>正社員</dd>
            </dl>
            <dl>
              <dt>勤務地</dt>
              <dd>熊本県荒尾市</dd>
            </dl>
            <dl>
              <dt>給与</dt>
              <dd>
                ａ ＋ ｂ（固定残業代がある場合はａ ＋ ｂ ＋
                ｃ）145,000円〜165,000円
                基本給（ａ）基本給（月額平均）又は時間額 145,000円〜165,000円
                定額的に支払われる手当（ｂ）- 固定残業代（ｃ）なし
                その他の手当等付記事項（ｄ）・当直手当 5,500円/回 ・介護福祉士
                5,000円/月
              </dd>
            </dl>
            <dl>
              <dt>賞与</dt>
              <dd>あり 前年度実績 年3回・計 2.50ヶ月分(前年度実績)</dd>
            </dl>
            <dl>
              <dt>応募資格</dt>
              <dd>
                介護福祉士 必須 / ホームヘルパー2級 必須 /
                介護職員初任者研修修了者 必須 いずれかの資格を所持で可
                <br />
                普通自動車運転免許 必須(AT限定可)
              </dd>
            </dl>
            <dl>
              <dt>通勤</dt>
              <dd>
                手当：なし
                <br />
                マイカー通勤：可
              </dd>
            </dl>
            <dl>
              <dt>勤務時間</dt>
              <dd>
                変形労働時間制1ヶ月単位
                <br />
                1)8時30分〜17時30分
                <br />
                2)7時00分〜21時00分
                <br />
                3)17時00分〜9時00分
              </dd>
            </dl>
            <dl>
              <dt>休日休暇</dt>
              <dd>
                休日2日
                <br />
                ※シフトに応じた希望を取ります
                <br />
                夏季、年末年始、有休
                <br />
                その他 年間休日 : 107日
                <br />
                産休・育休取得実績あり。
                <br />
                男女共に働きやすい職場を目指しています。
              </dd>
            </dl>
            <dl>
              <dt>雇用期間</dt>
              <dd>雇用期間の定めなし</dd>
            </dl>
            <dl>
              <dt>特記事項</dt>
              <dd>
                *免許・資格・経験・技能等により支給金額を考慮する。
                総支給額:170,000円~190,000円程度
                <br />
                *就業時間は4週単位1ヶ月変形制
                <br />
                *デイサービスの就業時間:(1) 当直時(3)
              </dd>
            </dl>
          </div>
          <Link href="/contact/" className={styles.linkContact}>
            応募する
          </Link>
        </article>
        <article className={styles.blockContents}>
          <h3>看護師(正・准)</h3>
          <div className={styles.boxDetails}>
            <dl>
              <dt>雇用形態</dt>
              <dd>正社員</dd>
            </dl>
            <dl>
              <dt>勤務地</dt>
              <dd>熊本県荒尾市</dd>
            </dl>
            <dl>
              <dt>給与</dt>
              <dd>
                ａ ＋ ｂ（固定残業代がある場合はａ ＋ ｂ ＋
                ｃ）183,000円〜197,000円
                基本給（ａ）基本給（月額平均）又は時間額 175,000円〜185,000円
                定額的に支払われる手当（ｂ）資格手当 8,000円〜12,000円
                固定残業代（ｃ）なし その他の手当等付記事項（ｄ）・当直手当
                5,500円/回
              </dd>
            </dl>
            <dl>
              <dt>賞与</dt>
              <dd>あり 前年度実績 年3回・計 2.50ヶ月分(前年度実績)</dd>
            </dl>
            <dl>
              <dt>応募資格</dt>
              <dd>
                看護師 必須 / 准看護師 必須 いずれかの資格を所持で可
                <br />
                普通自動車運転免許 必須(AT限定可)
              </dd>
            </dl>
            <dl>
              <dt>通勤</dt>
              <dd>
                手当：なし
                <br />
                マイカー通勤：可
              </dd>
            </dl>
            <dl>
              <dt>勤務時間</dt>
              <dd>
                変形労働時間制1ヶ月単位
                <br />
                1)8時30分〜17時30分
                <br />
                2)7時00分〜21時00分
                <br />
                3)17時00分〜9時00分
              </dd>
            </dl>
            <dl>
              <dt>休日休暇</dt>
              <dd>
                休日2日
                <br />
                ※シフトに応じた希望を取ります
                <br />
                夏季、年末年始、有休
                <br />
                その他 年間休日 : 107日
                <br />
                産休・育休取得実績あり。
                <br />
                男女共に働きやすい職場を目指しています。
              </dd>
            </dl>
            <dl>
              <dt>雇用期間</dt>
              <dd>雇用期間の定めなし</dd>
            </dl>
            <dl>
              <dt>特記事項</dt>
              <dd>
                *免許・資格・経験・技能等により支給金額を考慮する。
                総支給額は:190,000円~200,000円程度
                <br />
                *夜間当直時は責任者が近くにおりますので、すぐ連絡できる
                体制にしています。
              </dd>
            </dl>
          </div>
          <Link href="/contact/" className={styles.linkContact}>
            応募する
          </Link>
        </article>
      </section>
    </>
  );
}
