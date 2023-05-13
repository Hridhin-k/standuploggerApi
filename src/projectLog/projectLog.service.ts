import { Injectable } from '@nestjs/common';
import { ProjectLog } from './projectLogEntity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { groupBy } from 'lodash';

@Injectable()
export class projectLogService {
  constructor(
    @InjectRepository(ProjectLog)
    private projectLogRepository: Repository<ProjectLog>,
  ) {}
  async fetchAllProjectLog(data: {
    startDate: Date;
    endDate: Date;
    projectId: number;
  }) {
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    const currentStartDate = new Date(
      new Date(startDate).setDate(startDate.getDate() + 1),
    );
    const previousDate = new Date(
      new Date(endDate).setDate(endDate.getDate() - 1),
    ); // providing previous date of the current date so that all logs between the selected date range is returned
    const projectId = data.projectId;
    const projectLogData = await this.projectLogRepository
      .createQueryBuilder('ProjectLog')

      // .where('projectLog_createdAt BETWEEN :previousDate AND :startDate', {
      //   previousDate,
      //   startDate,
      // })
      .where('projectLog_createdAt >= :endDate', {
        endDate: endDate,
      })
      .andWhere('projectLog_createdAt <= :currentStartDate', {
        currentStartDate: currentStartDate,
      })
      .andWhere('projectLog_projectId = :projectId', { projectId })
      .getMany();
    console.log(
      '-------------------------------------------------------------------------------------',
    );

    console.log(projectLogData, 'projectLOg');
    console.log(previousDate, 'previous Date');
    console.log(endDate, 'end Date');
    console.log(startDate, 'start Date');

    const groupedData = groupBy(projectLogData, (item) =>
      item.projectLog_createdAt.toDateString(),
    );

    return groupedData;
  }

  async fetchDailyLogData(data: { date: Date; projectId: number }) {
    const currentDate = new Date(data.date);
    const projectId = data.projectId;
    const previousDateOfCurrentDate = new Date(
      new Date(currentDate).setDate(currentDate.getDate() - 1), //in dailylog data component the logs of current days and previous days has to be displayed ,here we find two day ago's date because while querying using the between clause the first constraint is omitted
    );

    const projectDailyLog = await this.projectLogRepository
      .createQueryBuilder('ProjectLog')

      .where('Date(projectLog_createdAt) >= Date(:previousDateOfCurrentDate)', {
        previousDateOfCurrentDate: previousDateOfCurrentDate,
      })
      .andWhere('Date(projectLog_createdAt) <= Date(:currentDate)', {
        currentDate: currentDate,
      })
      .andWhere('projectLog_projectId = :projectId', { projectId })
      .getMany();

    console.log(
      projectDailyLog,
      previousDateOfCurrentDate,
      currentDate,
      'daily logs',
    );
    return projectDailyLog;
  }
  createNewLog(data): Promise<ProjectLog[]> {
    const newProjectLog = this.projectLogRepository.create(data);
    return this.projectLogRepository.save(newProjectLog);
  }
}

// .where('Date(projectLog_createdAt) >= Date(:endDate)', {
//   endDate: endDate,
// })
// .andWhere('Date(projectLog_createdAt) <= Date(:startDate)', {
//   startDate: startDate,
// })
