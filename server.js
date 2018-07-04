const express = require ('express');
const app = express();
const passport = require ('passport');
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const session = require ('express-session');
const bodyParser = require ('body-parser');
const env = require('dotenv').load();
const exphbs = require('express-handlebars');	
const PORT = process.env.PORT || 3306;
const path = require("path");



////////////////////////////////////////////////////////
///////middleware that will use LinkedIn authentication///////
////////////////////////////////////////////////////////
// passport.use(new LinkedInStrategy({
//   clientID: LINKEDIN_KEY,
//   clientSecret: LINKEDIN_SECRET,
//   callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
//   scope: ['r_emailaddress', 'r_basicprofile'],
//   state: true
// }, function(accessToken, refreshToken, profile, done) {
//   // asynchronous verification, for effect...
//   process.nextTick(function () {
//     // To keep the example simple, the user's LinkedIn profile is returned to
//     // represent the logged-in user. In a typical application, you would want
//     // to associate the LinkedIn account with a user record in your database,
//     // and return that user instead.
//     return done(null, profile);
//   });
// }));

////////////////////////////////////////////////////////
///////middleware that will handle authentication///////
////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//For Passport
app.use(session({
	secret: process.env.secret,
	// cookie:{maxAge:6000}, //need to work on cookie expiration so user doesn't remain logged in indefinitely
	resave: false,
	saveUninitialized: true     

}));
app.use(passport.initialize());///////////////////////////////////
app.use(passport.session());
app.use(express.static(path.join(__dirname, '/public'))); // for the css

// app.use(function(req, res, next) { // for logout - speaks to authcontrollers
// 	res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
// 	next();
// }); 

// For HBS
app.set('views', './views')
// app.engine('hbs', exphbs({ extname: '.hbs'}));  //alternative exphbs({ defaultLayout: "main" }));
app.engine('hbs', exphbs({
	defaultLayout: 'main.hbs',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {

    // res.send('You are here ↔');
    res.render('welcome')

});

// app.get('/auth/linkedin',
// passport.authenticate('linkedin'),
// function(req, res){
//     // The request will be redirected to LinkedIn for authentication, so this
//     // function will not be called.
//     // console.log("This linkedin isn't setup yet")
// });

// app.get('modals', './public/logic')

//models
let models = require("./models");

//routes
//require route from auth.js and pass it through as an arguement.
let authRoute = require('./routes/auth.js')(app, passport); // this comes from the model.export arguenent in auth.js

//load passport strategies
require('./config/passport/passport.js')(passport, models.user, models.loginLog, models.logoutLog);

// Sync to database
models.sequelize.sync({force: false}).then(function(){ //this line is relative to user.js in the models folder setting the value to true will drop the db/table
	database:"process.env.dbn"
	app.listen(PORT, function() {
		console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	});
	console.log("handshake")
}).catch(function(err){
	console.log("No connection to db.")
	console.log(err)
});

  //test server
  // app.get('/', function(req, res) {
  // 	res.redirect('/signin');
  // });