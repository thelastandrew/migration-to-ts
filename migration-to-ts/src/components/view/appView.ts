import News from './news/news';
import Sources from './sources/sources';
import { DataResp, SrcResp } from '../../types';

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: DataResp) {
    const values: DataResp['articles'] | [] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: SrcResp) {
    const values: SrcResp['sources'] | [] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
