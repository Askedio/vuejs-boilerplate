module.exports = {
  template:   require('resources/views/pages/auth/login/template.html'),
  components: require('resources/views/layouts/app'),
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
      global.auth.login(this, credentials, 'home')
    }
  },
}