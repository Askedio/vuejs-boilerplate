module.exports = {
  template:   require('resources/views/auth/login/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  data: function () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: '',

    }
  },
  route: {
    data: function (transition) {
      this.$root.$set('seo', {
          title: 'Login',
          description: 'Login'
      });
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