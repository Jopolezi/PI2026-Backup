import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";

import { Company } from "./Company";

@Entity("establishments")
export class Establishment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    address!: string;

    @Column()
    number!: string;

    @Column()
    district!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column()
    cep!: string;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 8,
        nullable: true,
    })
    latitude!: number;

    @Column({
        type: "decimal",
        precision: 11,
        scale: 8,
        nullable: true,
    })
    longitude!: number;

    @Column({ default: true })
    isOpen!: boolean;

    @ManyToOne(
        () => Company,
        (company) => company.establishments
    )
    company!: Company;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}