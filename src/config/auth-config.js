export default {
  endpoint: "auth",
  configureEndpoints: ["auth"],

  loginUrl: "/authenticate",
  profileUrl: "/me",

  authTokenType: "JWT",
  accessTokenProp: "data",

  storageChangedReload: true,

  providers: {
    facebook: {
      name: "facebook",
      url: "/authenticate/facebook",
      clientId: "2175327869359032"
    },
    google: {
      name: "google",
      url: "/authenticate/google",
      clientId: "531559696910-4g6h64gmtgfmu90urqp6umrfgipouof7.apps.googleusercontent.com",
      state: function () {
        var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
        return encodeURIComponent(val);
      }
    }
  }
};
