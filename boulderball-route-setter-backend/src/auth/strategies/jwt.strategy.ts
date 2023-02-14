import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from '../../config/configuration';
import { UserInfo } from '../user-info';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        JwtStrategy.extractJwtFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: config.jwtConfig.secret,
    });
  }

  private static extractJwtFromCookie(req: Request): string | null {
    if (req.cookies && 'access_token' in req.cookies && req.cookies.access_token.length > 0) {
      return req.cookies.access_token;
    }
    return null;
  }

  async validate(payload: UserInfo): Promise<UserInfo> {
    return {
      sub: payload.sub,
      username: payload.username,
    };
  }
}
