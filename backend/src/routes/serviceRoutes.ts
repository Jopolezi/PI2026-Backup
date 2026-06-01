import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
  createService,
  getServicesByEstablishment,
  getServiceById,
  updateService,
  deleteService
} from "../controllers/serviceController";

const router = Router();

router.get("/establishment/:establishmentId", getServicesByEstablishment);
router.get("/:id", getServiceById);

router.post("/", authToken, createService);
router.put("/:id", authToken, updateService);
router.delete("/:id", authToken, deleteService);

export default router;