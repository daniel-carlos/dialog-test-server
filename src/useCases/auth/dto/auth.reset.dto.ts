import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsJWT, IsString, MinLength } from "class-validator";
import { CreateUserDTO } from "src/useCases/user/dto/create-user.dto";

export class AuthResetDTO extends CreateUserDTO {
    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty()
    @IsJWT()
    token: string;
}