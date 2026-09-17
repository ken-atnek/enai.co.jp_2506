# Patterns

実案件で再利用できる React / Next.js の実装パターンをまとめます。

「便利そうだから使う」ではなく、採用する場面と避ける場面をセットで残します。

## 追加テンプレート

```md
## パターン名

### 使う場面

### 実装方針

### 採用条件

### 避ける場面

### 関連
```

## 部分的に待たせるローディング

### 使う場面

ページ内に複数のデータ取得や重いコンポーネントがあり、全体を一括で待たせると体験が悪くなる画面。

### 実装方針

- `<Suspense>` を画面全体ではなく、意味のある単位で分ける
- 準備できた部分から表示する
- fallback は大きな画面切り替えではなく、対象範囲だけに出す

### 採用条件

- データ取得ライブラリやフレームワーク側が Suspense に対応している
- それぞれの領域が独立して表示されても不自然ではない

### 避ける場面

- 全体が揃わないと意味が伝わらない画面
- 細かく分けすぎてスピナーだらけになる画面

### 関連

- `articles/2026-09-03-ics-react-ux.md`
- React 公式 `<Suspense>`

## tableタグを使わない表形式レイアウト

### 使う場面

公開側の新規コンポーネントで、料金、営業時間、施設情報などを表形式の見た目で配置する場合。

### 実装方針

- 公開側の新規コンポーネントでは、原則として `table` / `thead` / `tbody` / `tr` / `th` / `td` を使用しない
- 表形式のレイアウトは `div` または `ul` と CSS Grid を基本に構成する
- 表としての意味を読み上げにも伝える必要がある場合は、`role="table"` / `role="rowgroup"` / `role="row"` / `role="columnheader"` / `role="cell"` を適切に付与する
- 既存のtableタグは、明確な依頼がない限り一括変更しない

### 採用条件

- 新規作成する公開側UIである
- 見た目は表形式だが、既存実装との互換性を維持する必要がない
- 必要な読み上げ構造をマークアップまたはARIA属性で補える

### 避ける場面

- 管理画面など、案件側の仕様でtableタグを使用すると決まっている場合
- 既存のtableタグを、見た目を変えずに一括置換する場合
- 案件固有のコーディングルールがこの共通ルールと異なる場合

### 関連

- 山鹿露天湯 椛 `docs/rules/coding-style.md`

## 入力と重い更新を分ける

### 使う場面

検索、絞り込み、料金計算、一覧更新などで、ユーザー入力に対して画面更新が重く感じる画面。

### 実装方針

- 入力値そのものは即時更新する
- 重い一覧描画は `useDeferredValue` の利用を検討する
- 条件変更に伴う state 更新の優先度を下げたい場合は `useTransition` を検討する
- `isPending` や比較用フラグで、処理中であることを必要な範囲だけ表示する

### 採用条件

- 入力欄の反応は保ちたい
- 一覧や結果表示は少し遅れても問題ない
- 古い表示を残した方が自然に見える

### 避ける場面

- 入力ごとに必ず即時の正確な結果表示が必要な画面
- 本当の原因が不要な再レンダリングやデータ量にあるのに、優先度制御だけで隠す場合

### 関連

- `articles/2026-09-03-ics-react-ux.md`
- React 公式 `useTransition`
- React 公式 `useDeferredValue`

## 楽観的更新

### 使う場面

いいね、お気に入り、フォロー、カート追加など、ユーザー操作の成功確率が高く、先にUIへ反映した方が自然な操作。

### 実装方針

- `useOptimistic` で一時的な表示状態を作る
- 保存処理や更新処理は Action / Transition の中で実行する
- API成功後に確定状態へ反映する
- API失敗時の戻し方とエラー表示を必ず用意する

### 採用条件

- 操作結果が予測しやすい
- 失敗時に元へ戻しても破綻しない
- UIの即時反応が体験に大きく効く

### 避ける場面

- 決済、予約確定、在庫確保など、失敗時の影響が大きい操作
- サーバー側の結果によって表示内容が大きく変わる操作

### 関連

- `articles/2026-09-03-ics-react-ux.md`
- React 公式 `useOptimistic`

## 非表示UIの状態保持

### 使う場面

タブ、ステップフォーム、サイドバー、モーダル内フォームなど、一時的に隠しても入力や開閉状態を残したいUI。

### 実装方針

- 対応環境であれば `<Activity>` を検討する
- 表示しないだけで、再表示される可能性が高いUIに使う
- hidden 中の副作用やデータ取得が不要に走りすぎないか確認する

### 採用条件

- React / Next.js の利用バージョンで `<Activity>` が安定して使える
- 再表示される可能性が高い
- 入力内容や内部 state を残す価値がある

### 避ける場面

- ほとんど再表示されないUI
- 非表示中に保持する state やレンダリング負荷が大きすぎるUI
- 対応バージョンが不明な案件

### 関連

