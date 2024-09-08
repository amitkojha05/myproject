
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // This will enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   // Strip out properties that are not in the DTO
    forbidNonWhitelisted: true, // Throw an error if extra properties are provided
    transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
  }));
  

  await app.listen(3000);
}
bootstrap();