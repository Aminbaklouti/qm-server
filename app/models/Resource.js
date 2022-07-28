module.exports = (sequelize, DataTypes) => 
    sequelize.define('Resource', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        resource: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })