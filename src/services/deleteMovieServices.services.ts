import { getRepositoryMovies } from "../server"

export const deleteMovieServices = async (movieId: number) => {

    await getRepositoryMovies.delete({
        id: movieId
    })
    
}