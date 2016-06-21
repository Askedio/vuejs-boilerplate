module.exports = {
  template:   require('resources/views/pages/contact/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  data: function () {
    return {
      page: 'Contact',
    }
  }
}