- `articles/2026-09-03-ics-react-ux.md`
- React 公式 `<Activity>`

## クライアントJSON取得をカスタムhookに閉じ込める

### 使う場面

静的export運用で、`public/db` などのJSONをクライアントfetchして画面へ反映するページ。

ページ内で複数の関連JSONを読む必要があり、表示コンポーネントに `useEffect` や取得処理が増えてきたときに使う。

### 実装方針

- ページ表示コンポーネントは、取得済みデータを受け取って表示構成を組む役割に寄せる
- JSON取得、初期化、キャンセルガード、関連JSONの結合はカスタムhookにまとめる
- hook名は画面や用途が分かる名前にする
- 例：`useShopDetailData(id)`
- `useEffect` は無理に消さず、外部データ取得という副作用をhook内に閉じ込める

### 採用条件

- Client Component でJSONを取得する必要がある
- Server Componentで読むと、ビルド時にデータが焼き込まれて困る
- 取得処理が2種類以上になり、画面コンポーネントの見通しが落ちている
- ID切り替え時などに、古いfetch結果が後からstateへ入るリスクがある

### 避ける場面

- 表示用に値を計算するだけの場合
- `props` や `state` から同期的に算出できる値の場合
- 1箇所でしか使わない単純な小さいfetchを、早すぎる共通化で読みにくくする場合
- 取得順序や責務がまだ固まっていない段階で、汎用hookを作りすぎる場合

### 実装メモ

```tsx
function useShopDetailData(id: string) {
  const [detail, setDetail] = useState<ShopDetail | null>(null);

  useEffect(() => {
    let isCancelled = false;

    fetchShopDetailData(id).then((data) => {
      if (isCancelled) return;
      setDetail(data.detail);
    });

    return () => {
      isCancelled = true;
    };
  }, [id]);

  return { detail };
}
```

表示用の判定は `useEffect` に入れず、描画時に計算する。

```tsx
const hasReservation = reservationBasic?.reservationEnabled === true;
const hasOnlineProducts = onlineProductsCount > 0;
```

### 関連

- React公式 `You Might Not Need an Effect`
- React公式 `Synchronizing with Effects`
- kurokawa-onsen 2603 店舗詳細ページ

## publicのSVGシンボルをページ内で共通利用する

### 使う場面

ロゴやSNSアイコンなど、同じSVGを複数のコンポーネントから参照し、SVGのパス定義を1ファイルで管理したい場合。

### 実装方針

- `<symbol>`をまとめた信頼できるSVGファイルを `public/svg/object.svg` などへ配置する
- Client ComponentでSVGファイルを同一オリジンから取得し、ルートレイアウト内へ非表示で1回だけ展開する
- 使用側は `<svg>`内の `<use href="#シンボルID" />` から参照する
- 取得失敗を判定し、アンマウント時には未完了のfetchを中止する
- `dangerouslySetInnerHTML`へ渡すのは、プロジェクトで管理している静的SVGだけに限定する
- 外部URL、CMS入力、ユーザー入力など、信頼できないSVGを挿入しない

```tsx
"use client";

import { useEffect, useState } from "react";

const SVG_DEFS_PATH = "/svg/object.svg";

export default function SvgDefs() {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadSvgDefs() {
      try {
        const response = await fetch(SVG_DEFS_PATH, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load SVG definitions: ${response.status}`);
        }

        setSvgContent(await response.text());
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error(error);
      }
    }

    void loadSvgDefs();
    return () => controller.abort();
  }, []);

  return (
    <div
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      aria-hidden="true"
    />
  );
}
```

ルートレイアウトでchildrenより前に配置する。

```tsx
<body>
  <SvgDefs />
  {children}
</body>
```

使用側では、装飾画像なら `<svg aria-hidden="true">`、意味を持つ画像なら用途に合うアクセシブルネームを設定する。

```tsx
<svg aria-hidden="true">
  <use href="#svgLogo" />
</svg>
```

### 採用条件

- 同じSVGシンボルを複数箇所で使用する
- SVG定義ファイルをプロジェクト内で管理できる
- 初回クライアント描画後にSVGが表示される方式を許容できる

### 避ける場面

- 単独でしか使わない小さなSVG
- 初期HTMLの時点でSVG表示が必須のファーストビュー
- JavaScript無効時にもSVGを必ず表示する必要がある場合
- SVGの取得元や内容を信頼できない場合

### 注意点

- `basePath`を使う案件では、`/svg/object.svg`の固定パスをそのまま使わず、案件の公開パスに合わせる
- シンボルIDは案件内で重複させず、変更時はすべての `<use>`参照も更新する
- SVGファイルを別オリジンから直接参照すると、ブラウザやCSPの制約を受ける場合がある
- SVGが主要表示の場合は、fetch完了前の一時的な非表示が問題にならないか確認する

### 関連

- `nextjs-static-export.md` のpublicパスと `basePath` の注意
- こうの湯日本語版 `src/components/SvgDefs.tsx`
