import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column({ unique: true })
  project_name: string;

  @Column()
  project_createdBy: string;

  @Column({ default: true })
  project_isActive: boolean;

  @CreateDateColumn()
  project_createdAt: Date;
}
