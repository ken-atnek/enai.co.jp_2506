import type { NewsItem } from '@/types/news';

type ApiNewsItem = {
  k_id: number | string;
  k_date?: string;
  k_title: string;
  k_body: string;
  k_total?: number;
};

export async function fetchNews(
  limit = 3,
  offset = 0,
  apiUrl = `https://demo-enai.tuna-pic.co.jp/api/news/index.php?limit=${limit}&offset=${offset}`
): Promise<{ news: NewsItem[]; total: number }> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error(`ニュースAPIエラー (${res.status})`);
      return { news: [], total: 0 };
    }
    const rawData: ApiNewsItem[] = await res.json();
    const total = rawData.length > 0 && rawData[0].k_total ? Number(rawData[0].k_total) : 0;
    const news: NewsItem[] = rawData.map((item) => ({
      id: String(item.k_id),
      date: item.k_date || '',
      title: item.k_title,
      body: {
        excerpt: '',
        content: item.k_body,
      },
    }));
    //応答
    return { news, total };
  } catch (err) {
    console.error('fetchNews取得失敗:', err);
    return { news: [], total: 0 };
  }
}
