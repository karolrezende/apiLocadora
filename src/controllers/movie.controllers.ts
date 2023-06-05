import { Request, Response, query } from "express";
import {
  TmovieSchema,
  TmovieSchemaPatch,
  TmovieSchemaRequest,
  TmovieSchemaRequestPatch,
} from "../interfaces/movies.interfaces";
import { createMovieService } from "../services/createMovieService.services";
import { getMoviesService } from "../services/getMoviesService.services";
import { patchMovieService } from "../services/patchMovieService.services";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieBody: TmovieSchemaRequest = req.body;

  const newMovie = await createMovieService(movieBody);

  return res.status(201).json(newMovie);
};

export const getMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const orderBy: string | null = req.query.order as string;
  const sortBy: string | null = req.query.sort as string;
  const perPage = req.query.perPage;
  const page = req.query.page;

  const gettedMovies = await getMoviesService(orderBy, sortBy, perPage, page);

  return res.status(200).json(gettedMovies);
};

export const patchMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
    
    const movieId: number = Number(req.params.id)
    const movieBody: TmovieSchemaRequestPatch = req.body
    const moviePatch: TmovieSchemaPatch = await patchMovieService(movieId, movieBody)

    return res.status(201).json(moviePatch)
};
