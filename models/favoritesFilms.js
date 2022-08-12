const s = require("sequelize");
const db = require("../db");

class FavoritesFilms extends s.Model{};

FavoritesFilms.init({

    film_id: {
        type: s.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    adult: {
        type: s.BOOLEAN,
        defaultValue: false
    },
    backdrop_path: s.STRING,
    genres: {
        type: s.ARRAY(s.JSONB),
        set: function(value){
            this.setDataValue("list", [value]);
        }
    },
    id: s.INTEGER,
    imdb_id: s.TEXT,
    original_language: s.TEXT,
    original_title: s.TEXT,
    overview: s.TEXT,
    popularity: s.FLOAT,
    poster_path: s.TEXT,
    production_companies: {
        type: s.ARRAY(s.JSONB),
        set: function(value){
            this.setDataValue("list", [value]);
        }
    },
    production_countries: {
        type: s.ARRAY(s.JSONB),
        set: function(value){
            this.setDataValue("list", [value]);
        }
    },
    release_date: s.TEXT,
    revenue: s.INTEGER,
    runtime: s.INTEGER,
    spoken_languages: {
        type: s.ARRAY(s.JSONB),
        set: function(value){
            this.setDataValue("list", [value]);
        }
    },
    status: s.TEXT,
    tagline: s.TEXT,
    title: s.TEXT,
    video: s.BOOLEAN,
    vote_average: s.FLOAT,
    vote_count: s.INTEGER
},{sequelize:db, modelName:"favorite-films"});




module.exports = FavoritesFilms;