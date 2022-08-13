const { Users } = require("../models");
const { response } = require("../utils/createResponse");

class UserService {
    static async register(body){
       try {
            const [user, created] = await Users.findOrCreate({
                where: {email:body.email},
                defaults: body 
            });
            if(!user.id) return response(true, `Cannot create account`)
            if(!created && user.id) return response(false, `This email is registered`)
            if(created && user.id) return response(false, `Account created succesfully`)
       } catch (error) {
            return response(true, error.message);
       }
    }

    static async login(body){
        // FUNCIONANDO
        try {
            const user = await Users.findOne({
                where: {email:body.email},
            });
        } catch (error) {
             return response(true, error.message);
        }
     }
}

module.exports = UserService;