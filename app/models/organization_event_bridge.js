module.exports = function (sequelize, DataTypes) {
    var Organization_Event_Bridge = sequelize.define("Organization_Event_Bridge", {
        hours: {
            type: DataType.INTEGER,
        },
        points: {
            type: DataType.INTEGER,
        }

    });

    Organization_Event_Bridge.associate = function (models) {
        Organization_Event_Bridge.hasMany(models.Activity);
        Organization_Event_Bridge.hasMany(models.Organization);
    };
    return Organization_Event_Bridge;
}