import { Router } from "express";
import { createMovieController } from "../controllers/movie.controllers";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.midlewares";
import { movieSchemaRequest } from "../schemas/movies.schema";
import { ensureNameNotRegistred } from "../middlewares/ensureNameNotRegistred.middlewares";

const movieRoutes: Router = Router()

movieRoutes.post('', ensureBodyIsValid(movieSchemaRequest), ensureNameNotRegistred, createMovieController)


export {movieRoutes}