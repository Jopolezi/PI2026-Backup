import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
    addFavorite,
    getMyFavorites,
    removeFavorite
} from "../controllers/favoriteController";

const router = Router();

router.get("/my", authToken, getMyFavorites);
router.post("/", authToken, addFavorite);
router.delete("/:id", authToken, removeFavorite);

export default router;