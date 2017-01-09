import { AuthService } from 'aurelia-authentication';
import { inject } from 'aurelia-framework';
@inject(AuthService)

export class Profile {
  constructor(auth) {
    this.auth = auth;
    this.profile = null;
  };
  activate() {
    return this.auth.getMe()
      .then(result => {
        this.profile = result.data;
      });
  }
  heading = 'Profile';

  link(provider) {
    return this.auth.authenticate(provider, true, null)
      /*.then((response)=>{
        console.log("auth response " + response);
        return this.auth.getMe();
      })*/
      .then(() => this.auth.getMe())
      .then(result => {
        this.profile = result.data;
      })
      .catch(err => {
        console.log("profile failure");
      });
  }
  unlink(provider) {
    return this.auth.unlink(provider)
      /*.then((response)=>{
        console.log("auth response " + response);
        return this.auth.getMe();
      })*/
      .then(() => this.auth.getMe())
      .then(result => {
        this.profile = result.data;
      });;
  }
  email = '';
  password = '';
}
