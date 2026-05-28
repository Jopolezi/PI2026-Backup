import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne
} from "typeorm";

import { User } from "./User";
import { Establishment } from "./Establishment";

@Entity("favorites")
export class Favorite {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User)
    user!: User;

    @ManyToOne(() => Establishment)
    establishment!: Establishment;

    @CreateDateColumn()
    createdAt!: Date;
}