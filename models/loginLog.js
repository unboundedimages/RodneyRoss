module.exports = function(sequelize, DataTypes) {
 var LoginLog = sequelize.define("LoginLog", {
		time: {
				type: DataTypes.TIME
		},

		date: {
				type: DataTypes.DATE
		}
});
LoginLog.associate = function(models){
	LoginLog.belongsTo(models.user);
}
return LoginLog;
}