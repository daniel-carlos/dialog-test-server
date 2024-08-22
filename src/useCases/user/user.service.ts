import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { PatchUserDTO } from './dto/patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: CreateUserDTO) {
    console.log(
      `Criar usuário ${data.username} com nome ${data.name}`,
    );
    const newUser = await this.prisma.user.create({
      data,
    });

    return newUser;
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }

  async findByUsernameAndPassword(username: string, password: string) {
    return this.prisma.user.findFirst({
      where: { username, password },
    });
  }

  async update(id: number, data: UpdateUserDTO) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async patch(id: number, data: PatchUserDTO) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
