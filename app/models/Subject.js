module.exports = (sequelize, DataTypes) => 
    sequelize.define('Subject', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        subject: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })