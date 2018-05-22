//show user name on port dashboard
//get dependencies
//setup route
// pull user first name from user.js in models

let db = require('../models');
express = require('express');
router = express.Router();
path = require('path');


router.get("/Port", function(req,res){
	if(!req.user) {
		res.redirect('/signin');
	}

	db.loginLogs.findAll({

		where: {
			userId: req.User.id
		} 
	}).then((data)=>{
		console.log(data)
		var youAre = {
			userName: req.User.firstname
		};
		console.log("ururururururururururururururururururururururururururururu")
		console.log("ururururururururururururururururururururururururururururu")
		console.log("ururururururururururururururururururururururururururururu")
		console.log("ururururururururururururururururururururururururururururu")
		console.log(youAre)

		res.render("greetings", youAre);
	});

});

module.exports = router;