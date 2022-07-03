import AppLoader from './appLoader';
import { Endpoint, CallbackType, DataResp, SrcResp } from '../../types';

class AppController extends AppLoader {
  getSources(callback: CallbackType<SrcResp>) {
    super.getResp(
      {
        endpoint: Endpoint.SOURCES,
      },
      callback
    );
  }

  getNews(e: Event, callback: CallbackType<DataResp>) {
    let target = e.target as HTMLDivElement;
    const newsContainer = e.currentTarget as HTMLDivElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoint.EVERYTHING,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLDivElement;
    }
  }
}

export default AppController;
