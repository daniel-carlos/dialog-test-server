import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './dto/like.service';
import { PrismaModule } from 'src/prisma/prisma.modeule';

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [LikeService],
  exports: [],
})
export class LikeModule {}
