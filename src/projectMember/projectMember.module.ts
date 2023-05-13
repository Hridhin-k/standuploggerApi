import { Module } from '@nestjs/common';
import { ProjectMember } from './projectMemberEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { projectMemberService } from './projectMember.service';
import { projectMemberController } from './projectMember.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectMember])],
  providers: [projectMemberService],
  controllers: [projectMemberController],
})
export class projectMemberModule {}
