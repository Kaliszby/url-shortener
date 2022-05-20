import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from './url/url.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UrlModule],
})
export class AppModule {}
