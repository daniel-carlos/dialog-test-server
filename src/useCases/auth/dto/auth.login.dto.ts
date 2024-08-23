import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class AuthLoginDTO {
    @ApiProperty({
        description: "Nome de Usuário",
    })
    @IsString()
    username: string;
    
    @ApiProperty({
        description: "Senha do usuário"
    })
    @IsString()
    password: string;
}