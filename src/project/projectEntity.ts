import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  project_name: string;

  @Column()
  project_createdBy: string;

  @Column({ default: true })
  project_isActive: boolean;
}
