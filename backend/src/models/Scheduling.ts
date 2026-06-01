import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";

import { User } from "./User";
import { Employe } from "./Employe";
import { Service } from "./Service";

export enum SchedulingStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled",
    COMPLETED = "completed"
}

@Entity("schedulings")
export class Scheduling {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "date" })
    date!: string;

    @Column()
    startTime!: string;

    @Column()
    endTime!: string;

    @Column({
        type: "enum",
        enum: SchedulingStatus,
        default: SchedulingStatus.PENDING
    })
    status!: SchedulingStatus;

    @ManyToOne(() => User)
    user!: User;

    @ManyToOne(() => Employe)
    employe!: Employe;

    @ManyToOne(() => Service, (service) => service.schedulings)
    service!: Service;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}