export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',              nav: true, title: 'Welcome' },
      { route: 'login',         name: 'login',        moduleId: './modules/login/index',        nav: true, title: 'Login' },
      { route: 'logout',         name: 'logout',        moduleId: './modules/logout/index',        nav: true, title: 'Logout' }
    ]);

    this.router = router;
  }
}
