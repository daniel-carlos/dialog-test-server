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
import { LikeService } from './like.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Like")
@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) { }

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

  @Get(':userId/:postId')
  async createClick(@Param('userId', ParseIntPipe) userId, @Param('postId', ParseIntPipe) postId) {
    return this.likeService.createClick(userId, postId);
  }

  @Delete(':userId/:postId')
  async deleteClick(@Param('userId', ParseIntPipe) userId, @Param('postId', ParseIntPipe) postId) {
    return this.likeService.deleteClick(userId, postId);
  }

  @Get('toggle/:userId/:postId')
  async likeToggle(@Param('userId', ParseIntPipe) userId, @Param('postId', ParseIntPipe) postId) {
    return this.likeService.likeToggle(userId, postId);
  }
}
