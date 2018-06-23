module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        contact: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        latitude: {
            type: DataType.STRING,
            allowNull: true
        },
        longitude: {
            type: DataType.STRING,
            allowNull: true
        },
        hours: {
            type: DataType.INTEGER,
            allowNull: true
        },
        points: {
            type: DataType.INTEGER,
            allowNull: true
        }
    });
    Activity.associate = function (models) {
        Activity.belongsTo(models.User, {
            foriegnKey: {
                allowNull: false
            }
        });
        Activity.hasMany(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Activity;
};