import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UrlDto {
  @IsString()
  @IsNotEmpty()
  longUrl: string;

  @IsString()
  @IsNotEmpty()
  shortUrl: string;
}

export class UrlValidateDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  longUrl: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  shortUrl: string;
}
