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

    createToken(user: User) {
        return this.jwtService.sign(
            {
                sub: user.id,
                id: user.id,
                username: user.username,
                name: user.name,
                avatarUrl: user.avatarUrl
            },
            {
                expiresIn: "2 hours",
            });
    }
    checkToken(token: string) {
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

    me(token: string) {
        return this.checkToken(token);
    }
}