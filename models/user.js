module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('User', {

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

		comment: {
			type: Sequelize.STRING
		},

		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},

		password: {
			type: Sequelize.STRING,
			allowNull: false
		},

		last_login: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
			// unique: true,
			increment: true,			
		},

		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}

	});


	User.associate = (models) => {
		User.hasMany(models.LoginLog, { 
			foreignKey: 'last_login'
		});

		User.hasMany(models.LogoutLog, { 
			foreignKey: 'logout_time'
		});
	};
	return User;
}