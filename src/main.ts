import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    
  });

  app.enableCors({
    origin: '*',
    exposedHeaders: 'Content-Disposition'
  });

  try {
    await app.listen(process.env.SERVER_HTTP_PORT, process.env.SERVER_HTTP_HOSTNAME);
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
}

bootstrap();