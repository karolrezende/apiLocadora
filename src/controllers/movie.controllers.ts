import { Request, Response, query } from "express";
import { TmovieSchema, TmovieSchemaRequest } from "../interfaces/movies.interfaces";
import { createMovieService } from "../services/createMovieService.services";
import { getMoviesService } from "../services/getMoviesService.services";

export const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movieBody: TmovieSchemaRequest = req.body

    const newMovie = await createMovieService(movieBody)

    return res.status(201).json(newMovie)
}

export const getMovieController = async (req:Request, res:Response) =>{
    const orderBy: string| null = req.query.order as string
    const sortBy: string | null = req.query.sort as string
    const perPage: number = Number(req.query.perPage)
    const page: number = Number(req.query.page)

    const gettedMovies = await getMoviesService(orderBy, sortBy, perPage, page)

    return gettedMovies
}