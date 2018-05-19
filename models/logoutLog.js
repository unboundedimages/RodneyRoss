module.exports = (sequelize,DataTypes) => {
	let LogoutLog = sequelize.define ("LogoutLog", {

		logout_time: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}
	});

	LogoutLog.associate = (models) => {

		LogoutLog.belongsTo(models.User);

	};
	return LogoutLog;
};