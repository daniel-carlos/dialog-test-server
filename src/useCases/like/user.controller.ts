import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateLikeDTO } from './dto/create-like.dto';
import { UpdateLikeDTO } from './dto/update-like.dto';
import { PatchLikeDTO } from './dto/patch-like.dto';
import { LikeService } from './dto/like.service';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: CreateLikeDTO) {
    return this.likeService.create(data);
  }

  @Get()
  async list() {
    return this.likeService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id) {
    return this.likeService.show(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id', ParseIntPipe) id, @Body() data: UpdateLikeDTO) {
    return this.likeService.update(id, data);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async patch(@Param('id', ParseIntPipe) id, @Body() data: PatchLikeDTO) {
    return this.likeService.patch(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.likeService.delete(id);
  }
}
