/* =======================================
 * ニュース記事一覧
 * URL: src/components/blog/BlogList.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import React from 'react';
import { NewsItem } from '@/types/news';
import styles from '@/styles/PageNews.module.scss';
import Link from 'next/link';

type Props = {
  items: NewsItem[];
};

const NewsList = ({ items }: Props) => {
  return (
    <ul className={styles.newsList}>
      {items.map((item) => (
        <li key={item.id} className={styles.newsItem}>
          <div className={styles.date}>{item.date}</div>
          <h3>{item.title}</h3>
          <p className={styles.excerpt}>{item.body.excerpt}</p>
          <Link href={`/news/${item.id}`} className={styles.readMore}>
            <span>続きを読む</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
