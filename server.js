const express = require ('express');
	  	app = express();
	  	passport = require ('passport');
	  	session = require ('express-session');
	  	bodyParser = require ('body-parser');
	  	env = require('dotenv').load();
	  	exphbs = require('express-handlebars');	
	  	PORT = process.env.PORT || 8080;
	  	path = require("path");

////////////////////////////////////////////////////////
///////middleware that will handle authentication///////
////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//For Passport
app.use(session({
            secret: "fdjdjdjdjdjdjdjd",
            resave: true,
            saveUninitialized: true     

        }));
app.use(passport.initialize());///////////////////////////////////
app.use(passport.session());
app.use(express.static(path.join(__dirname, '/public'))); // for the css
// For HBS
app.set('views', './views')
app.engine('hbs', exphbs({ extname: '.hbs'}));  //alternative exphbs({ defaultLayout: "main" }));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
 
    // res.send('You are here ↔');
	res.render('welcome')
 
});

//models
let models = require("./models");

//routes
//require route from auth.js and pass it through as an arguement.
let authRoute = require('./routes/auth.js')(app, passport); // this comes from the model.export arguenent in auth.js
		
//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Sync to database
models.sequelize.sync().then(function(){
	 app.listen(PORT, function() {
	    // console.log("App listening on PORT" + PORT)
	 console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	});
	console.log("handshake")
	}).catch(function(err){
		console.log("No connection to db.")
	});

  //test server
  app.get('/', function(req,res){
    res.redirect('/signin')
});
