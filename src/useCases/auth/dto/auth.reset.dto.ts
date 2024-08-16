import { IsEmail, IsJWT, IsString, MinLength } from "class-validator";
import { CreateUserDTO } from "src/useCases/user/dto/create-user.dto";

export class AuthResetDTO extends CreateUserDTO {
    @IsString()
    @MinLength(6)
    password: string;

    @IsJWT()
    token: string;
}