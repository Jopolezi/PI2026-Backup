import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";

import { Company } from "./Company";
import { Category } from "./Category";
import { Employe } from "./Employe";
import { Service } from "./Service";

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

    @ManyToOne(() => Category, (category) => category.establishments, { nullable: true })
    category!: Category;

    @OneToMany(() => Employe, (employe) => employe.establishment)
    employes!: Employe[];

    @OneToMany(() => Service, (service) => service.establishment)
    services!: Service[];
}