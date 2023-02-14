import { Module } from '@nestjs/common';

import { config } from './config/configuration';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteMapsModule } from './route-maps/route-maps.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { UsersService } from './users/users.service';
import { RouteMapsService } from './route-maps/route-maps.service';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.databaseConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, config.staticContentLocation),
    }),
    RouteMapsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
