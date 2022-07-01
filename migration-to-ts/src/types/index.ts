export interface Response {
  status: string;
  totalResults: number;
  articles: Array<Article>;
}

export type Article = {
  source: { id: string | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface SrcResp {
  status: string;
  sources: Array<Source>;
}

export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};
