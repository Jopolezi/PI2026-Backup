import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from "typeorm";

import { Employe } from "./Employe";

@Entity("employee_schedules")
export class EmployeeSchedule {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    dayOfWeek!: number;

    @Column()
    startTime!: string;

    @Column()
    endTime!: string;

    @ManyToOne(() => Employe, (employe) => employe.schedules)
    employe!: Employe;
}