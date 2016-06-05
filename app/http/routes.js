module.exports =  {
    '/': {
        component: require('../resources/views/pages/index')
    },
    '/home': {
        component: require('../resources/views/pages/home')
    },
    '/about': {
        component: require('../resources/views/pages/about')
    },
    '/contact': {
        component: require('../resources/views/pages/contact'),
        auth: true
    },
    '/login': {
        component: require('../resources/views/auth/login')
    }
}
