import { AppDataSource } from "./data-source";
import app from "./app"

AppDataSource.initialize()
  .then(async () => {
    console.log("Database conectado! :D")

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log("App iniciado! ;D")
    })
  })
  .catch((err) => console.error(err));