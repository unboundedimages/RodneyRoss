// var db = require('../models');
// var express = require('express');
// var router = express.Router();
// var path = require('path');


// router.get("/Port", function(req,res){
// 	console.log("this is req from greetings " + req)

// 	if(!req.User) {
// 		res.redirect('/signin');
// 	}

// 	db.loginLog.findAll({

// 		where: {
// 			id: req.User.id
// 		} 
// 	}).then(function(data) {
// 		console.log(data)
// 		var youAre = {
// 			userName: req.user.firstname
// 		};
// 		console.log("ururururururururururururururururururururururururururururu")
// 		console.log("ururururururururururururururururururururururururururururu")
// 		console.log("ururururururururururururururururururururururururururururu")
// 		console.log("ururururururururururururururururururururururururururururu")
// 		console.log(youAre)

// 		res.render("Port", youAre);
// 	});

// });

// module.exports = router;