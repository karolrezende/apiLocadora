import { Router } from "express";
import { createMovieController, getMovieController, patchMovieController } from "../controllers/movie.controllers";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.midlewares";
import { movieSchemaRequest, movieSchemaRequestPatch } from "../schemas/movies.schema";
import { ensureNameNotRegistred } from "../middlewares/ensureNameNotRegistred.middlewares";

const movieRoutes: Router = Router()

movieRoutes.post('', ensureBodyIsValid(movieSchemaRequest), ensureNameNotRegistred, createMovieController)
movieRoutes.get('', getMovieController)
movieRoutes.patch('/:id', ensureBodyIsValid(movieSchemaRequestPatch), ensureNameNotRegistred, patchMovieController)

export {movieRoutes}