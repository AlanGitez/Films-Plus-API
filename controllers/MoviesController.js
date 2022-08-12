const { response } = require("../utils/createResponse");
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
}

module.exports = MoviesController;