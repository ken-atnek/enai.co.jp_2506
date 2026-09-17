# コーディング規約

## 基本方針

- 既存コードと同じ書き方を優先する
- 依頼範囲外のリファクタやファイル移動を行わない
- 新しい抽象化は、同じ責務が複数箇所で必要になってから検討する
- ページ構造、class名、APIデータ形式を同時に変更しない

## TypeScript / TSX

- TypeScriptを使用し、追加するpropsとAPIデータには型を付ける
- importは既存の `@/` エイリアスを優先する
- 内部リンクは `next/link` の `Link` を使う
- 外部リンクは `src/components/common/ExternalLink.tsx` を優先する
- 画像は原則 `next/image` の `Image` を使う
- Client Componentは、state・effect・ブラウザAPIが必要な範囲に限定する
- `useSearchParams()` を使うコンポーネントはページ側の `Suspense` 内に置く
- APIレスポンスの型は `src/types/` または対応する取得モジュールで管理する

## コンポーネント

- 全ページ共通要素は `src/components/common/` に置く
- ページ固有要素は `src/components/{page}/` に置く
- 既存のページSCSSは `src/styles/Page*.module.scss` を使用する
- 既存のコンポーネントSCSSは `src/styles/components/` を使用する
- SCSSをコンポーネントと同階層へ一括移動しない

## SCSS

- Tailwind CSSは追加しない
- グローバルスタイルは `src/styles/globals.scss` に限定する
- ページ固有スタイルは対応するCSS Moduleへ置く
- 既存の `_variable.scss`、`_mixin.scss`、`_svg.scss` を確認してから値やmixinを追加する
- CSS Modulesのclass名は、既存に合わせてキャメルケースを使う
- Sassのインデントはスペース4、TSXはスペース2を使用する
- レイアウトはFlex / Grid / `gap` を優先し、絶対配置を主要レイアウトの調整手段にしない
- SP対応は既存の `@include sp` を優先し、ブレイクポイントを個別に増やさない
- `npm run lint:style` は確認専用、`npm run lint:style:fix` は自動修正用として使い分ける

## metadataと静的書き出し

- ページを追加する場合はmetadataも同時に確認する
- `output: "export"` で利用できない機能を追加しない
- 外部APIやフォーム送信は、ブラウザから到達できる公開エンドポイントを使用する
- 詳細は `nextjs-export.md` と `data-fetching.md` を参照する

## 変更時の注意

- 既存のファイルヘッダーを一括更新しない
- 既存コメントに誤りがある場合も、対象作業に関係する範囲だけ修正する
- formatterや自動修正後は、意図しない全体差分がないか確認する
