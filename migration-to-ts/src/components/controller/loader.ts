import { GetResp, Options } from '../../types';

class Loader {
  constructor(public baseLink: string, public options: { [apiKey: string]: string }) {}

  getResp(
    { endpoint, options = {} }: GetResp,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: string,
    endpoint: GetResp['endpoint'],
    callback: (data: JSON) => void,
    options: GetResp['options'] = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: JSON) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
