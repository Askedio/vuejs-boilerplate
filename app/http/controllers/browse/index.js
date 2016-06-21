var PageModel = require('models/page')

module.exports = {
  template:   require('resources/views/pages/browse/template.html'),
  components: require('resources/views/layouts/app'),
  replace: true,
  data: function () {
    var data = PageModel.pagination()
    data.page = 'Browse Example'
    return data
  },
  route: {
      data({ to }) {
          this.pagination.current_page = to.params.page
      }
  },
  methods: {
    fetchData() {
      PageModel.list(this, 'pranks')
    }
  },

}