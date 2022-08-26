const {MoviesServices} = require("../services");

class MoviesController{
    static async getPopular (req, res) {
        const queryObj = req.query;
        const {error, data} = await MoviesServices.getPopular(queryObj)
        if(error) return res.status(400).send(data);
        res.status(200).send(data)
       
    }

    static async getSingle (req, res) {
        const id = req.params.id;

        const {error, data} = await MoviesServices.getSingle(id)
        if(error) return res.status(400).send(data);
        res.status(200).send(data)
    } 

    static async getByGenre (req, res) {
        const page = req.query.page;
        const genre = req.params.genre;

        const {error, data} = await MoviesServices.getByGenre(genre, page)
        if(error) return res.status(400).send(data);
        res.status(200).send(data)
    }

    static async getGenres(req, res) {
        const {error, data} = await MoviesServices.getGenres();
        if(error) res.status(400).send(data);
        res.status(200).json(data);
    }
    
    static async search(req, res) {
        const {searchContent} = req.params;
        const {error, data} = await MoviesServices.search(searchContent);
        if(error) res.status(400).send(data);
        res.status(200).json(data);
    }
}

module.exports = MoviesController;