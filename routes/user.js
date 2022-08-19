const express = require("express");
const Router = express.Router();

const UserController = require("../controllers/UserController");
const requireAuth = require("../middlewares/auth");

Router.post("/register", UserController.register)
Router.post("/login", UserController.login)
Router.get("/me", requireAuth, UserController.getMe)

module.exports = Router;