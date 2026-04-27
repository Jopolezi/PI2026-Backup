import { Router } from "express";
import { authToken } from "../middlewares/userMiddlewares";

import {
    createCompany,
    getCompany,
    getCompanyById,
    updateCompany
} from "../controllers/companyController";

const router = Router()



export default router;