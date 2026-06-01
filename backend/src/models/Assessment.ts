import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";

import { User } from "./User";
import { Establishment } from "./Establishment";
import { Scheduling } from "./Scheduling";

@Entity("assessments")
export class Assessment {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int" })
    rating!: number; // 1 a 5

    @Column({ nullable: true })
    comment!: string;

    @ManyToOne(() => User)
    user!: User;

    @ManyToOne(() => Establishment)
    establishment!: Establishment;

    @ManyToOne(() => Scheduling, { nullable: true })
    scheduling!: Scheduling;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}