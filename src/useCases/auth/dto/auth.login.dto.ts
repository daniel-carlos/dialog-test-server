import { IsEmail, IsString } from "class-validator";

export class AuthLoginDTO {
    @IsString()
    username: string;

    @IsString()
    password: string;
}