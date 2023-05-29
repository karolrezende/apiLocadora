import express, { Application, json } from 'express'
import 'reflect-metadata'

const app: Application = express()

app.use(json())

export {app}