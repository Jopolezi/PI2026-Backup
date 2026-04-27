  import "reflect-metadata";
  import express from "express";
  import { AppDataSource } from "./database/data-source";
  import userRoutes from "./routes/userRoutes";
  import companyRoutes from "./routes/companyRoutes";

  const app = express();

  app.use(express.json());

  AppDataSource.initialize()
    .then(() => {
      console.log("Banco conectado 🚀");

      app.use("/users", userRoutes);
      app.use("/company", companyRoutes);

      app.get("/", (req, res) => {
        res.send("API rodando 🚀");
      });

      app.listen(3000, () => {
        console.log("Servidor rodando em http://localhost:3000");
      });
    })
    .catch((error) => {
      console.error("Erro ao conectar no banco:", error);
    });