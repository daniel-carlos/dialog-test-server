import { Module } from "@nestjs/common";
import { FileService } from "./file.service";
import { UserModule } from "src/useCases/user/user.module";

@Module({
    providers: [FileService],
    exports: [FileService]
})
export class FileModule { }