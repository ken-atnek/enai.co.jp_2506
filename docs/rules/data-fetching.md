# データ取得とフォーム送信

## 基本方針

このサイトは静的書き出しのため、公開後にNext.jsサーバーで処理する実装は使用しません。更新データはClient Componentから外部APIへアクセスします。

## 現在の接続先

| 用途 | 接続先 | 関連ファイル |
|---|---|---|
| お知らせ一覧 | `https://enai.co.jp/api/news/index.php` | `src/lib/fetchNewsApi.ts` |
| お知らせ詳細 | `https://enai.co.jp/api/news/?id=...` | `src/app/news/detail/NewsDetailClient.tsx` |
| ブログ一覧 | `https://enai.co.jp/api/blog/index.php` | `src/lib/fetchBlogApi.ts` |
| ブログ詳細 | `https://enai.co.jp/api/blog/index.php?id=...` | `src/app/blog/detail/BlogDetailClient.tsx` |
| 採用応募 | `https://enai.co.jp/backend/contact.php` | `src/app/form/page.tsx` |

## 一覧データ

- `limit` と `offset` をAPIへ渡す
- APIの `k_*` 項目は、画面用の `NewsItem` / `BlogItem` に変換する
- 件数はレスポンスの `k_total` から数値化する
- HTTPエラーまたは通信失敗時は空配列と0件を返す
- API側の項目名を変更する場合は、管理側との互換性を先に確認する

## 詳細データ

- URLの `id` は `useSearchParams()` で取得する
- 詳細Client Componentはページ側の `Suspense` 内で読み込む
- `id` がない場合と取得失敗時の表示を維持する
- 静的書き出しを維持する限り、安易に `[id]` 動的ルートへ変更しない

## フォーム送信

- 応募内容は `FormData` でPHPへPOSTする
- `public/backend/` は静的ビルド成果物から除外し、公開サーバー側のPHPとは別管理とする
- 確認画面、送信中、成功、失敗の状態を維持する
- 必須項目を変更する場合は、画面側とPHP側の両方を確認する
- 個人情報をログへ出力しない
- エンドポイントや送信項目名を、画面だけの判断で変更しない

## 変更時の確認

- APIレスポンス型と変換処理が一致しているか
- 一覧の件数、ページング、0件表示が維持されているか
- 詳細URLのクエリパラメータが維持されているか
- CORSとHTTPSの前提を崩していないか
- エラー時に画面全体が停止しないか
- フォームの個人情報がURLやログに残らないか
