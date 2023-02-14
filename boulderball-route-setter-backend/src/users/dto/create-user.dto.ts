import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  username: string;

  @IsEmail()
  email: string;

  displayname: string;

  password: string;
}
