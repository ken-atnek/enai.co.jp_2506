/* =======================================
 * 梨園 TOP
 * URL: src/app/page.tsx
 * Created: 2025-06-13
 * Last updated: 2025-07-08
 * ======================================= */
import ContainerFadeImage from '@/components/top/ContainerFadeImage';
import styles from '@/styles/PageTop.module.scss';
import { navMenu } from '@/data/navMenuData';
import NewsList from '@/components/news/NewsList';
import { newsData } from '@/data/newsData';
import BlogList from '@/components/blog/BlogList';
import { blogData } from '@/data/blogData';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContainerPageNav from '@/components/top/ContainerPageNav';
export const generateMetadata = (): Metadata => {
  return {
    title: '住宅型有料老人ホーム 梨園',
    description:
      '住宅型の有料老人ホーム「梨園」は、熊本県荒尾市にある介護施設・有料老人ホームです。梨園は、住宅型の老人ホームであるため居住空間は快適で、一人の生活者として尊重・尊厳をもって寄り添っていきたいと考えております。 なお介護職・介護スタッフも募集中です。',
  };
};

export default function Home() {
  return (
    <>
      <ContainerFadeImage />
      <section className={styles.containerMenu}>
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
          <h2>「その人らしさ」を目指して</h2>
          <p>
            私たちは、高齢者の方にも、障害を持つすべての人たちが可能な限り地域でくらしていける共生社会の実現を目指します。いつまでも心豊かな人生を営むことができるように、利用者一人一人の行き方を尊重し、日々の生活を楽しく過ごすことができるように支援いたします。
          </p>
        </article>
      </section>
      <section className={styles.containerGreeting}>
        <article>
          <h2>梨園への思い</h2>
          <h3>『その人らしさを目指して』</h3>
          <p>
            　以前、勤めていた認知症治療病棟では、混乱が収まり帰宅を許されても戻る場所が無く、社会と途絶される方をたくさん見てきました。そんな中、今のキャリアを生かせるケアが提供できる中間施設を始めてみたいと、思い立ったのが梨園でした。
            <br />
            梨園の名前の由来は、『昔の中国で梨の木が植えてある園庭に集められて芸事を学んだ』ことにあやかり、私なりに解釈したのが、『いくつになっても教えを乞う諦めない人生で楽しんでほしい』と考え付けた名前です。
            <br />
            現在も、理想的なケアを行うために、利用者や家族、仲間たちのために奮闘している日々を送っていますが、忘れてはいけないことが一つあります。
            それは、自分自身へのねぎらいを忘れずに、一日数分でも自分自身が心地よいと思える時間を意識的に作る事です。
            <br />
            そうすれば、仲間との良好な関係性が築き上げられ、仕事に楽しく取り組むことが出き、個々にあった『その人らしく』を目指すケアが出来るのです。
            <br />
            これからも、質の良いケアの提供と心情的ケアを大切に地域に根差した梨園であるように精進してまいります。
          </p>
          <br />
          <span>合同会社　縁合</span>
          <span>代表社員　藪内　佳代子</span>
          <div className={styles.pageLink}>
            <Link href="/concept/" className="page-link">
              <span>梨園について</span>
            </Link>
          </div>
        </article>
      </section>
      <section className={styles.containerNews}>
        <article>
          <div className={styles.boxH2}>
            <p className={styles.sidebarH2}>NEWS・UPDATE INFORMATION</p>
            <h2>お知らせ・更新情報</h2>
          </div>
          <NewsList items={newsData.slice(0, 1)} />
          <Link href="/news/" className={styles.linkPage}>
            お知らせ・更新情報
          </Link>
        </article>
      </section>
      <section className={styles.containerBlog}>
        <article>
          <div className={styles.boxH2}>
            <p className={styles.sidebarH2}>blog</p>
            <h2>ブログ</h2>
          </div>
          <BlogList items={blogData.slice(0, 3)} />
          <Link href="/blog/" className={styles.linkPage}>
            ブログ一覧
          </Link>
        </article>
      </section>
      <ContainerPageNav />
    </>
  );
}
