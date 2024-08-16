import { IsEmail, IsString } from "class-validator";
import { CreateUserDTO } from "src/useCases/user/dto/create-user.dto";

export class AuthForgetDTO {
    @IsEmail()
    email: string;
}