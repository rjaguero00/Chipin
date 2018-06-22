module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Event", {
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
        location: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
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