module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      page:'Bar',
      css: require('./template.less')
    }
  }
}