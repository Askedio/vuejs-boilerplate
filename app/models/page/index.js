module.exports = {
  pagination: function() {
    return {
      items: [],
      pagination: {
        total: 0,
        per_page: 1,
        total_pages: 0,
        count: 0,
        current_page: 0,
        order: 'trending'
      }
    }
  },
  list: function(controller, route) {
      var data = {
        limit: controller.pagination.per_page,
        page: controller.pagination.current_page,
        order: controller.pagination.order,
      };

      controller.$http.get(process.env.API_URL + '/' + route, data).then(function (response) {
        controller.$set('items', response.data.data);
        controller.$set('pagination.total', response.data.meta.pagination.total);
        controller.$set('pagination.total_pages', response.data.meta.pagination.total_pages);
        controller.$set('pagination.count', response.data.meta.pagination.count);
      }, function(error) {
        controller.$route.router.go('/404')
      });
  },
  read: function(controller, route, page) {
    controller.$http.get(process.env.API_URL + '/' + route + '/'+ page).then(function (response) {
      controller.$set('item', response.data);
    }, function(error) {
      controller.$route.router.go('/404')
    });
  }
}