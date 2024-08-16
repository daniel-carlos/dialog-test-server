import { Module } from '@nestjs/common';
import { LikeService } from './dto/like.service';
import { PrismaModule } from 'src/prisma/prisma.modeule';
import { LikeController } from './like.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [LikeService],
  exports: [],
})
export class LikeModule {}
