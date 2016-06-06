module.exports = {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
      var self = this;
      context.$http.post(process.env.SIGNUP_URL, creds).then(function (response) {
          localStorage.setItem('id_token', response.data.id_token)

          self.user.authenticated = true

          if(redirect) {
            context.$route.router.go(redirect)
          }
      }, function (response) {
          context.error = response.data
      });
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  start(Vue) {

    var self = this;
    var jwt = localStorage.getItem('id_token')

    self.setAuthHeader(Vue)
    self.user.authenticated = false

    if(!jwt) {
      return;
    }

    Vue.http.get(process.env.VALIDATE_URL).then(function successCallback(response) {
        self.user.authenticated = true
    }, function (response) {
        //
    });


  },


  setAuthHeader(Vue) {
      Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  }
}
