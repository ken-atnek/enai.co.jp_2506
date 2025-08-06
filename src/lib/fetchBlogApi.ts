import type { BlogItem } from '@/types/blog';

type ApiBlogItem = {
  k_id: number | string;
  k_date?: string;
  k_title: string;
  k_body: string;
  k_img?: string;
  k_total?: number;
};
export async function fetchBlogs(
  limit = 9,
  offset = 0,
  apiUrl = `https://enai.co.jp/api/blog/index.php?limit=${limit}&offset=${offset}`
): Promise<{ blogs: BlogItem[]; total: number }> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error(`ブログAPIエラー (${res.status})`);
      return { blogs: [], total: 0 };
    }
    const rawData: ApiBlogItem[] = await res.json();
    const total = rawData.length > 0 && rawData[0].k_total ? Number(rawData[0].k_total) : 0;
    const blogs: BlogItem[] = rawData.map((item) => ({
      id: String(item.k_id),
      date: item.k_date || '',
      title: item.k_title,
      body: {
        excerpt: '',
        content: item.k_body,
      },
      firstImage: item.k_img || '',
    }));
    //応答
    return { blogs, total };
  } catch (err) {
    console.error('fetchBlogs取得失敗:', err);
    return { blogs: [], total: 0 };
  }
}
