import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("users")
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    unique: true
  })
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: "enum",
    enum: [
      "CLIENT",
      "EMPLOYEE",
      "COMPANY_OWNER",
      "ADMIN"
    ],
    default: "CLIENT"
  })
  role!: string;

  @Column({
    nullable: true
  })
  phone!: string;

  @Column({
    nullable: true
  })
  profileImage!: string;

  @Column({
    default: true
  })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}