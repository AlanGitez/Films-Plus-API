const UserService = require("../services/UserService");
const { response } = require("../utils/createResponse");


class UserController{

    static async register(req, res){
        const {error, data} = UserService.register(req.body);
        if(error) return res.status(400).send(data);
        res.status(200).send(data);
    }

    static async login(req, res){
        const {error, data} = UserService.login(req.body);
        if(error) return res.status(400).send(data);
        res.status(200).send(data);
    }
}

module.exports = UserController;