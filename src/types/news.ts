import { ReactNode } from "react";

export type NewsItem = {
  id: string;
  date:string;
  title: string;
    body: {
    content: ReactNode;
    excerpt: string;
  };
};
