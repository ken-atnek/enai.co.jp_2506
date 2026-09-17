# SEO総合チェック依頼テンプレート

## 依頼内容

このプロジェクト全体を、Next.jsの静的書き出しと現在の外部API構成を前提にSEO観点で確認してください。

## 事前確認

- `AGENTS.md`
- `docs/PAGE_STRUCTURE.md`
- `docs/seo/SEO_SETUP.md`
- `next.config.ts`
- `src/app/layout.tsx`

一般論だけではなく、対象ファイル、理由、修正案、確認方法を具体的に示してください。

## 必須チェック対象

- `/`
- `/news/`
- `/news/detail/?id=...`
- `/concept/`
- `/concept/day-service/`
- `/concept/helper-station/`
- `/concept/home-care/`
- `/service/`
- `/blog/`
- `/blog/detail/?id=...`
- `/recruit/`
- `/form/`
- `/contact/`
- `/about-enai/`

## 確認項目

### メタ情報

- title / description
- metadataBase
- canonical
- OGP / Twitter Card
- favicon
- 詳細ページの動的情報

### インデックス制御

- 本番・デモのrobots設定
- `public/robots.txt`
- sitemap
- noindexが必要なページ

### HTMLとコンテンツ

- h1からh3の見出し階層
- main / header / nav / footer / sectionの構造
- 内部リンクとURL設計
- 画像alt
- 施設名、会社名、所在地の表記
- 情報量が不足しているページ

### 技術SEO

- 静的書き出しとの整合
- クライアント取得コンテンツのクロール可否
- Core Web Vitalsに影響する実装
- 構造化データ
- 外部API障害時の表示

## 出力形式

1. 総評
2. 優先度: 高
3. 優先度: 中
4. 優先度: 低
5. ページ別の指摘
6. 不足している施策
7. 推奨する修正順

指摘ごとに、対象ファイル、問題の根拠、最小修正案、確認方法を記載してください。
