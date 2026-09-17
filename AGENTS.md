# AGENTS.md

## 基本方針

このプロジェクトは、合同会社 縁合と住宅型有料老人ホーム 梨園のWebサイトです。

既存実装を正として、依頼範囲内の最小修正を優先します。ページ構成、データ形式、class名、外部APIとの接続を、明確な依頼なしに大きく変更しません。

## 作業開始時の確認

1. `AGENTS.md`
2. `docs/README.md`
3. `docs/PROJECT_OVERVIEW.md`
4. `docs/PAGE_STRUCTURE.md`
5. 作業内容に対応する `docs/rules/`
6. 必要な場合だけ `docs/playbooks/`

SEO関連の作業では `docs/seo/SEO_SETUP.md` も確認します。

## 技術構成

- Next.js 15.5.25
- React 19系
- TypeScript
- App Router
- `output: "export"` による静的書き出し
- SCSS / CSS Modules
- お知らせ・ブログは外部APIからクライアント側で取得
- 採用応募フォームは外部PHPへ送信

共通PlaybookにNext.js 16向けの記述がある場合も、この案件では実際の依存バージョンと既存コードを優先します。

## 実装方針

- 既存コードへ自然に組み込む
- 大規模なリファクタやディレクトリ再編を行わない
- TSX、SCSS、APIレスポンス形式を同時に変更しない
- 静的書き出しで動かないサーバー専用機能を追加しない
- 内部リンクは `next/link`、画像は原則 `next/image` を使う
- 外部リンクは既存の `ExternalLink` を優先する
- 既存のSCSS変数とmixinを確認してから値を追加する
- HTML / TSX構造は実装難易度を理由に簡略化しない

## 確認方針

- 軽微な修正は対象ファイルに限定して確認する
- ルーティング、metadata、依存関係、静的生成へ影響する変更では `npm run build` を確認する
- Stylelintの自動修正が必要な場合だけ `npm run lint:style:fix` を使い、差分を確認する
- 既存のユーザー変更を巻き戻さない

## ドキュメント運用

- 共有用Markdownへマシン固有の絶対パスを残さない
- ページ追加や廃止時は `docs/PAGE_STRUCTURE.md` を更新する
- SEO設定の変更時は `docs/seo/SEO_SETUP.md` を更新する
- レビュー記録は `docs/review/` に日付別で保存し、既存記録を上書きしない
- 共通ルールと案件固有ルールが競合する場合は、案件固有ルールを優先する
