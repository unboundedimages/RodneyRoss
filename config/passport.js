const passport = require('passport');
	  LocalStrategy = require('passport-local').Strategy;
	  db = require('../models');

passport.use(new LocalStrategy(
	{
		usernameField: "email"
	},
	function(email, password, done) {
		db.User.findOne({
			where: {
				email: email
			}
		}).then(function(dbUser) {
			if (!dbUser) {
				return done(null, false, {
					message: "Incorrect username or create an account if you don't have one"
				});
			}
			else if (!dbUser.validPassword(passowrd)) {
				return done(null, false, {
					message: "Incorrect username or password.  Please try again"
				});
			}
			return done(null, dbUser);
		});
	}
	));

// // Require bcrypt for hashing
// const bcrypt = require("bcrypt-nodejs");
// //method for User model
// 	User.prototype.validPassword = function(password) {
// 		return bcrypt.compareSync(password, this.password);
// 	};
// User.hook("beforeCreate", function(user){
// 		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// 	});

// // this portion of the boiler plate keeps the authentication state across HTTP requests

passport.serializeUser(function(user, cb) {
	cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
	cb(null,obj);
});
 module.exports = passport;