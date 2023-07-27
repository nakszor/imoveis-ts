import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeUpdate,UpdateDateColumn, DeleteDateColumn, BeforeInsert, OneToMany } from 'typeorm';
import {hashSync, getRounds} from 'bcryptjs';
import { Schedule } from './schedules.entities';

@Entity()
export class User {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ type: 'boolean', default: false})
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;

  @DeleteDateColumn({ type: 'date' })
  deletedAt: Date | string | null;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
      const isEncrypted = getRounds(this.password)
      if(!isEncrypted){
          this.password = hashSync(this.password, 10)
      }
  }
}
