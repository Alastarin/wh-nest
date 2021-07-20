import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

console.log(process.env.MONGO_STRING_URL_CONNECTION);
@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(process.env.MONGO_STRING_URL_CONNECTION, {
      user: process.env.MONGO_USER_NAME,
      pass: process.env.MONGO_USER_PASS,
      dbName: process.env.MONGO_DATABASE,
      authMechanism: 'SCRAM-SHA-256',
      authSource: 'admin',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
