
const API_URL = 'http://localhost:3003/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

module.exports = {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
      context.$http.post(SIGNUP_URL, creds).then(function (response) {
          localStorage.setItem('id_token', response.id_token)

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

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
