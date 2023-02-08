import { Module } from '@nestjs/common';
import { RouteMapsService } from './route-maps.service';
import { RouteMapsController } from './route-maps.controller';

@Module({
  controllers: [RouteMapsController],
  providers: [RouteMapsService],
})
export class RouteMapsModule {}
