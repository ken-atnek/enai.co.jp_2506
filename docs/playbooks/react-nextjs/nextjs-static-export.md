# Next.js Static Export

Next.js App Routerで `output: 'export'` を使う案件の共通確認事項です。

この文書は2026-09-12時点のNext.js 16.3系を基準にしています。既存案件では `package.json` とlockfileを優先し、実装前に対象バージョンの公式ドキュメントを確認します。

## 基本設定

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
};

export default nextConfig;
```

- `next build` の成果物は標準では `out/` に出力される
- `trailingSlash`、`basePath`、`assetPrefix`、出力先は案件の公開環境に合わせる
- 公開サーバー側のURL解決や既存ファイル維持は案件側のmdに残す

## 静的書き出しで使えないもの

実行時のNext.jsサーバーを必要とする機能は使用できません。

- 実行時に決まる動的ルート
- `force-dynamic` など実行時レンダリングを要求する設定
- API Routes / Route Handlersの実行時処理
- rewrites、redirects、headers、Proxy
- ISR
- Draft Mode
- Server Actions
- デフォルトloaderによるImage Optimization
- Intercepting Routes
- `next.config` のi18nルーティング

リダイレクトやHTTPヘッダーが必要な場合は、公開サーバーの設定として案件側に記録します。

## 動的ルート

- 静的書き出しする動的ルートは `generateStaticParams()` で全パスを列挙する
- ビルド後に追加されるIDを、未生成のNext.jsルートで表示することはできない
- ビルド後も増減するデータは、固定ルートからクライアント取得する構成を検討する
- `generateStaticParams()` は同期・非同期のどちらでもよい

```tsx
export async function generateStaticParams() {
  const items = await getItems();
  return items.map((item) => ({ id: item.id }));
}

export default async function Page({
  params,
}: PageProps<'/items/[id]'>) {
  const { id } = await params;
  return <main>{id}</main>;
}
```

## 非同期Request API

Next.js 16では、ページやレイアウトの `params`、ページの `searchParams` はPromiseとして扱います。

- 同期アクセスを前提にしない
- `await` またはReactの `use()` で解決する
- 型を固定コピーせず、利用可能なら `PageProps` / `LayoutProps` を使う
- `generateMetadata()` は同期・非同期のどちらでもよい

`generateMetadata()` や `generateStaticParams()` がasyncかどうかではなく、ビルド時に値を確定できるかで判断します。

## useSearchParams

静的ページ内のClient Componentで `useSearchParams()` を使う場合は、対象Componentを `Suspense` 境界で包みます。

```tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SearchContent />
    </Suspense>
  );
}
```

## robots / sitemap / metadata

- `robots.ts` と `sitemap.ts` は標準でキャッシュされる特殊なMetadata Routeとして扱う
- `force-static` を全案件の必須指定にしない
- 特定バージョンのビルドエラー回避で `force-static` が必要な場合は、エラー内容と対象バージョンを案件側に記録する
- `generateMetadata()` はビルド時に確定できる範囲ならasyncでもよい
- canonical、OGP、sitemapのURLは本番URLを基準にする
- デモ環境のnoindexと本番SEOの切り替え方法は案件側に残す

## public配下の更新データ

管理画面などがビルド後に `public/db/` のJSONを書き換える案件では、次を確認します。

- Server Componentでビルド時に読むと、値が成果物へ焼き込まれる
- ビルド後の更新を反映する必要があるデータは、Client Componentから取得する
- `basePath` がある場合は取得URLへ反映する
- 読み込み中、空データ、取得失敗の表示を分ける
- キャッシュバスターや `cache: 'no-store'` は、公開サーバーのCache-Controlを確認して必要な場合だけ使う
- JSONのパス、スキーマ、管理画面との更新責務は案件側に残す

データ取得処理が複数になる場合は、`patterns.md` の「クライアントJSON取得をカスタムhookに閉じ込める」も確認します。

## 画像

- デフォルトloaderによるImage Optimizationは静的書き出しでは利用できない
- `images.unoptimized: true`、カスタムloader、事前最適化済み画像のいずれかを案件ごとに選ぶ
- 外部画像を使う場合は公開環境とCSPも確認する

## 確認

- `output: 'export'` と矛盾するサーバー機能がないか
- 動的ルートをすべてビルド時に生成できるか
- ビルド後更新データを誤って成果物へ焼き込んでいないか
- `basePath`、`assetPrefix`、`trailingSlash` が公開先と一致するか
- robots、sitemap、canonicalがデモURLを本番URLとして出力していないか
- 公開サーバー側で必要なリダイレクト、ヘッダー、既存ファイル維持が整理されているか

ビルドの実行者とタイミングは `workflow.md` の「ビルド運用」に従います。
