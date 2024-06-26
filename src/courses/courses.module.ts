import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseShema } from './course.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseShema }
    ])
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
