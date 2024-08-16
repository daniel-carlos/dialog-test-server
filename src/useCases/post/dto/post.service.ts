import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePostDTO } from './update-post.dto';
import { PatchPostDTO } from './patch-post.dto';
import { CreatePostDTO } from './create-post.dto';

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
    return this.prisma.post.findMany();
  }

  async show(id: number) {
    return this.prisma.post.findFirst({
      where: { id },
    });
  }

  async update(id: number, data: UpdatePostDTO) {
    return this.prisma.post.update({
      where: { id },
      data: {
        content: data.content,
        author: {
          connect: { id: data.authorId },
        },
      },
    });
  }

  async patch(id: number, data: PatchPostDTO) {
    return this.prisma.post.update({
      where: { id },
      data: {
        content: data.content,
        author: {
          connect: { id: data.authorId },
        },
      },
    });
  }

  async delete(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
