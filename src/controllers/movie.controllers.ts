import { Request, Response } from "express";
import { TmovieSchema, TmovieSchemaRequest } from "../interfaces/movies.interfaces";
import { createMovieService } from "../services/createMovieService.services";

export const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movieBody: TmovieSchemaRequest = req.body

    const newMovie = await createMovieService(movieBody)

    return res.status(201).json(newMovie)
}