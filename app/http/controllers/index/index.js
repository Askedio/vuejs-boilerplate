module.exports = {
  template:   require('resources/views/pages/index/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  route: {
    data: function (transition) {
      this.$root.$set('seo', {
          title: 'Index',
          description: 'Index'
      });
    }
  }
}