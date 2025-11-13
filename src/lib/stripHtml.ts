/**
 * 改行（<br>）以外の HTML タグを除去する関数
 * @param html - HTML 文字列
 * @returns 改行を削除して1行にまとめたテキスト
 */
export function stripHtmlExceptBr(html: string): string {
  const placeholder = '__BR_PLACEHOLDER__';
  // <br> タグをプレースホルダーに置き換え
  const withPlaceholder = html.replace(/<br\s*\/?>/gi, placeholder);
  // 他の HTML タグを除去
  const withoutTags = withPlaceholder.replace(/<[^>]+>/g, '');
  // HTMLエンティティ（&nbsp; など）を空白に置き換え
  const withoutEntities = withoutTags.replace(/&nbsp;/g, ' ');
  // プレースホルダーを空白に置き換え、改行を削除
  return withoutEntities
    .replace(new RegExp(`${placeholder}`, 'g'), ' ') // プレースホルダーを空白に置き換え
    .replace(/\s+/g, ' ') // 余分な空白や改行を1つの空白にまとめる
    .trim(); // 先頭と末尾の空白を削除
}
