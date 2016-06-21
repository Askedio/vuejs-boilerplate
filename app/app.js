var Vue     = require('vue'),
VueRouter   = require('vue-router'),
route       = require('router')

global.auth = require('auth')

process.env = require('../.env')

Vue.use(require('vue-resource'))
   .use(require('vue-seo'))
   .use(require('vue-validator'))
   .use(VueRouter)

var App = Vue.extend({})

global.auth.start(Vue)

var router = new VueRouter(require('config/router'))

route(router)

router.start(App, 'html')