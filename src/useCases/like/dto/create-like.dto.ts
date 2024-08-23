import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsInt,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateLikeDTO {
  @ApiProperty({
    title: "User ID",
    description: "ID do usuário que está curtindo.",
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;
  
  @ApiProperty({
    title: "Post ID",
    description: "ID da postagem que está sendo curtida.",
  })
  @IsInt()
  @IsNotEmpty()
  postId: number;
}
