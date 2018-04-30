const express = require ('express');
	  	app = express();
	  	passport = require ('./config/passport');
	  	session = require ('express-session');
	  	bodyParser = require ('body-parser');
	  	env = require('dotenv').load();
	  	exphbs = require('express-handlebars');	
	  	PORT = process.env.PORT || 8080;
	  	path = require('path');
	  	sequelize = require('sequelize');
 	  	db = require ('./models');
      //middleware that will handle authentication
		////////////////////////////////////////////
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
		

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(session({
    // secret: function makeid() {
            //   var text = "";
            //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            //   for (var i = 0; i < 8; i++)
            //     text += possible.charAt(Math.floor(Math.random() * possible.length));

            //   return text;
            // makeid()
            // }
            // ,
            secret: "sfsdufddsljfs",
            resave: true,
            saveUninitialized: true     

        }));
  app.use(passport.initialize());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(passport.session());

  //routes
  require("./routes/html-routes.js")(app, passport);
  require("./routes/api-routes.js")(app, passport);


  db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
    // console.log("App listening on PORT" + PORT)
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
});

  //test server
  app.get('/', function(req,res){
    res.redirect('/SignIn')
});
