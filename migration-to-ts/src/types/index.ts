export interface DataResp {
  status: Status;
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
  status: Status;
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

enum Status {
  OK = 'ok',
  ERROR = 'error',
}

export type GetResp = {
  endpoint: Endpoint;
  options?: { sources?: string };
};

enum Endpoint {
  SOURCES = 'sources',
  EVERYTHING = 'everything',
}

export interface Options {
  [key: string]: string;
}
