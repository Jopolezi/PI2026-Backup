import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from "../controllers/categoryController";

const router = Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);

router.post("/", authToken, createCategory);
router.put("/:id", authToken, updateCategory);
router.delete("/:id", authToken, deleteCategory);

export default router;