import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectLog } from './projectLogEntity';
import { projectLogService } from './projectLog.service';
import { projectLogController } from './projectLog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectLog])],
  providers: [projectLogService],
  controllers: [projectLogController],
})
export class projectLogModule {}
