# Project Playbooks

このディレクトリには、現在の案件で参照する React / Next.js と Sass / CSS の共通プレイブックを整理しています。

## 優先順位

実装時は、次の順番で判断します。

1. この案件の既存コードと `package.json`
2. この案件に明記された指示と仕様
3. `docs/playbooks/` の共通プレイブック

共通プレイブックに Next.js 16 を前提とする記述がある場合も、この案件では現在使用している Next.js 15.5.25 の仕様を優先します。

## 現在の案件構成

- Next.js 15.5.25
- React 19系
- App Router
- `output: "export"` による静的書き出し
- `next/image` の画像最適化は無効
- SCSS / CSS Modules
- 共通SCSSは `src/styles/` で管理

## React / Next.js

保存先: `docs/playbooks/react-nextjs/`

1. `workflow.md`
   作業、バージョン確認、レビュー、ビルド運用の共通方針。
2. `nextjs-static-export.md`
   静的書き出しの制約と確認項目。現在の案件では優先して参照する。
3. `review.md`
   レビュー観点と記録方法。
4. `troubleshooting.md`
   React UIの症状別チェック。
5. `patterns.md`
   必要な場面だけ参照する実装パターン。

## Sass / CSS

保存先: `docs/playbooks/sass-css/`

1. `workflow.md`
   SCSS構成、変数、mixin、命名、検証の基本方針。
2. `layout.md`
   Flex、Grid、余白、配置の判断基準。
3. `responsive.md`
   ブレイクポイントと可変幅の判断基準。
4. `troubleshooting.md`
   横スクロール、重なり、余白などの症状別チェック。
5. `animation.md`
   アニメーションが必要な場合だけ参照する。

## 今回持ち込んでいないもの

- 選定したガイドから参照されていない日付付きの記事メモ
- 記事保存用のREADME
- 共通プレイブック側の案内README

ガイドから参照されている記事メモは、リンク切れを避けるため各 `articles/` に配置しています。その他は現在の実装へ直接必要になった時点で、該当するものだけ追加します。
