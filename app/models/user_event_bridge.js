module.exports = function (sequelize, DataTypes) {
    var User_Event_Bridge = sequelize.define("User_Event_Bridge", {
        hours: {
            type: DataTypes.INTEGER,
        },
        points: {
<<<<<<< HEAD
            type: DataType.INTEGER,
        },
        IsValid: {
            defaultValue: false
=======
            type: DataTypes.INTEGER,
>>>>>>> 5ece2f201341b9208d761cbd707163453d5d3e2f
        }

    });

    User_Event_Bridge.associate = function (models) {
<<<<<<< HEAD
        User_Event_Bridge.hasOne(models.Activity);
        User_Event_Bridge.hasMany(models.User);
=======
        User_Event_Bridge.hasMany(models.activity),
            User_Event_Bridge.hasMany(models.User)
>>>>>>> 5ece2f201341b9208d761cbd707163453d5d3e2f
    };
    return User_Event_Bridge;
}