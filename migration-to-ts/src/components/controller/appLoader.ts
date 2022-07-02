import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'fa0e6ecad69a4e4395f90f8c85c88a16',
    });
  }
}

export default AppLoader;
