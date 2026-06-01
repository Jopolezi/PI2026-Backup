import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
    createEmploye,
    getEmployesByEstablishment,
    updateEmploye,
    deleteEmploye
} from "../controllers/employeeController";

const router = Router();

router.get("/establishment/:establishmentId", getEmployesByEstablishment);
router.post("/", authToken, createEmploye);
router.put("/:id", authToken, updateEmploye);
router.delete("/:id", authToken, deleteEmploye);

export default router;