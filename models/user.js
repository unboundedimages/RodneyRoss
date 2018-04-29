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
			// unique: true,
			// allowNull: false,
			validate: {
				isEmail: true
			}
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false
		},

		last_login: {
            type: DataTypes.DATE
        },

        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }

	});
		
	return User;
};