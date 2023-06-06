import { Movie } from "../entities"
import { AppError } from "../error"
import { TmovieSchema, TmovieSchemaPatch, TmovieSchemaRequestPatch } from "../interfaces/movies.interfaces"
import { movieSchema, movieSchemaPatch } from "../schemas/movies.schema"
import { getRepositoryMovies } from "../server"

export const patchMovieService = async (movieId: number, movieBody: any): Promise<Movie> => {
   
    const oldMovie: Movie |null = await getRepositoryMovies.findOneBy({
        id: movieId
    })
    
    if(!oldMovie){
        throw new AppError("Movie not found")
    }

    const myMovie = {
        ...oldMovie,
        ...movieBody
    }
    const newMovie = getRepositoryMovies.create(myMovie)
    await getRepositoryMovies.save(newMovie)

    const returnMovie: TmovieSchema = movieSchema.parse(newMovie)
    return returnMovie
}