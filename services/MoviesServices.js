const axios = require("axios");
const{ response } = require( "../utils/createResponse")

const apiTMDB = "https://api.themoviedb.org/3";
const api_key = "d99cfe31871e8c2f54e45fcdd597956d";

class MoviesServices {
    static async getPopular(queryObj) {
        try {
            const { data } = await axios.get(`${apiTMDB}/movie/popular`/* ?api_key=${api_key}&page=${!queryObj.page ? 1 : queryObj.page} */, 
            {headers:{
                Authorization: `Bearer ${process.env.API_KEY}`,
                ContentType: 'application/json;charset=utf-8'
            }})
            if(!data.results.length) return response(true, "Cannot get popular movies")
            const movies = {page: data.page, movies: data.results}
            return response(false, movies)

        } catch (error) {
            return response(true, error.message)
        }
        
    }

    static async getSingle (id) {
        try {
            const movie = await axios.axios.get(`${apiTMDB}/movie/${id}?api_key=${api_key}`)
            if(!movie.id) return response(true, `Cannot get movie with id: ${id}`)
            return response(false, movie)

        } catch (error) {
            return response(true, error.message)
        }

    } 


    static async getByGenre (id, page) {
        try {
            const { data } = await axios.get(`${apiTMDB}/discover/movie?with_genres=${id}&page=${page}`, {
                headers:{
                    Authorization: `Bearer ${process.env.API_KEY}`,
                    ContentType: 'application/json;charset=utf-8'
                }
            })
            if(!data) return response(true, `Cannot find movies`)
            return response(false, data)

        } catch (error) {
            return response(true, error.message)
        }

    } 

    static async getGenres() {
        try {
            const {data} = await axios.get(`${process.env.API_TMDB}/genre/movie/list`, {
                headers:{
                    Authorization: `Bearer ${process.env.API_KEY}`,
                    ContentType: 'application/json;charset=utf-8'
                }
            })
            if(!data) return response(true, "Cannot access this resource");
            return response(false, data);
        } catch (error) {
           return response(true, error.message);
        }
    }
}

module.exports = MoviesServices;