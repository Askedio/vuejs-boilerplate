module.exports = {
  template: require('./template.html'),
  data: function () {
    return {
      user: global.auth.user
    }
  },
  methods: {
    logout() {
      global.auth.logout(this)
    }
  }
}