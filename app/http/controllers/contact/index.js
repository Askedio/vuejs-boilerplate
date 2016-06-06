module.exports = {
  template:   require('resources/views/pages/contact/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  data: function () {
    return {
      page: 'Contact',
    }
  },
  route: {
    data: function (transition) {
      this.$root.$set('seo', {
          title: 'Contact',
          description: 'Contact'
      });
    }
  }
}