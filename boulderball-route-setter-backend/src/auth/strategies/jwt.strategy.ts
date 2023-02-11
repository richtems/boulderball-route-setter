import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from '../../config/configuration';
import { UserInfo } from '../user-info';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwtConfig.secret,
    });
  }

  async validate(payload: UserInfo): Promise<UserInfo> {
    return {
      sub: payload.sub,
      username: payload.username,
      interestingstuff: payload.interestingstuff,
    };
  }
}
