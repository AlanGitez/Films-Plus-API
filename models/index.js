const Users = require("./users");
const Favorites = require("./favorites");
const FavoritesFilms = require("./favoritesFilms");

Favorites.belongsTo(Users, {as: "author"})
Favorites.hasMany(FavoritesFilms, {as: "favoriteFilm"})

module.exports = {Users, Favorites, FavoritesFilms};