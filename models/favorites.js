const { JSONB } = require("sequelize");
const s = require("sequelize");
const db = require("../db");
const { beforeCreate } = require("./users");

class Favorites extends s.Model{};

Favorites.init({
    name: {
        type: s.STRING,
        allowNull:false,
        validate: {len: [1, 32]}       
    }
},{sequelize:db, modelName:"favorites"});


module.exports = Favorites;