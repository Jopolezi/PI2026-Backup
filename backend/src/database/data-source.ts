import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { User } from "../models/User";
import { Company } from "../models/Company";
import { Establishment } from "../models/Establishment";
import { Category } from "../models/Category";
import { Employe } from "../models/Employe";
import { EmployeeSchedule } from "../models/EmployeeSchedule";
import { Service } from "../models/Service";
import { Scheduling } from "../models/Scheduling";
import { Assessment } from "../models/Assessment";
import { Favorite } from "../models/Favorite";
import { Notification } from "../models/Notification";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_NAME || "servimap",
  synchronize: true,
  entities: [
    User,
    Company,
    Establishment,
    Category,
    Employe,
    EmployeeSchedule,
    Service,
    Scheduling,
    Assessment,
    Favorite,
    Notification
  ],
});