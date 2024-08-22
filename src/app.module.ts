import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.modeule';
import { UserModule } from './useCases/user/user.module';
import { AuthModule } from './useCases/auth/auth.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { PostModule } from './useCases/post/post.module';
import { LikeModule } from './useCases/like/like.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const StaticFilesModule = ServeStaticModule.forRoot({
  rootPath: join(__dirname, '..', 'uploads'),
  exclude: ['/api/(.*)'],
})

@Module({
  imports: [
    PrismaModule, StaticFilesModule, AuthModule, UserModule, PostModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
