//we import the auth controller and define the signup route

var authController = require('../controllers/authcontroller.js');
module.exports = function(app) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
	//route for posting signgup
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
     
            failureRedirect: '/signup'
        }
     
    ));
}