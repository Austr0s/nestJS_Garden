import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Garden API')
  .setDescription('API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/documentation', app, document);

  app.use(bodyParser.json());

  await app.listen(3000);
}
bootstrap();
