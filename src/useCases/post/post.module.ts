import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from 'src/prisma/prisma.modeule';

@Module({
  imports: [PrismaModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [],
})
export class PostModule {}
