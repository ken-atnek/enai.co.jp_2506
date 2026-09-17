# SEO設定メモ

このファイルは、縁合・梨園サイトの現在のSEO実装と確認事項を管理します。記載日時点のコードを基準とし、未確認事項を推測で確定しません。

## サイト基本情報

- サイト名: 住宅型有料老人ホーム 梨園
- 運営: 合同会社 縁合
- 公開URL: `https://enai.co.jp/`
- デモURL: `https://demo-enai.tuna-pic.co.jp/`
- 言語: 日本語
- 出力方式: Next.js静的書き出し
- OGP画像: `public/images/ogp.jpg`
- favicon: `public/favicon.ico`

## 現在の共通設定

`src/lib/env.ts` に環境判定とサイト情報を集約し、`src/app/layout.tsx` から参照しています。

- `NEXT_PUBLIC_IS_REAL_PROD === "true"` の時だけ本番SEOを有効化
- 本番時のみ `metadataBase`、Open Graph、Twitter Cardを設定
- 本番時は `index, follow`
- それ以外は `noindex, nofollow`
- 共通titleとdescription
- 静的ページごとのcanonical
- トップページに合同会社 縁合のOrganization構造化データ
- favicon

ビルドコマンド:

- デモ: `npm run build:demo`
- 本番: `npm run build:prod`

デモビルドでは `NEXT_PUBLIC_METADATA_BASE=https://demo-enai.tuna-pic.co.jp/` を設定しますが、インデックス制御は `noindex, nofollow` のままにします。

## ページ別metadata

| ページ | パス | 状態 | メモ |
|---|---|---|---|
| トップ | `/` | 設定あり | title / description |
| お知らせ一覧 | `/news/` | 設定あり | title / description |
| お知らせ詳細 | `/news/detail/?id=...` | 汎用設定あり | 記事ごとのmetadata / canonicalは未設定 |
| 梨園について | `/concept/` | 設定あり | title / description |
| 通所介護 | `/concept/day-service/` | 設定あり | title / description |
| 訪問介護 | `/concept/helper-station/` | 設定あり | title / description |
| 居宅介護支援 | `/concept/home-care/` | 設定あり | title / description |
| 料金・サービス | `/service/` | 設定あり | title / description |
| ブログ一覧 | `/blog/` | 設定あり | title / description |
| ブログ詳細 | `/blog/detail/?id=...` | 汎用設定あり | 記事ごとのmetadata / canonicalは未設定 |
| 採用情報 | `/recruit/` | 設定あり | title / description |
| 応募フォーム | `/form/` | 設定あり | Server Layoutからmetadataを公開 |
| お問い合わせ | `/contact/` | 設定あり | title / description |
| 縁合について | `/about-enai/` | 設定あり | title / description |

## robots・sitemap

- `src/app/robots.ts` と `src/app/sitemap.ts` から静的生成する
- デモではrobotsを全拒否し、sitemapを空にする
- 本番ではrobotsを許可し、sitemapのURLを出力する
- 本番sitemapには主要な静的ページを出力する

## 現在の確認事項

- 公開環境が `build:prod` を使用しているか確認する
- 詳細ページはクライアント取得のため、記事ごとのtitle / description / OGPを静的に出せない
- 詳細ページはクエリパラメータで記事を切り替えるため、誤った正規化を避けてcanonicalを設定しない
- ページ内の見出し階層と共通Headerの `h1` を公開前に確認する

## 更新時のルール

- URL、title、description、OGP、robotsを変更した場合はこのファイルも更新する
- 不明な施設情報や地域表記を推測で修正しない
- SEO監査は `SEO_AUDIT_REQUEST_TEMPLATE.md` を使う
- 指摘の対応状況は `SEO_FIX_TRACKER_YYYY-MM-DD.md` に保存する
