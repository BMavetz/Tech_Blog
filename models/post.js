const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id',
            },
        },
    },
    {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
    },
);

module.exports = Post;