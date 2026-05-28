import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from "typeorm";

import { User } from "./User";
import { Establishment } from "./Establishment";
import { EmployeeSchedule } from "./EmployeeSchedule";

@Entity("employes")
export class Employe {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    role!: string;

    @Column({ default: true })
    isActive!: boolean;

    @ManyToOne(() => User)
    user!: User;

    @ManyToOne(() => Establishment, (establishment) => establishment.employes)
    establishment!: Establishment;

    @OneToMany(() => EmployeeSchedule, (schedule) => schedule.employe)
    schedules!: EmployeeSchedule[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}