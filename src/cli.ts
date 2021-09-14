import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { AppModule } from './app.module';

async function bootstrap() {
  // eslint-disable-next-line no-console
  console.log('Run NestFactoryApplication');
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: false,
  });

  try {
    // eslint-disable-next-line no-console
    console.log('Starting Command Module');
    await app.select(CommandModule).get(CommandService).exec();
    await app.close();
    console.log('Close Command Module');
  } catch (error) {
    console.error(error);
    await app.close();
    process.exit(1);
  }
}

bootstrap();
