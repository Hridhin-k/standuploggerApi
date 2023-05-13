import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { projectMemberService } from './projectMember.service';

@Controller()
export class projectMemberController {
  constructor(private readonly projectMemberService: projectMemberService) {}

  @Get('/projectmember') async getAllProjectMember(
    @Query('projectId') projectId: number,
  ) {
    const memberData = await this.projectMemberService.getProjectMember({
      projectId: projectId,
    });
    return memberData;
  }

  @Post('addmember')
  addNewProjectMember(
    @Body() projectMember_name: { projectMember_name: 'string' },
    @Body() projectId: { projectId: 'number' },
  ): Promise<any> {
    console.log(projectMember_name, projectId.projectId, 'VVVVVVVVVVVVV');

    return this.projectMemberService.addNewProjectMember({
      projectMember_name: projectMember_name.projectMember_name, //crosscheck during api call

      projectMember_createdBy: 'hridhin k',
      projectMember_projectId: projectId.projectId,
    });
  }
}
