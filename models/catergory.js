const { Model, Datatypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

Category.init(
    {
        id: {
            type: Datatypes.INTEGER,  //integer
            allownull: false, // Makes null values false
            primaryKey: true,   // Sets primary key
            autoIncrement: true, // Use autoincrement
        },
        categoryName: {
            type: Datatypes.STRING, // String
            allownull: false, // Makes null values false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category; 