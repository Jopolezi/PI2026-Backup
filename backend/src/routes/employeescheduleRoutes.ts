import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
    createSchedule,
    getSchedulesByEmploye,
    deleteSchedule
} from "../controllers/employeeScheduleController";

const router = Router();

router.get("/employe/:employeId", getSchedulesByEmploye);
router.post("/", authToken, createSchedule);
router.delete("/:id", authToken, deleteSchedule);

export default router;