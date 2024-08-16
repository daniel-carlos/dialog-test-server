import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.modeule";

@Module({
    imports: [
        JwtModule.register(
            {
                secret: "HeadmItiCephoniQuEadebURDheIgreA"
            }
        ),
        UserModule, PrismaModule
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {

}