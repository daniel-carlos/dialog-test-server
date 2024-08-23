import { PartialType } from '@nestjs/swagger';
import { CreateLikeDTO } from './create-like.dto';

export class PatchLikeDTO extends PartialType(CreateLikeDTO) {}
