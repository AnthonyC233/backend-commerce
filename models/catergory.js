const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}


Category.init(
    {
        id: {
            type: DataTypes.INTEGER,  //integer
            allownull: false, // Makes null values false
            primaryKey: true,   // Sets primary key
            autoIncrement: true, // Use autoincrement
        },
        categoryName: {
            type: DataTypes.STRING, // String
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