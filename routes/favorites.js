const express = require("express");
const Router = express.Router();

const { Favorites, Users } = require("../models")

Router.get("/", (req, res) => {

    Favorites.findAll()
    .then(favorites => res.status(200).send(favorites))
});


Router.post("/add", (req, res) => {
    const query = req.query;
    console.log(req.body);
    let author;
    Users.findByPk(query.author)
    .then(user => {
        author = user;
        return Favorites.create(req.body);
    })
    .then(favorite => favorite.setAuthor(author))
    .then(favorite => res.status(201).send(favorite))
    .catch(err => console.error(err));
});


Router.put("/add/:id", (req, res) => {
    Favorites.update(req.body, 
    {where: {id: req.params.id},
    returning:true})

    .then(([updatedRows, updated]) => res.send(updated))
    .catch(err => console.error(err));
});

module.exports = Router;

