import { IsEmail } from "class-validator";
import { CreateUserDTO } from "src/useCases/user/dto/create-user.dto";

export class AuthRegisterDTO extends CreateUserDTO { }