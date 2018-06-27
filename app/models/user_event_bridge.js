module.exports = function (sequelize, DataTypes) {
    var User_Event_Bridge = sequelize.define("User_Event_Bridge", {
        hours: {
            type: DataType.INTEGER,
        },
        points: {
            type: DataType.INTEGER,
        },
        IsValid: {
            defaultValue: false
        }

    });

    User_Event_Bridge.associate = function (models) {
        User_Event_Bridge.hasMany(models.Activity);
        User_Event_Bridge.hasMany(models.User);
    };
    return User_Event_Bridge;
}