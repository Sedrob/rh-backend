import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // Главная страница просмотра документации бэкенда
  const config = new DocumentBuilder()
  .setTitle('Бэкенд навание проекта')
  .setDescription('Документация бэкенда')
  .setVersion('2.0.0')
  .addTag('хз')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs',app,document);

}
bootstrap();
