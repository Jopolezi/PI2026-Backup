import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn

} from "typeorm";
import { User } from "./User";

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
}
