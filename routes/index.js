const {MoviesController} = require("../controllers");
const express = require("express");
const Router = express.Router();

const movies = require("./movies");
const favorites = require("./favorites");
const users = require("./user");

Router.use("/movies", movies);
Router.use("/favorites", favorites);
Router.use("/users", users);

Router.get("/getGenres", MoviesController.getGenres);

module.exports = Router;