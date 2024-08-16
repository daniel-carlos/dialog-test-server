import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLikeDTO } from './create-like.dto';
import { UpdateLikeDTO } from './update-like.dto';
import { PatchLikeDTO } from './patch-like.dto';

@Injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: CreateLikeDTO) {
    return this.prisma.like.create({
      data,
    });
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

  async delete(id: number) {
    return this.prisma.like.delete({
      where: { id },
    });
  }
}
