# 作業チェックリスト

## 作業前

- [ ] `AGENTS.md` と対象ページを確認した
- [ ] `docs/PAGE_STRUCTURE.md` でURLと役割を確認した
- [ ] 対応する `docs/rules/` を確認した
- [ ] Git差分と既存のユーザー変更を確認した
- [ ] 関連するAPI、型、SCSS、共通コンポーネントを確認した

## TSX / TypeScript

- [ ] 静的書き出しで動作する実装になっている
- [ ] 不要なClient Componentを増やしていない
- [ ] 内部リンクと外部リンクを使い分けている
- [ ] 画像に適切な `alt` がある
- [ ] `useSearchParams()` が `Suspense` 内にある
- [ ] APIレスポンスと型が一致している

## SCSS

- [ ] 既存の変数とmixinを確認した
- [ ] ページまたはコンポーネントの責務に合うファイルへ追加した
- [ ] PC・タブレット・SPで横スクロールや重なりがない
- [ ] 不要な固定幅・固定高さ・絶対配置を増やしていない
- [ ] 自動修正後に対象外差分がない

## SEO・公開

- [ ] ページ追加時にmetadataを確認した
- [ ] 本番とデモのrobots設定を確認した
- [ ] 内部リンクと末尾スラッシュを確認した
- [ ] OGP・canonical・sitemapへの影響を確認した
- [ ] 外部APIとフォーム送信先を確認した

## 確認コマンド

型チェック:

```bash
npm run typecheck
```

対象SCSSのチェック:

```bash
npx stylelint path/to/file.scss
```

ルーティング、metadata、依存関係、静的生成へ影響する変更:

```bash
npm run build
```

`npm run lint:style` は確認専用です。自動修正が必要な場合だけ `npm run lint:style:fix` を使い、実行後の差分を確認します。
