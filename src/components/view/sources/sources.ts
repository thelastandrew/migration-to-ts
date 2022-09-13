import './sources.css';
import { ISrcResp } from '../../../types';
import type { Source } from '../../../types';

class Sources {
    draw(data: ISrcResp['sources']) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: Source) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;

            (sourceClone.querySelector('.source__item-name') as HTMLDivElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
