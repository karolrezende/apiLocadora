import { Router } from "express";
import { createMovieController, deleteMovieController, getMovieController, patchMovieController } from "../controllers/movie.controllers";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.midlewares";
import { movieSchemaRequest, movieSchemaRequestPatch } from "../schemas/movies.schema";
import { ensureNameNotRegistred } from "../middlewares/ensureNameNotRegistred.middlewares";
import { ensureIdIsValid } from "../middlewares/ensureIdIsValid.middlewares";

const movieRoutes: Router = Router()

movieRoutes.post('', ensureBodyIsValid(movieSchemaRequest), ensureNameNotRegistred, createMovieController)
movieRoutes.get('', getMovieController)
movieRoutes.patch('/:id', ensureIdIsValid, ensureNameNotRegistred,ensureBodyIsValid(movieSchemaRequestPatch), ensureNameNotRegistred, patchMovieController)
movieRoutes.delete('/:id', ensureIdIsValid, deleteMovieController)

export {movieRoutes}