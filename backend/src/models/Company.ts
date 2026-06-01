import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";

import { User } from "./User";
import { Establishment } from "./Establishment";

@Entity("companys")
export class Company {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fantasyName!: string;

  @Column({ unique: true })
  cnpj!: string;

  @Column()
  description!: string;

  @Column()
  phone!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User)
  owner!: User;

  @OneToMany(
    () => Establishment,
    (establishment) => establishment.company
  )
  establishments!: Establishment[];
}