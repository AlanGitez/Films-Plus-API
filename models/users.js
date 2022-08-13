const bcrypt = require("bcryptjs");
const s = require("sequelize");
const db = require("../db");

class Users extends s.Model{};

Users.init({
    username:{
        type: s.STRING,
        allowNull:false
    },
    password: {
        type:s.TEXT,
        allowNull:false
    },
    email:{
        type: s.TEXT,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    salt:{
        type: s.TEXT
    }
},{sequelize:db, modelName:"user"});


Users.prototype.hash = async (password, salt) => {
    try {
        return bcrypt.hash(password, salt);
    } catch (error) {
        return error;
    }
}

Users.beforeCreate(async user => {
    try {
        const newSalt = await bcrypt.genSalt(5);
        user.salt = newSalt;
        const newHash = await user.hash(user.password, newSalt)
        user.password = newHash;   
    } catch (error) {
        console.error("USER HASH HOOK ERROR", error)
    }
});




module.exports = Users;