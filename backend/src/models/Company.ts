import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  phone!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column({ unique: true })
  cnpj!: string;

  @Column("float")
  latitude!: number;

  @Column("float")
  longitude!: number;

  @ManyToOne(() => User)
  user!: User;
}