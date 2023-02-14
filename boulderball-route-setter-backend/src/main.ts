import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config } from 'src/config/configuration';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
  let httpsOptions = undefined;
  if (config.useSsl) {
    httpsOptions = {
      key: fs.readFileSync(config.sslKeyFile),
      cert: fs.readFileSync(config.sslCertFile),
    };
  }

  const app = await NestFactory.create(AppModule, { httpsOptions: httpsOptions });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(cookieParser());

  const docConfig = new DocumentBuilder()
    .setTitle('Boulderball route setter API')
    .setDescription('The Boulderball route setter API description')
    .setVersion('1.0')
    .addTag('Boulderball')
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(config.port);
  console.log('Server started on port: ' + config.port);
}
bootstrap();
