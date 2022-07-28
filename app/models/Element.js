module.exports = (sequelize, DataTypes) => 
    sequelize.define('Element', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        element: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })