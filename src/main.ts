import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, blob } from 'stream/consumers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  });
  
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
