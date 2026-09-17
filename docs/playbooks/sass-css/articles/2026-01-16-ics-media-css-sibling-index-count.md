# CSSでスタッガーアニメーションがつくれる！ sibling-index() / sibling-count()の活用アイデア

## URL

https://ics.media/entry/260116/

## この記事の要点

- `sibling-index()` は、対象要素が兄弟要素の中で何番目かを整数で返す
- `sibling-count()` は、対象要素を含む兄弟要素の総数を整数で返す
- どちらも引数なしで使い、`calc()`、`transition-delay`、`animation-delay`、`hsl()`、`oklch()`、`transform` などと組み合わせやすい
- `sibling-index()` は `:nth-child()` と同じく1始まりなので、0始まりにしたい場合は `sibling-index() - 1` にする
- スタッガーアニメーションでは、`:nth-child()` の列挙やJavaScriptでのインデックス付与を減らせる
- `sibling-index()` と `sibling-count()` を組み合わせると、要素数に応じた角度・色・配置をCSSだけで調整できる
- 対応ブラウザは新しめなので、本番導入前に対象環境の確認が必要

## 実案件で使うなら

CMSやWordPressのループ出力、カード一覧、メニュー、ギャラリーなど、要素数が変わるUIに対して順番演出を加えるときに使う。

特に相性がいいのは次のような場面。

- カードやメニューを順番にフェードインさせる
- タグやアイコンの色を順番に少しずつ変える
- 円形配置や扇形配置で、要素数に応じた角度を計算する
- HTML側へ `style="--index: ..."` や `data-index` を出しにくい
- Sassの `@for` で固定数ぶん生成していた指定を減らしたい

## 判断基準

- 要素数が可変で、CSSだけで順番や総数を使いたいなら採用候補
- 表示順とDOM順が一致しているかを先に確認する
- 古いSafari、古いWebView、保守対象のブラウザがある案件では慎重に扱う
- 主要導線や必須レイアウトでは、フォールバックを用意できる場合だけ使う
- 固定数の装飾なら、Sassループや `nth-child()` の方が分かりやすい場合もある

## 避けること

- 対応ブラウザを確認せず、必須UIの表示制御に使う
- DOM順と視覚順が違うUIでスタッガー演出を作る
- 100件以上の一覧などに長い遅延を積み上げる
- 本文やフォームなど、読みやすさが優先される要素を派手に順番表示する
- CSS計算だけで複雑なレイアウトロジックを抱え込みすぎる

## 実装メモ

```scss
.list__item {
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

```scss
.fan__item {
  transform:
    translateX(-50%)
    rotate(calc((sibling-index() - (sibling-count() + 1) / 2) * 8deg))
    translateY(-24px);
}
```

## プレイブック反映先

- `animation.md` の「sibling-index() でスタッガーアニメーションを作る」
- `layout.md` の「sibling-count() で要素数に応じた配置を作る」

## 参考

- ICS MEDIA「CSSでスタッガーアニメーションがつくれる！ sibling-index() / sibling-count()の活用アイデア」
- MDN `sibling-index()` CSS function
- MDN `sibling-count()` CSS function
