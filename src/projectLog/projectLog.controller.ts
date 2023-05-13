import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { projectLogService } from './projectLog.service';
import { ProjectLog } from './projectLogEntity';

@Controller()
export class projectLogController {
  constructor(private readonly projectLogService: projectLogService) {}
  @Get('/logs')
  async getAllProjectLog(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('projectId') projectId: number,
  ) {
    const logData = await this.projectLogService.fetchAllProjectLog({
      startDate: startDate,
      endDate: endDate,
      projectId: projectId,
    });
    return logData;
  }
  @Get('/dailylog')
  async getDailyLogData(
    @Query('date') date: Date,
    @Query('projectId') projectId: number,
  ) {
    const dailyLogData = await this.projectLogService.fetchDailyLogData({
      date: date,
      projectId: projectId,
    });

    return dailyLogData;
  }
  @Post('/add')
  addNewProjectLog(
    @Body() projectLogData: { projectLog_data: 'string' },
  ): Promise<any> {
    return this.projectLogService.createNewLog({
      projectLog_data: projectLogData, //crosscheck during api call
      projectLog_createdBy: 'hridhin k',
      projectLog_memberId: 1,
    });
  }
}
