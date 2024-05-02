import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import * as jsonxml from 'jsonxml';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const accept = req.headers['accept'];
    const data = await this.coursesService.findAll();

    if (accept.includes('application/json')) {
      res.set('content-type', 'application/json')
      return res.send(data);
    }

    if (accept.includes('application/xml')) {
      res.set('Content-Type', 'application/xml')
      return res.send(jsonxml(data));
    }

    if (accept.includes('text/plain')) {
      res.set('Content-Type', 'text/plain')
      return res.send(data.toString());
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const accept = req.headers['accept'];
    const data = await this.coursesService.findOne(id);

    if (accept.includes('application/json')) {
      res.set('content-type', 'application/json')
      return res.send(data);
    }

    if (accept.includes('application/xml')) {
      res.set('Content-Type', 'application/xml')
      return res.send(jsonxml(data));
    }

    if (accept.includes('text/plain')) {
      res.set('Content-Type', 'text/plain')
      return res.send(data.toString());
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
