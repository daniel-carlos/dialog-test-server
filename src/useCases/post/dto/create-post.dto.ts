import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsInt,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreatePostDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  content: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
