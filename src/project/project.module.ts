import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projectEntity';
import { projectController } from './project.controller';
import { projectService } from './project.service';
@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [projectService],
  controllers: [projectController],
})
export class projectModule {}
