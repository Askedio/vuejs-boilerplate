require('html-loader')
var Vue = require('vue')
var auth = require('./components/auth')
var VueRouter = require('vue-router')

Vue.use(require('vue-resource'))

Vue.use(VueRouter)

var App = require('./views/index')


Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

auth.checkAuth()

var router = new VueRouter({
  //history: true,
  //saveScrollPosition:  true,
  hashbang: false
});

router.map({
    '/bar': {
        component: require('./views/bar'),
        auth: true
    },
    '/login': {
        component: require('./views/auth/login'),
    }
})

router.beforeEach(function (transition) {
  if (transition.to.auth && !auth.user.authenticated) {
    transition.redirect('/login')
  } else {
    transition.next()
  }
})




router.start(App, '#app')


