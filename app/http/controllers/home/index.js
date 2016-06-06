module.exports = {
  template:   require('resources/views/pages/home/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  data: function () {
    return {
      page: 'Home',
    }
  },
  route: {
    data: function (transition) {
      this.$root.$set('seo', {
          title: 'Home',
          description: 'Home'
      });
    }
  }
}