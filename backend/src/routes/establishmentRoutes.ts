import { Router } from "express";

import {
  createEstablishment,
  getEstablishments,
  getEstablishmentById,
  updateEstablishment,
  deleteEstablishment
} from "../controllers/establishmentController";

import { authToken } from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", getEstablishments);
router.get("/:id", getEstablishmentById);

router.post("/", authToken, createEstablishment);
router.put( "/:id", authToken, updateEstablishment);
router.delete("/:id", authToken, deleteEstablishment);

export default router;