import {
  IsAlphanumeric,
  IsInt,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(4)
  content: string;

  @IsInt()
  @IsNotEmpty()
  posts: number;

  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
