var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
	//initialize the passport-local strategy, and the user model, which will be passed as an argument.
	var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    //define our custom strategy with our instance of the LocalStrategy
    passport.use('local-signup', new LocalStrategy(
 
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
 
    },
    function(req, email, password, done) { //callback function
    	var generateHash = function(password) { // hashes password

     		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null); 
				}; 
			}
 
	));
 
}

