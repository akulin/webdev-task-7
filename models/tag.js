'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tags', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.TEXT
    },
    {
        timestamps: true
    });
};
