import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import * as express from 'express'
import { join } from 'path';
// import * as cookieParser from 'cookie-parser'



async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  // app.use(cookieParser);
 
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))
  // Главная страница просмотра документации бэкенда
  const config = new DocumentBuilder()
  .setTitle('ReshuHub')
  .setDescription('Документация бэкенда')
  .setVersion('2.0.0')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs',app,document);

  await app.listen(3000);
}
bootstrap();
