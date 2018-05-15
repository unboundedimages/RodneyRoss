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
			unique: true
					// autoIncrement: true
				}

			});
	LoginLog.associate = function(models){
		LoginLog.belongsTo(models.user);
	}
	return LoginLog;
}