# レビュー記録

レビューの共通仕様は、次のPlaybookを参照します。

- `docs/playbooks/react-nextjs/workflow.md`
- `docs/playbooks/react-nextjs/review.md`

このディレクトリには、縁合・梨園サイトのレビュー結果と対応状況を日付別に保存します。

## ファイル名

- 通常レビュー: `REVIEW_YYYY-MM-DD.md`
- 外部レビュー依頼: `REVIEW_REQUEST_YYYY-MM-DD.md`
- 外部レビュー原文: `EXTERNAL_REVIEW_ツール名_YYYY-MM-DD.md`
- 修正トラッカー: `REVIEW_FIX_TRACKER_YYYY-MM-DD.md`

同名ファイルがある場合は上書きせず、末尾へ `_02`、`_03` のように連番を付けます。

## この案件で確認すること

- Next.js 15.5.25と静的書き出しの整合
- PC・タブレット・SP表示
- Header / Footer /主要ナビゲーション
- お知らせ・ブログAPIの取得、0件、エラー表示
- 詳細ページのクエリパラメータと `Suspense`
- 採用応募フォームの入力、確認、送信、エラー表示
- metadata、robots、OGP、canonical、sitemap
- 画像altと見出し階層
- PDF、電話、外部リンク
- 公開環境でのみ確認できる項目

## 記録ルール

- 冒頭に進捗サマリーを置く
- 対象ファイル、対応内容、確認方法、結果、残タスクを記録する
- 静的チェック、ブラウザ確認、公開後確認を分ける
- 共有用Markdownへマシン固有の絶対パスを残さない
- 仕様判断が必要な内容を、レビュー担当者の判断だけで確定しない
