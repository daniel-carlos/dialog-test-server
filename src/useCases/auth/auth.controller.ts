import { Body, Controller, Get, Param, Post, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth.login.dto";
import { AuthRegisterDTO } from "./dto/auth.register.dto";
import { AuthForgetDTO } from "./dto/auth.forget.dto";
import { AuthResetDTO } from "./dto/auth.reset.dto";
import { AuthService } from "./auth.service";
import { UserService } from "../user/dto/user.service";
import { AuthGuard } from "./auth.guard"
import { PrismaService } from "src/prisma/prisma.service";
import { error } from "console";

@Controller("auth")
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) { }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() { username, password }: AuthLoginDTO) {
        const user = await this.userService.findByUsernameAndPassword(username, password);

        if (!user) {
            return {
                error: true,
                msg: "Credenciais inválidas"
            }
        }

        return this.authService.login(user.username, user.password);
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    async register(@Body() body: AuthRegisterDTO) {
        await this.userService.create(body);
    }

    @Post("forget")
    @UsePipes(new ValidationPipe())
    async forget(@Body() body: AuthForgetDTO) {

    }

    @Post("reset")
    @UsePipes(new ValidationPipe())
    async reset(@Body() body: AuthResetDTO) {

    }

    @UseGuards(AuthGuard)
    @Get("me")
    async me() {
        return await this.authService.me("");
    }
}