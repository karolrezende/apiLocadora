import { TmovieSchema, TmovieSchemaRequest } from "../interfaces/movies.interfaces";
import { Movie } from "../entities";
import { getRepositoryMovies } from "../server";

export const createMovieService = async (movieBody: TmovieSchemaRequest): Promise<Movie> =>{
    //inicializando a classe que contem as querys juntamente com a entidade    
    const createdMovie: TmovieSchema = getRepositoryMovies.create(movieBody)
    await getRepositoryMovies.save(createdMovie)
    
    return createdMovie
}