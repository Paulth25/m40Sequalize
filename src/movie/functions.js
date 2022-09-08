const Movie = require("./table")                       // importing table.js
        ////////// CREATE A MOVIE //////////
    exports.addMovie = async (movieObject) => {            // create movie function
        try{
            await Movie.create(movieObject)}               //creating a movie in the sql database
        catch(error){                                      // looking to catch any errors
            console.log(error, "Error Creating Movie")}    // stating where the error is
}
        ////////// LIST MOVIE BY TITLE //////////
    exports.listMovies = async () => {
        try{
            const listMovies = await Movie.findAll()
            console.log(listMovies)
        } catch(error){
            console.log(error, "List movies error")
        }};
            ////////// UPDATE A MOVIE //////////
    exports.updateMovies = async (yargsObject) => {
        try{
        const updateMovies = await Movie.update({actor: yargsObject.actor},{where: {title: yargsObject.title}})
            console.log(updateMovies, "Movie Updated")
    }   catch(error) {
        console.log(error, "Updating Movie error in function.js")
    }};
    exports.deleteMovies = async (yargsObject) => {
        try { 
        const deleteMovies = await Movie.destroy ({where: {title: yargsObject.title}})
        console.log(deleteMovies)
        console.log("Movie deleted from the db")
        }
        catch (error){
            console.log("Error deleting movie")
        }};