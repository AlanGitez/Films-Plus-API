const axios = require("axios");

const apiTMDB = "https://api.themoviedb.org/3";
const api_key = "d99cfe31871e8c2f54e45fcdd597956d";


class GetBy{
    static async getAll (req, res) {
        const myQuerys = new URLSearchParams(req.query)
        let apiRoute = `${apiTMDB}/discover/movie?api_key=${api_key}`;

        for (const query of myQuerys.entries()) {
            apiRoute += `&${query[0]}=${query[1]}`
        }
        
        axios.get(apiRoute)
        .then(({data}) => res.status(200).send(data))
        .catch((err)=> console.error(err))
    }
}

module.exports = GetBy;