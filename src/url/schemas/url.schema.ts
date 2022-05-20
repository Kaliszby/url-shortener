import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema({ collection: 'url_logs' })
export class Url {
  @Prop({ required: true })
  longUrl: string;

  @Prop({ required: true })
  shortUrl: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
