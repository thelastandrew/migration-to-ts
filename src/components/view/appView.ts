import News from './news/news';
import Sources from './sources/sources';
import { IDataResp, ISrcResp } from '../../types';

class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: IDataResp) {
        const values: IDataResp['articles'] | [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: ISrcResp) {
        const values: ISrcResp['sources'] | [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
