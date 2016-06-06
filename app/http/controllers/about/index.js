module.exports = {
  template:   require('resources/views/pages/about/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  data: function () {
    return {
      page: 'About',
    }
  },
  route: {
    data: function (transition) {
      this.$root.$set('seo', {
          title: 'About',
          description: 'About'
      });
    }
  }
}