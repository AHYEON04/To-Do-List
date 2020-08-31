module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('todos', {
        content: {
            type: Datatypes.STRING(255),
            allowNull: false,
        },
        userId: {
            type: Datatypes.INTEGER,
            allowNull: false,

        },
    });
};
        
