import { Module } from '@nestjs/common';
import { RouteMapsService } from './route-maps.service';
import { RouteMapsController } from './route-maps.controller';
import { UsersModule } from 'src/users/users.module';
import { RouteMap } from './entities/route-map.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RouteMap]), UsersModule],
  controllers: [RouteMapsController],
  providers: [RouteMapsService],
  exports: [RouteMapsService],
})
export class RouteMapsModule {}
