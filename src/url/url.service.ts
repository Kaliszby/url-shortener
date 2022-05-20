import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { UrlDto, UrlValidateDto } from './dto/url.dto';
import { Url, UrlDocument } from './schemas/url.schema';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async create(urlDto: UrlDto): Promise<Url> {
    const createdUrl = new this.urlModel(urlDto);
    return createdUrl.save();
  }

  async shortUrl(dto: UrlValidateDto) {
    const data = {
      longUrl: dto.longUrl,
      shortUrl: nanoid(),
    };

    try {
      await this.create(data);
    } catch (err) {
      throw new BadRequestException({
        error: {
          code: 400,
          type: 'BAD_REQUEST',
          description: err?.message,
        },
      });
    }

    return { shortUrl: data.shortUrl };
  }
}
