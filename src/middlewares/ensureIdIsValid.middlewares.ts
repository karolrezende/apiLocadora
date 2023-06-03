import { NextFunction, Request, Response } from "express";
import { getRepositoryMovies } from "../server";
import { Movie } from "../entities";
import { AppError } from "../error";

export const ensureIdIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
    const idRequest: number = parseInt(req.params.id)

    const findedId: Movie|null = await getRepositoryMovies.findOneBy({
        id: idRequest
    })

    if (!findedId) throw new AppError ("Movie not found", 404)

    res.locals.movieFromId = findedId

    return next()

};
