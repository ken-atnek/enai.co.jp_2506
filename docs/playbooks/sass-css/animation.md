# Animation

Sass / CSS のアニメーション実装で迷ったときに確認する判断基準です。

まず「動かすこと」ではなく、操作結果・位置関係・状態変化を伝えるために必要な動きかを確認します。

## 追加テンプレート

```md
## テーマ

### 使う場面

### 実装方針

### 判断基準

### 避けること

### 関連
```

## linear() でスプリング風の動きを作る

### 使う場面

ボタン、タブ、トグル、トースト、モーダル、ポップオーバー、アコーディオンなど、操作に対して軽いフィードバックを返したいUI。

### 実装方針

- `linear()` をCSS変数化して、案件内で使い回す
- 小さなUIや出現モーションでは、移動量・拡大率・透明度の変化に絞る
- 跳ねは弱めにし、UIの印象を軽くする程度に留める
- 重要な操作導線では、どの操作から何が現れたか伝わる動きにする
- `prefers-reduced-motion` で動きを抑える指定を用意する

```scss
:root {
  --ease-spring-soft: linear(0, 0.18, 0.42, 0.72, 0.95, 1.06, 1.04, 1.01, 0.99, 1);
}

.button {
  transition:
    transform 0.45s var(--ease-spring-soft),
    opacity 0.2s ease-out;
}

.button:active {
  transform: scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 判断基準

- 状態変化が分かりやすくなるなら採用する
- 高級感・落ち着きが必要なサイトでは、通常の `ease` / `ease-out` を優先する
- 操作系UIでは、移動先で少しだけ行き過ぎて戻る程度にする
- モーダルやメニューでは、発火元との関係が伝わる方向から出す
- 対象ブラウザに古いSafariや古いWebViewが含まれる場合は、通常のイージングへフォールバックできる形にする

### 避けること

- すべてのホバーや出現に同じ強いスプリングをかける
- `all` で不要なプロパティまでトランジション対象にする
- 大きなレイアウト移動を跳ねさせて、視線や読みやすさを乱す
- 装飾目的だけで、何度も揺れるElastic風の動きを使う
- JSライブラリの物理スプリングとCSSの時間ベースの `linear()` を同じものとして扱う

## スプリングとElasticを使い分ける

### 使う場面

バネっぽい自然な反応にしたいのか、派手な演出として揺らしたいのかを決める場面。

### 実装方針

- 実務のUIフィードバックは、まずスプリング寄りの弱い揺れを検討する
- Elasticは、キャンペーン・ゲーム・強い演出など、遊びが許される場面に限定する
- 操作完了、選択状態、開閉、追加・削除などはスプリングの方が扱いやすい

### 判断基準

- 軽快さ、押した感、自然な収束を出したいならスプリング
- 目立たせたい、楽しく見せたい、あえて大きく跳ねさせたいならElastic
- ブランドの印象が落ち着いている場合は、跳ね幅を小さくするか通常イージングにする

### 避けること

- スプリングを「派手に跳ねる演出」とだけ捉える
- フォーム、購入、予約など慎重な操作で強い揺れを入れる
- テキスト本文や読ませる要素を無意味に揺らす

### 関連

- `articles/2026-04-02-ics-media-css-linear-spring-animation.md`

## sibling-index() でスタッガーアニメーションを作る

### 使う場面

リスト、カード、ギャラリー、メニュー、文字分割など、兄弟要素を順番に少しずつ遅らせて表示したいUI。

### 実装方針

- `:nth-child()` の列挙やHTMLへの `data-index` 付与を避けたい場合に検討する
- `sibling-index()` は1始まりなので、遅延時間では `sibling-index() - 1` にして0始まりへ調整する
- 表示順とDOM順が一致しているUIに使う
- 初回出現には `@starting-style` と組み合わせる
- 対応ブラウザが限定されるため、案件の対象環境を先に確認する

```scss
.list__item {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.35s ease-out,
    transform 0.35s ease-out;
  transition-delay: calc((sibling-index() - 1) * 0.04s);
}

@starting-style {
  .list__item {
    opacity: 0;
    transform: translateY(8px);
  }
}
```

### 判断基準

- 要素数が増減しても、CSS側の追記なしで順番演出を維持したいなら採用候補
- CMSやWordPressのループ出力など、HTML側で番号を付けにくい場合に有効
- 古いブラウザやWebView対応が重要な案件では、`nth-child()` やCSS変数をHTML側で渡す方法を優先する
- 視線誘導として必要な範囲に留め、長い一覧には強くかけない

### 避けること

- DOM順と見た目の順番が違う状態で使う
- 大量の要素に長い `transition-delay` を積み上げる
- 対応ブラウザを確認せず、本番UIの必須表現にする
- 遅延目的だけでJavaScriptのインデックス付与を増やす

### 関連

- `articles/2026-01-16-ics-media-css-sibling-index-count.md`
