import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project/projectEntity';
import { projectModule } from './project/project.module';
import { projectMemberModule } from './projectMember/projectMember.module';
import { ProjectMember } from './projectMember/projectMemberEntity';
import { projectLogModule } from './projectLog/projectLog.module';
import { ProjectLog } from './projectLog/projectLogEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hridhin#567#',
      database: 'slog',
      entities: [Project, ProjectMember, ProjectLog],
      synchronize: true,
    }),
    projectModule,
    projectMemberModule,
    projectLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
