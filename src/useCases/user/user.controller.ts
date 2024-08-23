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
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { PatchUserDTO } from './dto/patch-user.dto';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from 'src/modules/file/file.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("User")
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly fileService: FileService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }


  @Post('avatar-upload/:userid')
  @UseInterceptors(FileInterceptor('avatar', {
    limits: { files: 1 }
  }))
  async uploadFile(@UploadedFile() avatar: Express.Multer.File, @Param('userid', ParseIntPipe) userId) {
    try {
      return this.fileService.uploadAvatar(avatar, userId);
    } catch (error) {
      console.error('Erro ao salvar o arquivo:', error);
    }
  }


  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id) {
    return this.userService.show(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id', ParseIntPipe) id, @Body() data: UpdateUserDTO) {
    return this.userService.update(id, data);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async patch(@Param('id', ParseIntPipe) id, @Body() data: PatchUserDTO) {
    return this.userService.patch(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.userService.delete(id);
  }
}
