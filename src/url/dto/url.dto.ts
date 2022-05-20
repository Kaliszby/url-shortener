import { IsNotEmpty, IsString } from 'class-validator';

export class UrlDto {
  @IsString()
  @IsNotEmpty()
  longUrl: string;

  shortUrl: string;
}

export class UrlValidateDto {
  @IsString()
  @IsNotEmpty()
  longUrl: string;
}
