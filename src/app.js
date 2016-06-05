var Vue = require('vue')
var auth = require('./components/auth')
var VueRouter = require('vue-router')

Vue.use(require('html-loader'))
Vue.use(require('vue-resource'))
Vue.use(require('vue-validator'))
Vue.use(VueRouter)

var App = Vue.extend({
  data () {
    return {
      auth: auth
    }
  }
})

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

Vue.partial('header', 'oj')

Vue.component('navbar',  require('./views/partials/header/nav'));

auth.checkAuth()




var router = new VueRouter({
  //history: true,
  //saveScrollPosition:  true,
  //hashbang: false
});

router.map({
    '/': {
        component: require('./views/index')
    },
    '/home': {
        component: require('./views/home')
    },
    '/about': {
        component: require('./views/about')
    },
    '/contact': {
        component: require('./views/contact'),
        auth: true
    },
    '/login': {
        component: require('./views/auth/login')
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
