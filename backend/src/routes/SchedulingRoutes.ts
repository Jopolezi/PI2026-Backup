import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
    createScheduling,
    getAvailableSlots,
    getMySchedulings,
    getSchedulingsByEmploye,
    updateSchedulingStatus
} from "../controllers/schedulingController";

const router = Router();

router.get("/slots", getAvailableSlots);
router.get("/my", authToken, getMySchedulings);
router.get("/employe/:employeId", authToken, getSchedulingsByEmploye);

router.post("/", authToken, createScheduling);
router.patch("/:id/status", authToken, updateSchedulingStatus);

export default router;