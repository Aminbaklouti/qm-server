module.exports = (sequelize, DataTypes) => 
    sequelize.define('Issue', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        main: {
            type: DataTypes.STRING
        },
        sub: {
            type: DataTypes.STRING
        },
        ref: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })