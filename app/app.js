var Vue     = require('vue'),
VueRouter   = require('vue-router')

global.auth = require('components/auth')

process.env = require('../.env')

Vue.use(require('html-loader'))
   .use(require('vue-resource'))
   .use(require('vue-validator'))
   .use(VueRouter)

var App = Vue.extend({})

global.auth.start(Vue)

var router = new VueRouter(require('components/router/settings'));

require('components/router')(router)

router.start(App, '#app')