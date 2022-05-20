import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UrlValidateDto } from './dto/url.dto';
import { UrlService } from './url.service';

@UsePipes(new ValidationPipe())
@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post()
  shortLink(@Body() dto: UrlValidateDto) {
    return this.urlService.shortUrl(dto);
  }
}
