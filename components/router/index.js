module.exports = function(router) {
  router.map(require('http/routes'))

  router.redirect(require('http/redirects'))

  router.beforeEach(require('http/middleware'))

  router.afterEach(require('http/after'))
}