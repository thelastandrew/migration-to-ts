import News from './news/news';
import Sources from './sources/sources';
import { Response } from '../../types';
import { SrcResp } from '../../types';

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: Response) {
    const values: Response['articles'] | [] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: SrcResp) {
    const values: SrcResp['sources'] | [] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
