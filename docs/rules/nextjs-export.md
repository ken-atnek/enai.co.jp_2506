# Next.js静的書き出しルール

## 現在の設定

- Next.js 15.5.25
- App Router
- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- 出力先は `out/`
- ビルド後の `cleanup:export` で `out/backend/` と404用ファイルを削除する

実装判断はNext.js 15.5.25を基準にし、共通PlaybookのNext.js 16向け記述をそのまま適用しません。

## 使用しないもの

- 公開後のNext.jsサーバー処理
- `force-dynamic`
- Server Actionに依存する送信処理
- 実行時にサーバーだけで取得できる非公開データ
- 静的生成できないRoute Handler

## クエリパラメータ

お知らせ・ブログ詳細は、次のURL形式を使用します。

```text
/news/detail/?id=...
/blog/detail/?id=...
```

`useSearchParams()` を使うClient Componentは、ページ側で `Suspense` に包みます。

## 動的ルートを追加する場合

- 静的に生成できるURL一覧を確定する
- 必要に応じて `generateStaticParams()` を実装する
- `params` の型は対象のNext.jsバージョンで確認する
- API更新後もURLが増減する場合は、静的書き出しとの相性を再検討する

## metadata

- 静的に確定できるページmetadataを使用する
- 本番SEOの有効化は `NEXT_PUBLIC_IS_REAL_PROD` の既存方針を確認する
- URL生成は `NEXT_PUBLIC_METADATA_BASE` と公開ドメインを一致させる
- 詳細ページの動的metadataは、クライアント取得だけでは生成できない点に注意する

## robots・sitemap

- `src/app/robots.ts` と `src/app/sitemap.ts` で静的生成する
- 両ファイルに `dynamic = "force-static"` を指定する
- デモ環境ではrobotsを全拒否し、sitemapを空にする
- 本番環境ではrobotsを許可し、sitemapへ公開ページを出力する
- `public/robots.txt` は二重管理になるため置かない

## ビルド確認が必要な変更

- ページ追加・削除
- ルーティング変更
- metadata変更
- `useSearchParams()` を使う画面の変更
- `next.config.ts` の変更
- 画像またはpublicアセットのパス変更
- 依存パッケージの変更

確認コマンド:

```bash
npm run build
```
