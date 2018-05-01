//we import the auth controller and define the signup route

var authController = require('../controllers/authcontroller.js');
module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/logout',authController.logout);
    app.get('/dashboard',isLoggedIn, authController.dashboard);//protects route
	//route for posting signgup
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
    ));
	//custom middleware to protect route
	function isLoggedIn(req, res, next) {
	 
	    if (req.isAuthenticated())
	     
	        return next();
	         
	    res.redirect('/signin');
	 
	}


}