var Vue   = require('vue'),
VueRouter = require('vue-router'),
auth      = require('./components/auth')

process.env = require('../.env')

Vue.use(require('html-loader'))
   .use(require('vue-resource'))
   .use(require('vue-validator'))
   .use(VueRouter)

 var App = Vue.extend({
   data () {
     return {
       auth: auth
     }
   }
 })

auth.init(Vue)

var router = new VueRouter({
  //history: true,
  //saveScrollPosition:  true,
  //hashbang: false
});

router.map(require('./http/routes.js'))

router.beforeEach(function (transition) {
  if (transition.to.auth && !auth.user.authenticated) {
    transition.redirect('/login')
  } else {
    transition.next()
  }
})

router.start(App, '#app')
