# Documentation Index

このディレクトリには、縁合・梨園サイトの案件固有ドキュメントと共通Playbookを分けて保存します。

## 最初に読むもの

1. `PROJECT_OVERVIEW.md`
   案件の目的、技術構成、外部連携、現在の注意点。
2. `PAGE_STRUCTURE.md`
   公開ページ、URL、役割、データ取得方法。
3. `rules/`
   この案件の既存コードに合わせた実装ルール。
4. `seo/SEO_SETUP.md`
   現在のSEO実装と未確認項目。

## ディレクトリ構成

```text
docs/
├── README.md
├── PROJECT_OVERVIEW.md
├── PAGE_STRUCTURE.md
├── rules/
│   ├── checklist.md
│   ├── coding-style.md
│   ├── data-fetching.md
│   ├── file-header-comments.md
│   └── nextjs-export.md
├── seo/
│   ├── SEO_SETUP.md
│   ├── SEO_AUDIT_REQUEST_TEMPLATE.md
│   └── SEO_FIX_TRACKER_TEMPLATE.md
├── review/
│   └── README.md
└── playbooks/
    ├── react-nextjs/
    └── sass-css/
```

## 役割の分け方

- `rules/`: この案件でそのまま適用するルール
- `playbooks/`: 複数案件で使う判断材料。必要な項目だけ参照する
- `seo/`: SEOの現状、監査依頼、修正管理
- `review/`: 日付別のレビュー結果と対応記録

案件固有ルールと共通Playbookが競合する場合は、既存コードと `rules/` を優先します。
