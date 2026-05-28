import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from "typeorm";

import { Establishment } from "./Establishment";
import { Scheduling } from "./Scheduling";

@Entity("services")
export class Service {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ nullable: true })
    description!: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price!: number;

    @Column()
    duration!: number; // em minutos

    @ManyToOne(() => Establishment, (establishment) => establishment.services)
    establishment!: Establishment;

    @OneToMany(() => Scheduling, (scheduling) => scheduling.service)
    schedulings!: Scheduling[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}