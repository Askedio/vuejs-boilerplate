


module.exports = {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
      context.$http.post(process.env.SIGNUP_URL, creds).then(function (response) {
          localStorage.setItem('id_token', response.data.id_token)

          module.exports.user.authenticated = true

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

  init(app) {
    module.exports.setAuthHeader(app)
    this.user.authenticated = false
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
        app.http.get(process.env.VALIDATE_URL).then(function successCallback(response) {
            module.exports.user.authenticated = true
        }, function (response) {
            //
        });
    }
  },


  setAuthHeader(app) {
      app.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  }
}
