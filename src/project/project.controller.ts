import { Body, Controller, Get, Post } from '@nestjs/common';
import { projectService } from './project.service';
import { Project } from './projectEntity';

@Controller('projects')
export class projectController {
  constructor(private readonly projectService: projectService) {}
  @Get()
  getAllProjects(): Promise<Project[]> {
    return this.projectService.getAllProject();
  }
  @Post('/add')
  addNewProject(@Body() projectName: { project_name: 'string' }): Promise<any> {
    console.log(projectName);

    return this.projectService.addNewProject({
      project_name: projectName.project_name,
      project_createdBy: 'hridhin k',
      projectisactive: 1,
    });
  }
}
