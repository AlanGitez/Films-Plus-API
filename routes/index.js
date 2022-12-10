const { MoviesController } = require("../controllers");
const express = require("express");
const Router = express.Router();

const movies = require("./movies");
const favorites = require("./favorites");
const users = require("./user");

// /api


Router.use("/movies", movies); // /api/movies 
Router.use("/favorites", favorites); // /api/favorites
Router.use("/users", users); // /api/users

Router.get("/getGenres", MoviesController.getGenres);

module.exports = Router;