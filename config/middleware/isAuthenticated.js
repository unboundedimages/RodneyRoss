// This is middleware for restrictng routes 
// a user is not allowed to visit if not logged in

module.exports = function(req, res, next) {
	if (req.user) {
    return next();
  }
   return res.redirect("/");
};

