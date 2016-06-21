var PageModel = require('models/page')

module.exports = {
  template:   require('resources/views/pages/page/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  data: function () {
    return {
      item: {
        name: ''
      },
      page: 'Page Example',
    }
  },
  route: {
      data ({ to }) {
          this.fetchData(to.params.page)
      }
  },
  methods: {
    fetchData (page) {
      PageModel.read(this, 'pranks', page)
    }
  },

}