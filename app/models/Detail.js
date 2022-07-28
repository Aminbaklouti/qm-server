module.exports = (sequelize, DataTypes) => 
    sequelize.define('Detail', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        indexRef: {
            type: DataTypes.STRING
        },
        issue: {
            type: DataTypes.STRING
        },
        index: {
            type: DataTypes.STRING
        },
        subject: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER
        },
        element: {
            type: DataTypes.STRING
        },
        refrence: {
            type: DataTypes.STRING
        },
        page: {
            type: DataTypes.INTEGER
        },
        resource: {
            type: DataTypes.STRING
        },
        remarks: {
            type: DataTypes.STRING
        },
        datesized: {
            type: DataTypes.STRING
        },
        ignoreThis: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    })