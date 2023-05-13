import { Body, Controller, Get, Post } from '@nestjs/common';
import { projectService } from './project.service';
import { Project } from './projectEntity';

@Controller('projects')
export class projectController {
  constructor(private readonly projectService: projectService) {}
  @Get()
  async getAllProjects(): Promise<Project[]> {
    const projectdata = await this.projectService.getAllProject();
    return projectdata;
  }
  @Post('/add')
  addNewProject(@Body() projectName: { project_name: 'string' }): Promise<any> {
    return this.projectService.addNewProject({
      project_name: projectName.project_name,
      project_createdBy: 'hridhin k',
      projectisactive: 1,
    });
  }
}
