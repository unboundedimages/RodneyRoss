module.exports = function(sequelize, DataTypes) {
	var LoginLog = sequelize.define("LoginLog", {
		time: {
			type: DataTypes.TIME
		},

		date: {
			type: DataTypes.DATE
		},

		last_login: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			// unique: true
		}

	});
	LoginLog.associate = function(models) {
		LoginLog.belongsTo(models.user, { foreignKey: 'last_login', targetKey: 'last_login' });
	};
	return LoginLog;
}