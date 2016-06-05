require('html-loader')
var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)


var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/bar': {
        component: require('./views/bar')
    }
})

router.start(App, '#app')


