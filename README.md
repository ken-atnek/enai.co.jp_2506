# enai.co.jp_2506

合同会社 縁合・住宅型有料老人ホーム 梨園のWebサイトです。

Next.jsのApp Routerで実装し、静的ファイルとして `out/` へ書き出します。

## URL

- 本番: `https://enai.co.jp/`
- デモ: `https://demo-enai.tuna-pic.co.jp/`

## 技術構成

- Next.js 15.5.25
- React 19系
- TypeScript
- SCSS / CSS Modules
- 静的書き出し

## セットアップ

```bash
npm ci
npm run dev
```

開発画面は `http://localhost:3000/` で確認します。

## コマンド

| コマンド | 用途 |
|---|---|
| `npm run dev` | 開発サーバーを起動 |
| `npm run typecheck` | TypeScriptの型チェック |
| `npm run lint` | ESLintのチェック |
| `npm run lint:style` | SCSSのStylelintチェック |
| `npm run lint:style:fix` | SCSSをStylelintで自動修正 |
| `npm run build` | 通常確認用の静的ビルド |
| `npm run build:demo` | デモ環境用ビルド（noindex） |
| `npm run build:prod` | 本番環境用ビルド |

## ビルド成果物

- 出力先: `out/`
- `out/backend/` はビルド後に削除
- `out/404/` と `out/404.html` はビルド後に削除
- デモではrobotsを全拒否し、sitemapを空にする
- 本番ではrobotsを許可し、主要ページをsitemapへ出力する

公開用ファイルを作る場合は、対象環境に合う `build:demo` または `build:prod` を使用します。

## ドキュメント

作業前に次の順番で確認します。

1. `AGENTS.md`
2. `docs/README.md`
3. `docs/PROJECT_OVERVIEW.md`
4. `docs/PAGE_STRUCTURE.md`
5. 作業内容に対応する `docs/rules/`

SEO設定は `docs/seo/SEO_SETUP.md`、共通の実装判断は `docs/playbooks/` を参照します。

## 外部連携

- お知らせ・ブログは `enai.co.jp` の外部APIから取得
- 採用応募フォームは `https://enai.co.jp/backend/contact.php` へ送信
- `public/backend/` はPHPソースの管理用で、静的ビルド成果物には含めない
