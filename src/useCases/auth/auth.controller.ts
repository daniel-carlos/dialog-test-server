import { Body, Controller, Get, Param, Post, Req, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth.login.dto";
import { AuthRegisterDTO } from "./dto/auth.register.dto";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { AuthGuard } from "./auth.guard"
import { PrismaService } from "src/prisma/prisma.service";
import { error } from "console";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) { }

    @Post('login')
    @UsePipes(new ValidationPipe())
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async login(@Body() { username, password }: AuthLoginDTO) {
        const user = await this.userService.findByUsernameAndPassword(username, password);

        if (!user) {
            return {
                error: true,
                msg: "Credenciais inválidas"
            }
        }

        return JSON.stringify({
            token: await this.authService.login(user.username, user.password)
        });
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    async register(@Body() body: AuthRegisterDTO) {
        await this.userService.create(body);
    }

    @UseGuards(AuthGuard)
    @Get("me")
    async me(@Req() req) {
        return JSON.stringify({
            ok: true,
            user: req.tokenPayload
        });
    }
}