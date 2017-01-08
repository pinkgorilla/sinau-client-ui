import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';

@inject(AuthService)
export class Index {
  constructor(auth) {
    this.auth = auth;
  };

  authenticate(name) {
    return this.auth.authenticate(name, false, null)
      .then((response) => {
          console.log(response);
          console.log(this.auth.config);
      });
  }
}
