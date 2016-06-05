var auth = require('../../../../components/auth')

module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit() {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials, 'home')
    }
  }
}