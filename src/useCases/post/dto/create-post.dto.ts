import {
  IsAlphanumeric,
  IsInt,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @MinLength(4)
  content: string;

  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
