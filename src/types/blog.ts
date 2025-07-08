// import { StaticImageData } from "next/image";
// import { ReactNode } from "react";

export type BlogItem = {
  id: string;
  title: string;
    body: {
    // firstImage: StaticImageData;
    excerpt: string;
    content: string;
  };
  firstImage?: string; // 画像URLがある場合は設定
};
