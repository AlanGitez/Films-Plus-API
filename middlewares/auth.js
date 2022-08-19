const jwt = require("jsonwebtoken");
const { Users } = require("../models");

const requireAuth = (req, res, next) =>{
    let token;
    if(req.headers.authorization){
        token = req.headers.authorization
    } 
    if(!token) res.status(401).json("Cannot found token")
    jwt.verify(token, process.env.SECRET, async (error, decodedToken) => {
        if(error) res.send(401).json({error: "Unauthorized"});
        const {id} = decodedToken;
        const user = Users.findByPk(id);
        if(!user) res.send(401).json({error: "Unauthorized"});
        req.user = user;
        next();
    })
}


module.exports = requireAuth;