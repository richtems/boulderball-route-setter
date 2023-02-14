import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AccessTokenDto } from './dto/access-token.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserInfo } from './user-info';
import { config } from '../config/configuration';
import { SetMetadata } from '@nestjs/common/decorators';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @SetMetadata('isPublic', true)
  @Post('login')
  async login(
    @Req() req: any,
    @Res({ passthrough: true }) res: Response,
    @Body() credentials: LoginAuthDto,
  ): Promise<AccessTokenDto> {
    const userInfo: UserInfo = req.user;
    const token = this.authService.login(userInfo);
    res.cookie('access_token', token, { httpOnly: true, secure: config.useSsl });
    return { access_token: token };
  }
}
