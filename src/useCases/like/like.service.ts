import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLikeDTO } from './dto/create-like.dto';
import { UpdateLikeDTO } from './dto/update-like.dto';
import { PatchLikeDTO } from './dto/patch-like.dto';

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

  async list() {
    return this.prisma.like.findMany();
  }

  async show(id: number) {
    return this.prisma.like.findFirst({
      where: { id },
    });
  }

  async update(id: number, data: UpdateLikeDTO) {
    return this.prisma.like.update({
      where: { id },
      data,
    });
  }

  async patch(id: number, data: PatchLikeDTO) {
    return this.prisma.like.update({
      where: { id },
      data,
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
