import "reflect-metadata";
import express from "express";

import { AppDataSource } from "./database/data-source";

import userRoutes from "./routes/userRoutes";
import companyRoutes from "./routes/companyRoutes";
import establimentRoutes from "./routes/establishmentRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import employeeRoutes from "./routes/employeRoutes";
import employeeScheduleRoutes from "./routes/employeescheduleRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import schedulingRoutes from "./routes/SchedulingRoutes";
import assessmentRoutes from "./routes/assessmentRoutes";
import favoriteRoutes from "./routes/favoriteRoutes";
import notificationRoutes from "./routes/notificationRoutes";

const app = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {

    console.log("Banco conectado 🚀");

    app.use("/users", userRoutes);
    app.use("/company", companyRoutes);
    app.use("/establishments", establimentRoutes);
    app.use("/category", categoryRoutes);
    app.use("/employes", employeeRoutes);
    app.use("/schedules", employeeScheduleRoutes);
    app.use("/services", serviceRoutes);
    app.use("/schedulings", schedulingRoutes);
    app.use("/assessments", assessmentRoutes);
    app.use("/favorites", favoriteRoutes);
    app.use("/notifications", notificationRoutes);


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