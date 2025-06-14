/* =======================================
 * 童心に返った夏祭り
 * URL: src/data/blogBody/body001.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import Image from 'next/image';
import ImgDetail01 from '@/assets/images/blog/002/CIMG5092.webp';

export const body002 = {
  firstImage: ImgDetail01,
  excerpt:
    '残暑厳しい中、皆様の食欲はいかがですか？梨園では、いつでも美味しいお食事が提供されおなか一杯に食べています。おかげで、夏バテなんて関係ない・・・・',
  content: (
    <>
      <p>
        綿あめを頬張り昔の甘味を思いだす
        <br />
        「美味しかね!!」
        <br />
        金魚を必死に追いかけすくう姿は
        <br />
        無邪気な憧心に返り「懐かしかね!!」
        <br />
        あいにくの雨模様でしたが、気分は上天気☀
        <br />
        お揃いの法被を着てハイチーズ
      </p>
      <Image src={ImgDetail01} alt="記事画像" />
    </>
  ),
};
