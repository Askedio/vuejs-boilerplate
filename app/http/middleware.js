module.exports = function(transition) {
    if (transition.to.path == '/login' && global.auth.user.authenticated) {
      transition.redirect('/')
      return
    }

    if (transition.to.auth && !global.auth.user.authenticated) {
      transition.redirect('/login')
      return
    }

    transition.next()
}