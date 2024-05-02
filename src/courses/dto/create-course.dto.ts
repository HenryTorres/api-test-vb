import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsString()
    readonly image: string;

    @IsNumber()
    readonly duration: number;

    @IsNotEmpty()
    @IsString()
    readonly author: string;
}
