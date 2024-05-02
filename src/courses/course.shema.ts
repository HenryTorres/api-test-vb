import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Course {

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    description: string

    @Prop()
    image: string

    @Prop()
    duration: number

    @Prop({ required: true })
    author: string
}

export const CourseShema = SchemaFactory.createForClass(Course);