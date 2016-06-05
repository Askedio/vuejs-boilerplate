var auth = require('../../components/auth')

module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      user: auth.user
    }
  },
  methods: {
    logout() {
      auth.logout()
    }
  }
}