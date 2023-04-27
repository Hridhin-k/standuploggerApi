import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project/projectEntity';
import { projectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hridhin#567#',
      database: 'slog',
      entities: [Project],
      synchronize: true,
    }),
    projectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
