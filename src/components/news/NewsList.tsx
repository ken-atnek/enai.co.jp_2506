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
import { stripHtmlExceptBr } from '@/lib/stripHtml';

type Props = {
  items: NewsItem[];
  showBody?: boolean;
};

const NewsList = ({ items, showBody = false }: Props) => {
  return (
    <ul className={styles.newsList}>
      {items.map((item) => (
        <li key={item.id} className={styles.newsItem}>
          <div className={styles.date}>{item.date}</div>
          <h3>{item.title}</h3>
          {showBody && (
            <p className={styles.excerpt}>{stripHtmlExceptBr(item.body.content)}</p>
          )}
          <Link href={`/news/detail?id=${item.id}`} className={styles.readMore}>
            <span>続きを読む</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
