import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type BlogItem = {
  id: string;
  title: string;
    body: {
    firstImage: StaticImageData;
    excerpt: string;
    content: ReactNode;
  };
};
