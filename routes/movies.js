const {MoviesController, GetBy} = require("../controllers");
const express = require("express");
const Router = express.Router();


Router.get("/", MoviesController.getPopular);
Router.get("/single/:id", MoviesController.getSingle);
Router.get("/collection/:genre", MoviesController.getByGenre);
Router.get("/search", GetBy.getAll);

module.exports = Router;