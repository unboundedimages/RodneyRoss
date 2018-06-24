// const db = require("../models");

var exports = module.exports = {}
 //controller for signup
 exports.signup = function(req, res) {
 	exports.logout;
 	exports.signin;
 	res.render('signup');

 }
//controller for sign in
exports.signin = function(req, res) {
	exports.logout;

	res.render('signin');

}

//controloler for welcome
exports.welcome = function(req,res) {
	res.render('welcome')
}

exports.modal = function(req,res) {
	res.render('modal')
}

//controller for dashboard
exports.Port = function(req, res) {
	// console.log("this is req from authcontroller.js: ", req)
	var path = require('path');
	var db = require('../models');
	db.loginLog.findAll({

		where: {
			id: req.user.id
		} 
	}).then(function(data) {
		// console.log(data)
		var youAre = {
			userName: req.user.firstname
		};

		res.render('Port', youAre);
	});

}
//controller for logging out and protecting route
exports.logout = function(req, res, next) {

	var db = require("../models");

	db.LogoutLog.update({ logout_time: Date.now() },

	{where:
		{logout_time: req.body.logout_time}    
	}

	).then(function(data, res) {
		console.log(data);
	});

	req.body.logout_time = Date.now()
	db.LogoutLog.create(req.body).then(function(dbLogoutLog){
	});

	req.logout();	
	req.session.destroy(function(err) {
		// res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0')
		res.clearCookie('connect.sid');
		res.redirect('signin');
		next();
		
	});   


}

exports.modals = function(req,res) {
	console.log("this is req from authcontroller.js: ", req)
	var path = require('path');
	var db = require('../models');
	db.loginLog.findAll({

		where: {
			id: req.user.id
		} 
	}).then(function(data) {
		// console.log(data)
		var youAre = {
			userName: req.user.firstname
		};

		res.render('partials/modals', youAre)

	});
	
}