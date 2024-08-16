import {
  IsAlphanumeric,
  IsEmail,
  IsInt,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateLikeDTO {
  @IsInt()
  @IsNotEmpty()
  userId: number;
  
  @IsInt()
  @IsNotEmpty()
  postId: number;
}
