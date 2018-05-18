// var db = require("../models");
// var Port = require("../views/Port");
// var authController = require('../controllers/authcontroller.js');
// // module.exports = function(app, passport) {
// 	app.get('/signin', authController.signin);
// 	app.get('/Port',isLoggedIn, authController.Port);

// 	app.post('/signin', logInLog, passport.authenticate('local-signin', {
//             successRedirect: '/Port', //this will change to a success page and then redirect to the sign in when this website is upgraded
//             failureRedirect: '/signup'
//         }),  //route for posting to /signin.

// 	);
// 	// .then(function(req, res) {
// 	// 	db.LoginLog.create(req.body).then(function(dbLoginLog) {
// 	// 		// res.json(dbLoginLog);
// 	// 		res.render('Port')
// 	// 	});
// 	// });


// 	app.put("/sigin", function(req, res) {
// 		db.LoginLog.update(
// 		req.body,
// 		{
// 			where: {
// 				last_login: req.body.last_login
// 			}
// 		}).then(function(dbLoginLog) {
// 			// res.json(dbLoginLog);
// 			res.render('Port')
// 		});
// 	});

// 		//custom middleware to protect route
// 		function isLoggedIn(req, res, next) {
// 			if (req.isAuthenticated())
// 			return next();
// 		res.redirect('/signin');
// 	}

// }


// function logInLog(req, res, next) {

// 	db.LoginLog.create(req.body).then(function(dbLoginLog) {
// 	});
// }