import express, { Application, json } from 'express'
import 'reflect-metadata'
import 'express-async-errors'
import { handleError } from './error'
import { movieRoutes } from './routes/movies.routes'

const app: Application = express()

app.use(json())

app.use('/movies', movieRoutes)

app.use(handleError)
export default app