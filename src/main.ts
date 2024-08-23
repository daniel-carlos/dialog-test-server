import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, blob } from 'stream/consumers';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  });
  app.setGlobalPrefix('api')

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Dialog Test')
    .setDescription('Challenge for developers - Technical Assessment')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
