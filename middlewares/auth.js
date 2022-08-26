const jwt = require("jsonwebtoken");
const { Users } = require("../models");

const requireAuth = (req, res, next) =>{
    let token;
    if(req.headers.authorization){
        token = req.headers.authorization
        console.log("soy el token", token);
    } 
    if(!token) res.status(401).json("Cannot found token") 
    jwt.verify(token, process.env.SECRET, async (error, decodedToken) => {
        if(error) res.send(401).json({error: "Unauthorized"});
        const {id} = decodedToken;
        console.log("soy el id de auth", id);
        const user = await Users.findByPk(id);
        if(!user) res.send(401).json({error: "Unauthorized"});
        req.user = user;
        next();
    })
}
module.exports = requireAuth;