import { AppDataSource } from "../database/data-source";
import { Notification, NotificationType } from "../models/Notification";

const notificationRepo = AppDataSource.getRepository(Notification);

export const createNotification = async (
  userId: number,
  type: NotificationType,
  title: string,
  message: string
) => {
  const notification = notificationRepo.create({
    user: { id: userId },
    type,
    title,
    message
  });

  await notificationRepo.save(notification);
  return notification;
};