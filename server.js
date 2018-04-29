const express = require ('express');
bodyParser = require ('body-parser');
session = require ('express-session');
passport = require ('./config/passport');	  
PORT = process.env.PORT || 8080;
path = require('path');
const sequelize = require('sequelize');	  
let db = require ('./models');		  
//middleware that will handle authentication
let app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "skadkahkajdaka", resave: true, saveUninitialized: true }));

//routes
require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app, passport);


db.sequelize.sync({ force: false }).then(function(){
	password: "fake",
	app.listen(PORT, function() {
	  	// console.log("App listening on PORT" + PORT)
	  	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	  });
});
//test server
app.get('/', function(req,res){
	res.redirect('/SignIn')
});
