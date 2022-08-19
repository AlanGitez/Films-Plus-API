const UserService = require("../services/UserService");
const generateToken = require("../utils/generateToken");


class UserController{

    static async register(req, res){
        const {error, data} = UserService.register(req.body);
        if(error) return res.status(400).send(data);
        res.status(200).send(data);
    }

    static async login(req, res){
        const {error, data} = await UserService.login(req.body);
        if(error) return res.status(400).send(data);
        const token = generateToken(data.id);
        res.setHeader(`Authorization`, token);
        res.status(200).json(data);
    }

    static async getMe(req, res){
        const {error, data} = await UserService.getMe(req.user);
        if(error) return res.status(400).send(data);
        res.status(200).json(data);
    }
}

module.exports = UserController;