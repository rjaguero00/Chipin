module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        hours: {
            type: DataType.INTEGER,
            defaultValue: 0
        },
        points: {
            type: DataType.INTEGER,
            defaultValue: 0
        }

    });

    User.associate = function (models) {
        User.hasMany(models.Activity, {
            onDelete: "cascade"
        });
    };
    return User;
}