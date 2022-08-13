const express = require("express");
const Router = express.Router();

const UserController = require("../controllers/UserController")

Router.post("/register", UserController.register)
Router.post("/login", UserController.login)

module.exports = Router;