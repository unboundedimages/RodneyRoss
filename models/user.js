module.exports = function (sequelize, Sequelize) {
	let User = sequelize.define("User", {

		// username: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	unique: true,
		// },
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER

		},

		firstname: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		lastname: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		email: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: "You must enter a name" },
				isEmail: true
			}
		},

		password: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notNull: { args: true, msg: "You must enter a password" },
				notEmpty: true, min: 6
			}	
		},

		last_login: {
			type: Sequelize.DATE
		},

		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}

	});

	return User;
};