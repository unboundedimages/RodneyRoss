var db = require("../models");

module.exports = function(app) {

	app.post("/signin", function(req, res) {
		db.LoginLog.create(req.body).then(function(dbLoginLog) {
			res.render('Port')
		});
	});

	app.put("/sigin", function(req, res) {
		db.LoginLog.update(
		req.body,
		{
			where: {
				last_login: req.body.last_login
			}
		}).then(function(dbLoginLog) {
			res.render('Port')
		});
	});
}