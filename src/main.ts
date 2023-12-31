import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
