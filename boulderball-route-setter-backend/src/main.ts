import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const docConfig = new DocumentBuilder()
    .setTitle('Boulderball route setter API')
    .setDescription('The Boulderball route setter API description')
    .setVersion('1.0')
    .addTag('Boulderball')
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
