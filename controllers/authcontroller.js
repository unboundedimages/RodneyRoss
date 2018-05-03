var exports = module.exports = {}
 //controller for signup
exports.signup = function(req, res) {
    res.render('signup');
 
}
//controller for sign in
exports.signin = function(req, res) {
    res.render('signin');
 
}
//controller for dashboard
exports.Port = function(req, res) {
    res.render('Port');
 
}
//controller for logging out and protecting route
exports.logout = function(req, res, next) {
 res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}

// server.use(function(req, res, next) {
//   res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   next();
// });