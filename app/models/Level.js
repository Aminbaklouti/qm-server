module.exports = (sequelize, DataTypes) => 
    sequelize.define('Level', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        level: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })