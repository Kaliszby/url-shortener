import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
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
  async shortLink(@Body() req: UrlValidateDto) {
    return this.urlService.shortUrl(req);
  }

  @Get(':shortUrl')
  @Redirect('http://localhost:3000', 302)
  async getUrl(@Param() params: UrlValidateDto) {
    const data = await this.urlService.baseUrl(params);
    return { url: data.baseUrl };
  }
}
