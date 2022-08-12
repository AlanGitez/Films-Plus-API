const express = require("express");
const Router = express.Router();

const {MoviesController, GetBy} = require("../controllers");

Router.get("/", MoviesController.getPopular);
Router.get("/:id", MoviesController.getSingle);
Router.get("/search", GetBy.getAll);


module.exports = Router;