import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Category {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: 'varchar', length: 45, unique: true })
  name: string;
    realEstate: any;
}
