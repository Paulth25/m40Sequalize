const yargs = require("yargs")
const { sequelize } = require("./db/connection")
const { addMovie, listMovies, updateMovies, deleteMovies } = require("./movie/functions")

const app = async (yargsObject) => {
    try{
        await sequelize.sync()                           //checking to see if movie table exitProcess, if not it will create it
        if (yargsObject.create){
        await addMovie({title: yargsObject.title, actor: yargsObject.actor})              // adding a movie to the db
        } else if(yargsObject.read){
            await listMovies()                                              // show a list of movies in the db 
        } else if(yargsObject.update){
            await updateMovies ({title: yargsObject.title, actor: yargsObject.actor})    // update a movie within the db
        } else if(yargsObject.delete){
            await deleteMovies ({title: yargsObject.title})                              // delete movie by title within the db
            
        }
    
    } catch(error){
        console.log(error, "Error in CRUD Commands in your app.js")                      // catch error. Directs to the issue for me
    }
        //update and delete
}

    
app(yargs.argv)