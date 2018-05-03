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
exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}