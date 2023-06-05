import {z} from 'zod'
import { movieSchema, movieSchemaPatch, movieSchemaRequest, movieSchemaRequestPatch } from '../schemas/movies.schema'

export type TmovieSchema = z.infer<typeof movieSchema>
export type TmovieSchemaRequest = z.infer<typeof movieSchemaRequest>
export type TmovieSchemaPatch = z.infer<typeof movieSchemaPatch>
export type TmovieSchemaRequestPatch = z.infer<typeof movieSchemaRequestPatch>