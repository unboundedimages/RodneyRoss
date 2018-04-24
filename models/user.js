// Require bcrypt for hashing
const bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
	let User = sequelize.define("User", {

		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		email: {
			type: DataTypes.STRING,
			allowNull: false, //this means the  field cannot be skipped.
			unique: true,
			validate: {
				isEmail: true
			}
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false //password can't be blank
		}
	});

	//method for User model
	User.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	};

	User.hook("beforeCreate", function(user){
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
	});
	return User;
};