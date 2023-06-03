import { NextFunction, Request, Response } from "express";
import { getRepositoryMovies } from "../server";
import { Movie } from "../entities";
import { AppError } from "../error";

export const ensureNameNotRegistred = async (
  req: Request,
  res: Response,
  next: NextFunction 
): Promise<Response | void> => {
    const nameRequest: string = req.body.name

    const movieExists: Movie|null = await getRepositoryMovies.findOneBy({
        name: nameRequest
    })

    if( movieExists ) throw new AppError("Movie already exists", 409)

    return next()
};
