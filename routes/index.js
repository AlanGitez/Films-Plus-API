const express = require("express");
const Router = express.Router();

const movies = require("./movies");
const favorites = require("./favorites");
const user = require("./user");


const { Users } = require("../models");


//MIDDLEWARE DE VALIDACION;

Router.use("/movies", movies);
Router.use("/favorites", favorites);
Router.use("/users", user);


Router.get("/me", (req, res) => {
    if(!req.user) return res.sendStatus(401)
    res.status(200).send(req.user);
})

Router.post("/register", (req, res) => {
    Users.create(req.body)
    .then((user) => {
        res.status(201).send("creacion de usuario correcta.")
    })
    .catch(err => console.error("/REGISTER ERR ",err))
});

Router.post("/login", (req, res) => {
    res.status(201).send(req.user);
});

module.exports = Router;