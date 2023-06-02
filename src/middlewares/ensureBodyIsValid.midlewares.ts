import { NextFunction, Request, Response } from "express";
import { movieSchemaRequest } from "../schemas/movies.schema";
import { ZodTypeAny } from "zod";
import { AppError } from "../error";
export const ensureBodyIsValid =
  (schema: ZodTypeAny) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  )=> {
    const validSchema = movieSchemaRequest.parse(req.body);
    console.log(req.body);
    req.body = validSchema;
    console.log(req.body);
    next();
  };
