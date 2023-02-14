import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class Config {
  port: number = 3000;
  useSsl: boolean = false;
  sslKeyFile: string = './cert/localhost.decrypted.key';
  sslCertFile: string = './cert/localhost.crt';
  staticContentLocation: string =
    '../../boulderball-route-setter-frontend/dist/boulderball-route-setter';

  databaseConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'test.db',
    autoLoadEntities: true,
    synchronize: true,
  };

  jwtConfig: JwtModuleOptions = {
    secret:
      'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
    signOptions: { expiresIn: '1d' },
  };
}

export const config = new Config();
