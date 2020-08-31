const { sequelize } = require(".");

module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('user', {
        userId: {
            type: Datatypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        password: {
            type: Datatypes.STRING(45),
            allNull: false,
        },
        name: {
            type: Datatypes.STRING(45),
            allNull: false,        }
    });
};