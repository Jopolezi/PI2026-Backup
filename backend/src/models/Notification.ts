import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";

import { User } from "./User";

export enum NotificationType {
  SCHEDULING_CREATED = "scheduling_created",
  SCHEDULING_CONFIRMED = "scheduling_confirmed",
  SCHEDULING_CANCELLED = "scheduling_cancelled",
  SCHEDULING_REMINDER = "scheduling_reminder"
}

@Entity("notifications")
export class Notification {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  message!: string;

  @Column({
    type: "enum",
    enum: NotificationType
  })
  type!: NotificationType;

  @Column({ default: false })
  isRead!: boolean;

  @ManyToOne(() => User)
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;
}