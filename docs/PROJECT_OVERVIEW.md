# プロジェクト概要

## 基本情報

- 対象: 合同会社 縁合 / 住宅型有料老人ホーム 梨園
- 公開ドメイン: `https://enai.co.jp/`
- デモURL: `https://demo-enai.tuna-pic.co.jp/`
- リポジトリ: `git@github.com:ken-atnek/enai.co.jp_2506.git`
- 現在の作業ブランチ: `ken-work`
- 構成: 既存サイトの保守・改善

## 技術構成

- Next.js 15.5.25
- React 19系
- TypeScript
- App Router
- 静的書き出し
- SCSS / CSS Modules
- Stylelint / Prettier / ESLint

## ビルドと出力

- 開発: `npm run dev`
- 通常確認: `npm run build`
- デモ用: `npm run build:demo`
- 本番用: `npm run build:prod`
- 出力先: `out/`
- ビルド後に `out/backend/` と404用ファイルを削除
- URL末尾のスラッシュ: 有効
- `next/image` のサーバー画像最適化: 無効

## 外部連携

| 用途 | 接続先 | 実装 |
|---|---|---|
| お知らせ一覧 | `https://enai.co.jp/api/news/index.php` | クライアント取得 |
| お知らせ詳細 | `https://enai.co.jp/api/news/?id=...` | クエリパラメータで取得 |
| ブログ一覧 | `https://enai.co.jp/api/blog/index.php` | クライアント取得 |
| ブログ詳細 | `https://enai.co.jp/api/blog/index.php?id=...` | クエリパラメータで取得 |
| 採用応募 | `https://enai.co.jp/backend/contact.php` | `FormData`をPOST |

外部APIのレスポンス項目やPHP側の受付仕様は、このリポジトリだけで変更できる前提にしません。

## 主要ディレクトリ

| パス | 役割 |
|---|---|
| `src/app/` | ページとルーティング |
| `src/components/` | 共通・ページ別コンポーネント |
| `src/styles/` | グローバル、ページ、コンポーネント用SCSS |
| `src/data/` | ナビゲーションなどの静的データ |
| `src/lib/` | API取得とHTML整形 |
| `src/types/` | お知らせ・ブログの型 |
| `public/` | 静的画像、PDF、ビルド成果物から除外するPHPソース |

## 現在の注意点

- `build:demo` では `https://demo-enai.tuna-pic.co.jp/` を基準URLとして設定し、noindexを使用する
- `build:prod` では公開URLを `NEXT_PUBLIC_METADATA_BASE` に指定する
- `public/backend/` はソースとして保持し、静的書き出し成果物には含めない
- デモ・本番の判定とサイト情報は `src/lib/env.ts` で管理する
- `src/app/robots.ts` と `src/app/sitemap.ts` をビルド時に静的生成する
- 詳細ページは動的パスではなく `?id=` を使う
- 既存SCSSは `src/styles/` 集約型のため、共通Playbookの新規構成へ一括移行しない
