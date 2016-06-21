module.exports =  {
    '/': {
        component: require('./controllers/index')
    },
    '/home': {
        component: require('./controllers/home')
    },
    '/browse/:page': {
        component: require('./controllers/browse')
    },
    '/page/:page': {
        component: require('./controllers/page')
    },
    '/about': {
        component: require('./controllers/about')
    },
    '/contact': {
        component: require('./controllers/contact'),
        auth: true
    },
    '/login': {
        component: require('./controllers/login')
    },
    '*': {
        component: require('./controllers/home')
    }
}
