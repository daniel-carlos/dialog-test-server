import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsInt,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreatePostDTO {
  @ApiProperty({
    title: "Conteudo",
    description: "Texto que será exibido na postagem"
  })
  @IsNotEmpty()
  @MinLength(4)
  content: string;

  @ApiProperty({
    title: "ID do autor",
    description: "ID do usuário que será o dono da postagem"
  })
  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
