//we import the auth controller and define the signup route
// var logincontroller = require ('../controllers/logincontroller')
var authController = require('../controllers/authcontroller.js');
module.exports = function(app, passport) {
	app.get('/signup', authController.signup);
	app.get('/signin', authController.signin);
	//route for posting signgup
	app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/Port', //this will change to a success page and then redirect to the sign in when this website is upgraded
            failureRedirect: '/signup'
        }
        ));
    app.get('/Port',isLoggedIn, authController.Port);//protects route
    app.get('/logout',authController.logout);
    app.post('/signin', passport.authenticate('local-signin', { //route for posting to /signin.
    	successRedirect: '/Port',
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