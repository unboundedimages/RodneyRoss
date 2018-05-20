module.exports = function(sequelize, DataTypes) {
	var LoginLog = sequelize.define("LoginLog", {
		
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

		LoginLog.belongsTo(models.User);
	};
	return LoginLog;
}