import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Notification } from "../models/Notification";

const notificationRepo = AppDataSource.getRepository(Notification);

export const getMyNotifications = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;

        const notifications = await notificationRepo.find({
            where: { user: { id: userId } },
            order: { createdAt: "DESC" }
        });

        return res.json(notifications);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const markAsRead = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const notification = await notificationRepo.findOne({
            where: { id },
            relations: ["user"]
        });

        if (!notification) {
            return res.status(404).json({ error: "Notificação não encontrada" });
        }

        if (notification.user.id !== userId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        notification.isRead = true;
        await notificationRepo.save(notification);

        return res.json(notification);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const markAllAsRead = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;

        await notificationRepo.update(
            { user: { id: userId }, isRead: false },
            { isRead: true }
        );

        return res.json({ message: "Todas notificações marcadas como lidas" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const deleteNotification = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const notification = await notificationRepo.findOne({
            where: { id },
            relations: ["user"]
        });

        if (!notification) {
            return res.status(404).json({ error: "Notificação não encontrada" });
        }

        if (notification.user.id !== userId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        await notificationRepo.remove(notification);

        return res.json({ message: "Notificação deletada" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};