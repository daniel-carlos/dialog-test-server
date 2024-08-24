import { Injectable } from '@nestjs/common';
import { CreateLikeDTO } from './dto/create-like.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: CreateLikeDTO) {
    const like = await this.prisma.like.create({
      data,
    });
    return like;
  }

  async likeToggle(userId: any, postId: any) {
    const foundLike = await this.prisma.like.findFirst({
      where: {
        userId: userId,
        postId: postId
      }
    })

    if (foundLike) {
      return this.prisma.like.delete({
        where: {
          id: foundLike.id
        }
      })
    } else {
      return this.prisma.like.create({
        data: {
          userId: userId,
          postId: postId
        },
      });
    }
  }

  async list(): Promise<{ id: number; userId: number; postId: number; }[]> {
    return this.prisma.like.findMany();
  }

  async show(id: number) {
    return this.prisma.like.findFirst({
      where: { id },
    });
  }

  async createClick(userId: number, postId: number) {
    const foundLike = await this.prisma.like.findFirst({
      where: {
        userId: userId,
        postId: postId
      }
    })

    if (!foundLike) {
      return this.prisma.like.create({
        data: {
          userId: userId,
          postId: postId
        },
      });
    }
  }

  async deleteClick(userId: number, postId: number) {
    return this.prisma.like.deleteMany({
      where: {
        userId: userId,
        postId: postId
      },
    });
  }
}
