import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.modeule';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [LikeService],
  exports: [],
})
export class LikeModule {}
