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

Users.beforeCreate(user => {
    return bcrypt.genSalt(10)
    .then(newSalt => {
        user.salt = newSalt;
        return user.hash(user.password, newSalt)
    })
    .then(newHash => user.password = newHash)
    .catch(err => console.error("my HOOK ERROR: ", err));
});

Users.prototype.hash = function(password, salt){
    return bcrypt.hash(password, salt)
    .then(hashedPassword => hashedPassword)
    .catch(err => console.error("my INSTANCE METHOD ERROR: ", err));

}



module.exports = Users;