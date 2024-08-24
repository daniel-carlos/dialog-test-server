import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  minLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    title: "Nome",
    description: "Nome da pessoa"
  })
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @ApiProperty({
    title: "Username",
    description: "nome de usuário que será usado para logar no sitema"
  })
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(4)
  username: string;

  @ApiProperty({
    title: "Senha",
    description: "Senha do uduário"
  })
  @IsString()
  @MinLength(6)
  password: string;
}