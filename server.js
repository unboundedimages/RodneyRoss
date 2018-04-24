const express= require ('express');
	  bodyParser= require ('body-parser');
	  session= require ('express-session');
	  PORT = process.env.PORT || 8080;
  let db = require ('./models');		  
	  //middleware
  let app = express();
	  app.use(bodyParser.urlencoded({ extended: false }));
	  app.use(bodyParser.json());
	  app.use(express.static("public"));

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

	  
