import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'fa0e6ecad69a4e4395f90f8c85c88a16',
    });
  }
}

export default AppLoader;
