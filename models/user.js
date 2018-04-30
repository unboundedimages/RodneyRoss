var bcrypt = require("bcrypt-nodejs");


module.exports = function (sequelize, DataTypes) {
	let User = sequelize.define("User", {

		// username: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	unique: true,
		// },
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER

		},

		firstname: {
			type: DataTypes.STRING,
			notEmpty: true
		},

		lastname: {
			type: DataTypes.STRING,
			notEmpty: true
		},

		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: "You must enter a name" },
				isEmail: true
			}
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: "You must enter a password" },
				notEmpty: true, min: 6
			}	
		},

		last_login: {
			type: DataTypes.DATE
		}

	});
	User.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	};

	User.hook("beforeCreate", function(user) {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
	});

	return User;
};