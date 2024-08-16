import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.modeule';
import { UserModule } from './useCases/user/user.module';
import { AuthModule } from './useCases/auth/auth.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    PrismaModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
