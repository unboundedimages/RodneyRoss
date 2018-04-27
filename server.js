const express = require ('express');
	  bodyParser = require ('body-parser');
	  session = require ('express-session');
	  passport = require ('./config/passport');	  
	  PORT = process.env.PORT || 8080;
  let db = require ('./models');		  
	  //middleware that will handle authentication
  let app = express();
	  app.use(bodyParser.urlencoded({ extended: false }));
	  app.use(bodyParser.json());
	  app.use(express.static("public"));
	  app.use(session({
	  	secret: function makeid() {
				  var text = "";
				  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				  for (var i = 0; i < 8; i++)
				    text += possible.charAt(Math.floor(Math.random() * possible.length));

				  return text;
				}
				makeid(),
		resave: true,
		saveUninitialzed: true		

	  }));
	  app.use(passport.initialize());
	  app.use(passpoer.session());

	  //routes
	  require("./routes/html-routes.js")(app);
	  require("./routes/api-routes.js")(app);

	  //test server
	  app.get('/', function(req,res){
	  	res.send("The server is working")
	  });

	  db.sequelize.sync().then(function(){
	  	app.listen(PORT, function() {
	  	// console.log("App listening on PORT" + PORT)
	  	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	  	});
	  });

	  
