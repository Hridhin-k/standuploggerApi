import { Injectable } from '@nestjs/common';
import { Project } from './projectEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class projectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  getAllProject(): Promise<Project[]> {
    return this.projectRepository.find();
  }
  addNewProject(data): Promise<Project[]> {
    const newProject = this.projectRepository.create(data);
    return this.projectRepository.save(newProject);
  }
}
