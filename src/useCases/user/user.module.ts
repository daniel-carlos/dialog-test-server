import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './dto/user.service';
import { PrismaModule } from 'src/prisma/prisma.modeule';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
