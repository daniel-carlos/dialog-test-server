import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaClient, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService
    ) { }

    async createToken(user: User) {
        return this.jwtService.sign(
            {
                sub: user.id,
                username: user.username
            },
            {
                expiresIn: "2 hours",
            });
    }
    async checkToken(token: string) {
        try {
            return this.jwtService.verify(token);
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async login(username: string, password: string) {

        // te amo infinito S2 (minha namorada escreveu isso)
        const user = await this.prisma.user.findFirst({
            where: {
                username,
                password
            }
        })

        if (!user) {
            throw new UnauthorizedException("Credenciais inválidas");
        }

        return this.createToken(user);

    }

    async me(token: string) {
        return this.checkToken(token);
    }
}