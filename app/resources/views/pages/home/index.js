module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      css: require('./template.less')
    }
  },
  components: require('../../layouts/app')
}