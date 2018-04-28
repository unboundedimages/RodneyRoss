let db = require("../models");
    passport = require("../config/passport");

    module.exports = function(app) {
    	app.post("/api/login", passport.authenticate("local"), function(req,res) {
    		res.json("/port");
    	});

    	app.post("/api/signup", function(req, res) {
    		console.log(req.body);
    		db.User.create({
    			username: req.body.username,
    			email: req.body.email,
    			password: req.body.password
    		}).then(function() {
    			res.redirect(307, "/api/login");
    		}).catch(function(err) {
    			console.log(err);
    			res.json(err);
    		});
    	});
    	//logout
    	app.get("/logout", function(req,res) {
    		req.logout();
    		res.redirect("/");
    	});
    	// Gets some data about the user to be used client side.
    	app.get("/api/user_data", function(req,res) {
    		if(!req.user) { //if not logged in
    			res.json({}) // send back an empty object
    		}
    		else {
    			//sendback the user's username email and id.
    			res.json({
    				username: req.user.username,
    				email: req.user.email,
    				id: req.user.id
    			});

    		}

    	});
    };