import { Injectable } from '@nestjs/common';
import { Project } from './projectEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class projectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  async getAllProject(): Promise<Project[]> {
    const projectList = await this.projectRepository.find();
    return projectList;
  }
  addNewProject(data): Promise<Project[]> {
    const newProject = this.projectRepository.create(data);
    return this.projectRepository.save(newProject);
  }
}
