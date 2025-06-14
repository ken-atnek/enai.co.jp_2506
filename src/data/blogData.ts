/* =======================================
 * ブログ記事DATA
 * URL:src/data/blogData.ts
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */


import { BlogItem } from '@/types/blog';

import { body001 } from "./blogBody/body001";
import { body002 } from "./blogBody/body002";


export const blogData: BlogItem[] = [

  {
    id: "002",
    title: "童心に返った夏祭り",
    body: body002,
  },
  {
    id: "001",
    title: "自慢のお昼ごはんです",
    body: body001,
  },

];