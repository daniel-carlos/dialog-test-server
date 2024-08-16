import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService
    ) { }

    async createToken() {
        // return this.jwtService.sign();
    }
    async checkToken(token: string) {
        // return this.jwtService.verify(token);
    }

    async login(email: string, password: string) {

        // te amo infinito S2 (minha namorada escreveu isso)
        const user = await this.prisma.user.findFirst({
            where: {
                email: email,
                password: password
            }
        })

        if (!user) {
            throw new UnauthorizedException("Credenciais inválidas");
        }

        return user;

    }
}