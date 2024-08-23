import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";
import { CreateUserDTO } from "src/useCases/user/dto/create-user.dto";

export class AuthForgetDTO {
    @ApiProperty({
        description: ""
    })
    @IsEmail()
    email: string;
}