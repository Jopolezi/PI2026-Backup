import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
    createAssessment,
    getAssessmentsByEstablishment,
    deleteAssessment
} from "../controllers/assessmentController";

const router = Router();

router.get("/establishment/:establishmentId", getAssessmentsByEstablishment);
router.post("/", authToken, createAssessment);
router.delete("/:id", authToken, deleteAssessment);

export default router;