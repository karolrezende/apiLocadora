import {z} from 'zod'
import { movieSchema, movieSchemaRequest } from '../schemas/movies.schema'

export type TmovieSchema = z.infer<typeof movieSchema>
export type TmovieSchemaRequest = z.infer<typeof movieSchemaRequest>