import { Router } from "express";
import { authToken } from "../middlewares/authMiddlewares";
import {
    getMyNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification
} from "../controllers/notificationController";

const router = Router();

router.get("/my", authToken, getMyNotifications);
router.patch("/:id/read", authToken, markAsRead);
router.patch("/read-all", authToken, markAllAsRead);
router.delete("/:id", authToken, deleteNotification);

export default router;