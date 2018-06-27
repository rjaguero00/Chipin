module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("activity", {
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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: true
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
<<<<<<< HEAD
    Activity.associate = function (models) {
        Activity.belongsTo(models.User, {

        });
        Activity.belongsTo(models.Organization, {

        });
        Activity.hasMany(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Activity.hasOne(models.User_Event_Bridge);
    };
=======
    // Activity.associate = function (models) {
    //     Activity.belongsTo(models.User, {
    //         foriegnKey: {
    //             allowNull: false
    //         }
    //     });
    //     Activity.hasMany(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
>>>>>>> 5ece2f201341b9208d761cbd707163453d5d3e2f
    return Activity;
};