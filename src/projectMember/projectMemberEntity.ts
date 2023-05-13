import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProjectMember {
  @PrimaryGeneratedColumn()
  projectMember_id: number;

  @Column({ nullable: true })
  projectMember_name: string;

  @Column()
  projectMember_createdBy: string;

  @Column({ default: 0 })
  projectMember_projectId: number;

  @CreateDateColumn()
  projectMember_createdAt: Date;
}
