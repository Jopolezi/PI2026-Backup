import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";

import {
  createCompany,
  getCompany,
  getCompanyById,
  updateCompany,
  deleteCompany
} from "../controllers/companyController";

const router = Router();

router.get("/", getCompany);
router.get("/:id", getCompanyById);

router.post("/", authToken, createCompany);
router.put("/:id", authToken, updateCompany);
router.delete("/:id", authToken, deleteCompany);

export default router;