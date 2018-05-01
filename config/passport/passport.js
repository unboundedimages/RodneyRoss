var bCrypt = require('bcrypt-nodejs'); //hashes

module.exports = function(passport, user) {
	//initialize the passport-local strategy, and the user model, which will be passed as an argument.
	var User = user;
	var LocalStrategy = require('passport-local').Strategy;

    //define our custom strategy with our instance of the LocalStrategy
    passport.use('local-signup', new LocalStrategy(

    { //declare what request (req) fields our usernameField and passwordField (passport variables) are. 
    	usernameField: 'email',
    	passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { //callback function with arguments that store user details.
    	var generateHash = function(password) { // hashes password

    		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null); 
    	};

			//using the Sequelize user model we initialized earlier as User, we check to see if the user already exists, and if not we add them. 
			User.findOne({
				where: {
					email: email
				}
			}).then(function(user) {
				if (user)
				{
					return done(null, false, {
						message: 'That email is already taken'
					});

				} 
				else{
					var userPassword = generateHash(password);
					var data =
					{
						email: email,
						password: userPassword,
						firstname: req.body.firstname,
						lastname: req.body.lastname

					};
					User.create(data).then(function(newUser, created) { 
						if (!newUser) {
							return done(null, false);
						}
						if (newUser) {
							return done(null, newUser);
						}
					});
				}
			});
		}
	));
 }
