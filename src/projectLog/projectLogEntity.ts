import { ProjectMember } from 'src/projectMember/projectMemberEntity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProjectLog {
  @PrimaryGeneratedColumn()
  projectLog_id: number;

  @Column()
  projectLog_Data: string;

  @Column()
  projectLog_createdBy: string;
  @Column()
  projectLog_projectId: number;

  @Column()
  projectLog_memberId: number;

  @CreateDateColumn()
  projectLog_createdAt: Date;
}
