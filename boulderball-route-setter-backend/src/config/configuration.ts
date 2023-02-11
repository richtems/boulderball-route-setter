import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class Config {
  port: 3000;

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
