# ページ構成

公開URLの基準は `https://enai.co.jp/` です。

## 主要ナビゲーション

| ページ | パス | 主な役割 | 状態 |
|---|---|---|---|
| トップページ | `/` | 施設紹介、代表挨拶、お知らせ、ブログ、主要導線 | 実装済み |
| お知らせ | `/news/` | お知らせ一覧 | 実装済み |
| 梨園について | `/concept/` | 施設コンセプトと関連事業所 | 実装済み |
| 料金・サービス | `/service/` | 利用対象、料金、入居手続き | 実装済み |
| 梨園のブログ | `/blog/` | ブログ一覧 | 実装済み |
| 採用情報 | `/recruit/` | 募集職種と応募導線 | 実装済み |
| お問い合わせ | `/contact/` | 所在地と運営会社情報 | 実装済み |
| 縁合について | `/about-enai/` | 会社・施設概要 | 実装済み |

## 関連事業所

| ページ | パス | 主な役割 | 状態 |
|---|---|---|---|
| いにしえ通所介護事業所 | `/concept/day-service/` | デイサービス紹介 | 実装済み |
| 訪問介護事業所 梨園 | `/concept/helper-station/` | 訪問介護紹介 | 実装済み |
| 居宅介護支援事業所 | `/concept/home-care/` | 居宅介護支援紹介 | 実装済み |

## 一覧・詳細・フォーム

| ページ | パス | データ・処理 | 状態 |
|---|---|---|---|
| お知らせ詳細 | `/news/detail/?id=...` | 外部ニュースAPI | 実装済み |
| ブログ詳細 | `/blog/detail/?id=...` | 外部ブログAPI | 実装済み |
| 採用応募フォーム | `/form/` | 外部PHPへPOST | 実装済み |

詳細ページは静的書き出しを維持するため、動的セグメントではなくクエリパラメータを使用しています。`useSearchParams()` を使うClient Componentは、ページ側の `Suspense` 内で読み込みます。

## トップページの主な構成

1. Header
2. メインビジュアル
3. ページナビゲーション
4. 梨園の理念・代表挨拶
5. お知らせ
6. ブログ
7. Footer

## 共通要素

| 要素 | 実装 |
|---|---|
| Header | `src/components/common/Header.tsx` |
| Footer | `src/components/common/Footer.tsx` |
| 下層ページタイトル | `src/components/common/PageTitle.tsx` |
| 外部リンク | `src/components/common/ExternalLink.tsx` |
| ナビゲーションデータ | `src/data/navMenuData.ts` |

## ページ変更時の更新項目

- Header / Footerの導線
- `src/data/navMenuData.ts`
- ページ固有metadata
- `docs/seo/SEO_SETUP.md`
- `public/robots.txt` とsitemap方針
- 静的書き出し後のURLとアセットパス
