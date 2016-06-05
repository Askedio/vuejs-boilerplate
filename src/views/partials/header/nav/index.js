module.exports = {
  template: require('./template.html'),
  methods: {
    logout() {
      this.$root.auth.logout()
    }
  }
}