module.exports = function(sequelize, DataTypes) {
	var LoginLog = sequelize.define("LoginLog", {
		// time: {
		// 	type: DataTypes.TIME
		// },

		// date: {
		// 	type: DataTypes.DATE
		// },
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			}
		},

		last_login: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			// unique: true
		}

	});

	LoginLog.associate = (models) => {

		LoginLog.belongsTo(models.User, {
			foreignKey: {
				allowNull: true
			}
		});
	};
	return LoginLog;
}