var bCrypt = require('bcrypt-nodejs'); //hashes

module.exports = function(passport, user, loginLog) {
	//initialize the passport-local strategy, and the user model, which will be passed as an argument.
	var Logs = loginLog;
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
						lastname: req.body.lastname,
						comment: req.body.comment,
						// last_login: req.body.last_login

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

		// create a serialize and deserialize function
		// to save a user ID in the session and manage 
		// retrieving the user details when needed.

		//serialize
		passport.serializeUser(function(user, done) {
			done(null, user.id);
		});
 // deserialize user 
 passport.deserializeUser(function(id, done) {
		//The Sequelize findById promise is to get the user data.
		User.findById(id).then(function(user) {
			if (user) {
		//To get the User object from this instance, we use the Sequelize getter function like this: user.get()
		done(null, user.get());
	}else {
		done(user.errors, null);
	}
});
	});


//LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy(

{
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    	passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    
    function(req, email, password, done) {
    	var Logs = loginLog;
    	var User = user;
		//the isValidPassword function compares the password entered with the bCrypt comparison
		// method since we stored our password with bcrypt.
		var isValidPassword = function(userpass, password) {
			return bCrypt.compareSync(password, userpass);
		}
		User.findOne({
			where: {
				email: email,
				// inclue: [models.Logs]
			}
		}).then(user => {

			// user.update({ last_login: Date.now() }).then(function(data, res) {
			// 	console.log(data);
			// 	// res.JSON(data);
			// });

			return 	user.increment('last_login', {by:1}).then( user => {
				console.log("-------------------")
				console.log("increment " + user);
				console.log("-------------------")
				// res.JSON(data);

				user.update({ last_login: Date.now() }).then(function(data, res) {
					console.log("update " + data);
			// 	// res.JSON(data);
		})
			});

			// User.update({ last_login: Date.now() }).then(function(newTime, created) {
			// 	console.log(data);
			// 	if (newTime) {
			// 		return done(null, newTime);
			// 	}
			// 	// res.JSON(data);
			// });


			// Timeline.create({ range: [] });
			// loginLog.create({ last_login: Date.now() }).then(function(data) {
			// 	console.log(data);
			// })

			// user.create({ last_login: Date.now() }).then(function(data) {
			// 	console.log(data);
			// })


			if (!user) {
				return done(null, false, {
					message: 'Email does not exist'
				});
			}
			if (!isValidPassword(user.password, password)) {
				return done(null, false, {
					message: 'Incorrect password.'
				});
			}

///////////////////////////////////////

var userinfo = user.get();
return done(null, userinfo);
}).catch(function(err) {
	console.log("Error:", err);
	return done(null, false, {
		message: 'Something went wrong with your Signin'
	});
});

// Logs.findOne({
// 	where: {
// 		last_login: last_login
// 	}
// }).then(function(lstlgn) {
// 	var lstlgn = {
// 		last_login : req.body.last_login
// 	};
// 	Logs.create(lstlgn).then(function(newTime, created){
// 		console.log(newTime)
// 	});
// });

}
));
}// end of module export