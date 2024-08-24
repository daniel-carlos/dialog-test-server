import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: CreatePostDTO) {
    return this.prisma.post.create({
      data: {
        content: data.content,
        author: {
          connect: { id: data.authorId },
        },
      },
    });
  }

  async list() {
    return this.prisma.post.findMany({
      // include: {
      //   author: true,
      //   likes: true,
      // },
      select: {
        author: true,
        authorId: true,
        content: true,
        id: true,
        likes: {
          select: {
            id: true,
            user: true
          }
        },
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async show(id: number) {
    return this.prisma.post.findFirst({
      where: { id },
    });
  }

  async delete(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
