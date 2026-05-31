import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";

import {
  createEstablishment,
  getEstablishments,
  getEstablishmentById,
  updateEstablishment,
  deleteEstablishment,
  findNearby
} from "../controllers/establishmentController";

const router = Router();

router.get("/nearby", findNearby);
router.get("/", getEstablishments);
router.get("/:id", getEstablishmentById);

router.post("/", authToken, createEstablishment);
router.put("/:id", authToken, updateEstablishment);
router.delete("/:id", authToken, deleteEstablishment);

export default router;