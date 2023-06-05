import { Movie } from "../entities"
import { AppError } from "../error"
import { TmovieSchema, TmovieSchemaPatch, TmovieSchemaRequestPatch } from "../interfaces/movies.interfaces"
import { movieSchema, movieSchemaPatch } from "../schemas/movies.schema"
import { getRepositoryMovies } from "../server"

export const patchMovieService = async (userId: number, movieBody: TmovieSchemaRequestPatch): Promise<TmovieSchema> => {
   
    const oldMovie: Movie|null = await getRepositoryMovies.findOneBy({
        id: userId
    })
    
    if(!oldMovie){
        throw new AppError("Movie not found")
    }

    const myMovie= {
        ...oldMovie,
        ...movieBody
    }
    const newMovie: TmovieSchema = getRepositoryMovies.create(myMovie)
    await getRepositoryMovies.save(newMovie)

    const returnMovie: TmovieSchema = movieSchema.parse(newMovie)
    return returnMovie
}