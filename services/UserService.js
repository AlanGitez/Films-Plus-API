const bcrypt = require("bcryptjs");
const { response } = require("../utils/createResponse");
const { Users } = require("../models");

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
        const {email, password} = body;
        try {
            const user = await Users.findOne({
                where: {email:email},
            });
            if(!user) return response(true, "Invalid credentials");
            
            if(user && await bcrypt.compare(password, user.password)){
                
                return response(false, {
                    id: user.id, 
                    username: user.username, 
                    email:user.email
                })
            }else return response(true, "Invalid credentials");
            
        } catch (error) {
             return response(true, error.message);
        }
     }

     static async logout(body, user){
        try {
            const { id } = user;
            if(!user || body.id !== id) return response(true, "Unauthorized");
            return response(false, {})
        } catch (error) {
            return response(true, error.message)
        }
     }

     static async getMe(user){
        try {
            const {id, username, email} = user;
            if(!user) return response(true, "Cannot connect whit your profile");
            return response(false, {
                id, 
                username, 
                email
            })
        } catch (error) {
            return response(true, error.message)
        }
     }
}

module.exports = UserService;