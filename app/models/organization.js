module.exports = function (sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
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
        }
    });
    Organization.associate = function (models) {
        Organization.hasMany(models.Activity, {
            onDelete: "cascade"
        });
        Organization.hasOne(models.Organization_Event_Bridge);
    };
    return Organization;
}