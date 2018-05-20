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

    // var db = require("../models");

    // db.LoginLog.update({ last_login: Date.now() },

    // {where:
    //     {last_login: req.body.last_login}    
    // }

    // ).then(function(data, res) {
    //     console.log(data);
    // });

    // req.body.last_login = Date.now()
    // db.LoginLog.create(req.body).then(function(dbLogoutLog){
    // });


    res.render('signin');

}
//controller for dashboard
exports.Port = function(req, res) {
	res.render('Port');

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


    // var userinfo = logoutLog.get();


    // return next(null, userinfo);

    req.session.destroy(function(err) {
      res.redirect('/');
  });   
}

// writetodb.exports = function(logoutLog){
//     console.log("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")
//     console.log(logoutLog)
// }