/* =======================================
 * ブログ記事DATA
 * URL:src/data/blogData.ts
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */


import { NewsItem } from '@/types/news';
import { body001 } from "./newsBody/body001";
import { body002 } from "./newsBody/body002";


export const newsData: NewsItem[] = [


  {
    id: "002",
    date:"2024年3月26日",
    title: "コロナウィルス感染症対策について",
    body: body002,
  },

  {
    id: "001",
    date:"2024年3月25日",
    title: "新型コロナウィルス感染症対策について",
    body: body001,
  },

];