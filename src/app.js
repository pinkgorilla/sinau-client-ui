export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
      { route: 'login', name: 'login', moduleId: './modules/login/index', nav: false, title: 'Login' },
      { route: 'profile', name: 'profile', moduleId: './modules/profile/index', nav: false, title: 'Profile' },
      { route: 'logout', name: 'logout', moduleId: './modules/logout/index', nav: false, title: 'Logout' }
    ]);

    this.router = router;
  }
}
