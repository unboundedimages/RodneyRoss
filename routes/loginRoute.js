var db = require("../models");
var Port = require("../views/Port");
var authController = require('../controllers/authcontroller.js');
module.exports = function(app, passport) {
	app.get('/signin', authController.signin);
	app.get('/Port',isLoggedIn, authController.Port);

	app.post('/signin', passport.authenticate('local-signin'),  //route for posting to /signin.
	function(req, res) {
		
		db.LoginLog.create(req.body).then(function(dbLoginLog) {
			// res.json(dbLoginLog);
			// return res.sucessRedirect('Port');
			// res.failureRedirect('signin')
			// res.redirect('Port' + req.body.last_login)
			res.render('Port')
		});
	}
	);
	// .then(function(req, res) {
	// 	db.LoginLog.create(req.body).then(function(dbLoginLog) {
	// 		// res.json(dbLoginLog);
	// 		res.render('Port')
	// 	});
	// });
	

	app.put("/sigin", function(req, res) {
		db.LoginLog.update(
		req.body,
		{
			where: {
				last_login: req.body.last_login
			}
		}).then(function(dbLoginLog) {
			// res.json(dbLoginLog);
			res.render('Port')
		});
	});

		//custom middleware to protect route
		function isLoggedIn(req, res, next) {
			if (req.isAuthenticated())
			return next();
		res.redirect('/signin');
	}

}