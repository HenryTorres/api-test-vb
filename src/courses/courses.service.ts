import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './course.shema';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>
  ) { }

  async create(course: CreateCourseDto) {
    const newCourse = new this.courseModel(course);
    await newCourse.save();
  }

  async findAll() {
    return await this.courseModel.find().exec();
  }

  async findOne(id: string) {
    return await this.courseModel.findById(id);
  }

  async update(id: string, course: UpdateCourseDto) {
    return await this.courseModel.findByIdAndUpdate(id, course).exec();
  }

  async remove(id: string) {
    return await this.courseModel.findByIdAndDelete(id);
  }
}
