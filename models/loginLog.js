module.exports = function(sequelize, DataTypes) {
 
var LoginLog = sequelize.define("loginLog", {
		time: {
				type: DataTypes.TIME
		},
		
		last_login: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			unique: true
			// autoIncrement: true
		}
 
		// date: {
		// 		type: DataTypes.DATE
		// }
});
LoginLog.associate = function(models){
	LoginLog.belongsTo(models.user);
}
return LoginLog;
}