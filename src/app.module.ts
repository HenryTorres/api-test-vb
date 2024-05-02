import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.elrs4gt.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
      // `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.elrs4gt.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_DB}`
    ),
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
