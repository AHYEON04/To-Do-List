const path = require('path');
const Sequelize = require ('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..','config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Todo = require("./todo")(sequelize, Sequelize);

db.User.hasMany(db.Todo);
db.Todo.belongsTo(db.User);

module.exports = db;