import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Entry Point');
  const app = await NestFactory.create(AppModule, { cors: true });

  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Api docs')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT);

  logger.log(`Server running on http://localhost:${PORT}/api/v1`);
}
bootstrap();
