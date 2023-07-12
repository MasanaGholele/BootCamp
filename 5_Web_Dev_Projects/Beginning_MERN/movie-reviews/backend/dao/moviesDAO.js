import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId

let movies //movies stores the reference to the database.

export default class MoviesDAO { // We then export the class MoviesDAO which contains an async method injectDB. 
    static async injectDB(conn) { // injectDB is called as soon as the server starts and provides the database reference to movies.
        
        if (movies) { // If the reference already exists, we return.
            return
        }
        try { // Else, we go ahead to connect to the database and movies collection.
            movies = await conn.db(process.env.MOVIEREVIEW_NS)
                .collection('movies')
        }
        catch (e) { // if we fail to get the reference, we send an error message to the console.
            console.error(`unable to connect in MoviesDAO: ${e}`);
        }
    }

    static async getMovies({ // method to get all movies
        //default filter
        filters = null,
        page = 0,
        moviesPerPage = 20, // will only get 20 movies at once
    } = {}) {
        let query
        if (filters) {
            if ("title" in filters) {query = { $text: { $search: filters['title'] } }
            } else if ("rated" in filters) {
                query = { "rated": { $eq: filters['rated'] } }
            }
        }

        let cursor // cursor fetches these documents in batches to reduce both memory consumption and network usage
        try {
            cursor = await movies
                .find(query)
                .limit(moviesPerPage)
                .skip(moviesPerPage * page)
            const moviesList = await cursor.toArray()
            const totalNumMovies = await movies.countDocuments(query)
            return { moviesList, totalNumMovies }
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { moviesList: [], totalNumMovies: 0 }
        }
    }
}








