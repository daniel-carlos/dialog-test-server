import { Injectable } from "@nestjs/common";
import { writeFile } from "fs/promises";
import { join } from "path";
import * as fs from "fs"

@Injectable()
export class FileService {

    async uploadAvatar(avatar: Express.Multer.File, userId: number) {
        const folder = join(__dirname, '../../../uploads');
        const path = join(__dirname, '../../../uploads', `avatar-${userId}.png`);

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }

        return writeFile(path, avatar.buffer);
    }
}