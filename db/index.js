const sequelize = require("sequelize");
const db = new sequelize("mytmdb", null, null, {
    host: "localhost",
    dialect: "postgres",
    logging: false
});



module.exports = db;