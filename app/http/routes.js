module.exports =  {
    '/': {
        component: require('./controllers/index')
    },
    '/home': {
        component: require('./controllers/home')
    },
    '/about': {
        component: require('./controllers/about')
    },
    '/contact': {
        component: require('./controllers/contact'),
        auth: true
    },
    '/login': {
        component: require('./controllers/auth/login')
    }
}
