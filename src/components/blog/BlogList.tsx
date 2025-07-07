/* =======================================
 * ブログ記事一覧
 * URL: src/components/blog/BlogList.tsx
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */
import React from 'react';
import { BlogItem } from '@/types/blog';
import styles from '@/styles/PageBlog.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  items: BlogItem[];
};

const BlogList = ({ items }: Props) => {
  return (
    <ul className={styles.newsList}>
      {items.map((item) => (
        <li key={item.id} className={styles.newsItem}>
          <Link href={`/blog/detail?id=${item.id}`}>
            <Image
              src={item.firstImage || '/images/no-image.webp'} // デフォルト画像を設定
              width={300}
              height={200}
              alt={item.title}
              className={styles.thumbnail}
            />
          </Link>
          <h3>{item.title}</h3>
          <p className={styles.excerpt}>{item.body.excerpt}</p>
          <Link href={`/blog/detail?id=${item.id}`} className={styles.readMore}>
            <span>続きを読む</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
