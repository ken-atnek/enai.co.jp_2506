# Workflow

Sass / CSS制作案件で、構成と運用を決めるための共通ルールです。

このファイルを親ルールとし、ブレイクポイント、デザイントークン、採用フォント、既存class、公開環境などは案件側に残します。

## 作業前の確認

- 既存のSCSS構成と読み込み元を確認してから追加する
- 案件側に既存の命名規則、変数、mixin、ブレイクポイントがある場合はそれを優先する
- デザイン指定がある場合は、値を推測せずデザイン資料と既存実装を確認する
- 依頼範囲外のファイル構成変更や全面的な命名変更を行わない

## ファイル構成

新規案件では、次の責務分離を基準にします。既存案件へそのまま強制しません。

```text
src/styles/
├── foundation/
│   ├── _tokens.scss
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   ├── _typography.scss
│   └── _index.scss
└── globals.scss

src/components/example/
├── Example.tsx
└── Example.module.scss
```

- `foundation/` は変数、function、mixinなど、原則としてCSSを直接出力しない定義を置く
- `globals.scss` はreset、body、全体トークン、グローバル要素など全ページ共通の出力を担当する
- Component固有の見た目は対応する `*.module.scss` に置く
- ページ固有スタイルを `globals.scss` に増やさない
- 同じ見た目という理由だけで、責務の違うComponentを早期に結合しない

## 読み込み順

- Sassの `@use` はファイル先頭に置く
- `globals.scss` はAppのroot layoutなどから1回だけ読み込む
- Component側は必要なfoundation入口だけを `@use` する
- Component moduleから、CSSを出力する別ComponentのSCSSを読み込まない
- `@use '.../foundation' as *` を使う場合は、公開する名前をfoundation側で管理し、衝突を増やさない
- 規模が大きい案件ではnamespace付き `@use` を検討する

## 変数とデザイントークン

- 色、余白、文字サイズなどの基準値は、案件のデザイントークンを正とする
- テーマ切り替えや実行時変更が必要な値はCSS Custom Propertiesを使う
- Sassの計算やコンパイル時分岐だけに必要な値はSass変数を使う
- 同じ意味の値をSass変数とCSS Custom Propertyへ重複定義しない
- 似ているだけの値を無理に1トークンへまとめない
- 一度しか使わない値を、将来予測だけで共通変数にしない

## mixin / function

- ブレイクポイント、流体値、フォント指定など、複数箇所で同じ意図を再利用する場合に限定する
- 1行のプロパティを置き換えるだけのmixinを増やさない
- 引数が多く、呼び出し側で結果を予測しにくいmixinは避ける
- 新しいmixinを作る前に、既存のmixinと用途が重複していないか確認する
- 案件固有のフォント名やブレイクポイント値は案件側で管理する

## グローバルスタイルと共通スタイル

- グローバル要素、reset、サイト全体の基本スタイルだけを `globals.scss` に置く
- Header、Footer、ButtonなどのUIはComponent単位で管理する
- 2箇所以上で同じ責務として使われ、変更理由も同じ場合に共通化を検討する
- ページ固有の余白調整を共通classへ逃がさない
- utility classは用途と命名範囲を決め、場当たり的に増やさない

## 命名

- グローバルclassは案件の既存規則を優先する
- 新規のグローバルclassは、指定がなければケバブケースを基本にする
- CSS ModulesはTSXから参照しやすいキャメルケースを基本にする
- Component名とroot class名を対応させ、`root`だけの曖昧な名前を避ける
- `wrapper`、`inner`、`content`を無計画に重ねず、役割が分かる名前にする
- 状態classは `isOpen`、`isActive` など、案件内で表記を統一する

## レスポンシブ

- まず可変幅で成立する構造を作り、表示が破綻する幅でブレイクポイントを決める
- モバイルファーストかPCファーストかは案件開始時に決め、同じ領域で混在させない
- 既存のブレイクポイントmixinがある場合はそれを優先する
- 例外的なmedia queryはComponent内へ閉じる
- SP対応を後工程に分ける場合も、固定幅や固定高さで対応不能な構造を作らない

詳細は `responsive.md` を確認します。

## Layout

- セクション、コンテナ、Componentの余白責務を分ける
- 1方向の整列はFlex、行と列を扱う場合はGridを検討する
- 一覧の間隔は個別marginより `gap` を優先する
- 絶対配置を主要レイアウトの調整手段にしない

詳細は `layout.md` を確認します。

## Lint / Format

- SCSSのインデントはスペース4で統一する
- 保存時にスペース2へ戻らないよう、PrettierのSCSS用 `tabWidth` と `.editorconfig` の `indent_size` / `tab_width` をどちらも4に設定する
- SCSSのブロック内とルール間に自動の空白行を入れず、Stylelintのempty-line-before系ルールは `never` にする
- Stylelintのチェックと自動修正は別scriptにする
- 自動修正は依頼範囲のファイルへ限定し、差分を確認する
- Formatter実行後も、Sassのネストとコメントが読みやすいか確認する
- 軽微なSCSS変更では、対象ファイルのStylelintを優先する
- buildの実行方針はReact / Next.jsプレイブックまたは案件側のルールに従う

## コメントと更新日

- コードから明らかな内容を説明するコメントは増やさない
- 制約、例外、意図がコードだけでは分からない場合にコメントする
- 全ファイルへのCreated / Last updatedヘッダーを共通必須ルールにしない
- 更新履歴はGitと日付別レビューmdを基本にする
- 案件側でヘッダーが必要な場合は、既存形式を優先する

## 確認項目

- foundationとComponentの責務が混ざっていないか
- 同じ変数、mixin、共通classを重複作成していないか
- Sass変数とCSS Custom Propertiesの役割が分かれているか
- グローバルスタイルがページ固有の都合で増えていないか
- 命名規則と状態classの形式が統一されているか
- ブレイクポイントが場当たり的に増えていないか
- PC、タブレット、SPで横スクロールや固定高さの破綻がないか
- `prefers-reduced-motion` が必要な動きに対応しているか
