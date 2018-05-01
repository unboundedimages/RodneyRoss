//we import the auth controller and define the signup route

var authController = require('../controllers/authcontroller.js');
module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
	//route for posting signgup
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
    ));
    app.get('/dashboard',isLoggedIn, authController.dashboard);//protects route
    app.get('/logout',authController.logout);
    app.post('/signin', passport.authenticate('local-signin', { //route for posting to /signin.
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
    ));
	//custom middleware to protect route
	function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated())
	        return next();
	    res.redirect('/signin');
	}
}