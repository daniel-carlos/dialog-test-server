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
import { CreatePostDTO } from './dto/create-post.dto';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Post")
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: CreatePostDTO) {
    return this.postService.create(data);
  }

  @Get()
  async list() {
    return this.postService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id) {
    return this.postService.show(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.postService.delete(id);
  }
}
