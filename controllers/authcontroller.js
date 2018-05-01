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
exports.dashboard = function(req, res) {
    res.render('dashboard');
 
}