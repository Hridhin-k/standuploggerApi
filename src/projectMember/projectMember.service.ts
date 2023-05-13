import { Injectable } from '@nestjs/common';
import { ProjectMember } from './projectMemberEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class projectMemberService {
  constructor(
    @InjectRepository(ProjectMember)
    private projectMemberRepository: Repository<ProjectMember>,
  ) {}
  async getProjectMember(data: { projectId: number }) {
    const projectId = data.projectId;

    const projectMemberData = await this.projectMemberRepository
      .createQueryBuilder('ProjectLog')
      .where('projectMember_projectId = :projectId', { projectId })
      .getMany();

    return projectMemberData;
  }
  async addNewProjectMember(data) {
    const newProjectMember = await this.projectMemberRepository.create(data);
    return this.projectMemberRepository.save(newProjectMember);
  }
}
