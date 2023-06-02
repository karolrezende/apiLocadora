import { AppDataSource } from "./data-source";
import app from "./app"
import { Repository } from "typeorm";
import { Movie } from "./entities";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database conectado! :D")

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log("App iniciado! ;D")
    })
  })
  .catch((err) => console.error(err));


//declarações das entidades
export const getRepositoryMovies: Repository<Movie> = AppDataSource.getRepository(Movie)
