import { Injectable } from '@nestjs/common';
import { CreateRouteMapDto } from './dto/create-route-map.dto';
import { UpdateRouteMapDto } from './dto/update-route-map.dto';

@Injectable()
export class RouteMapsService {
  create(createRouteMapDto: CreateRouteMapDto) {
    return 'This action adds a new routeMap';
  }

  findAll() {
    return `This action returns all routeMaps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routeMap`;
  }

  update(id: number, updateRouteMapDto: UpdateRouteMapDto) {
    return `This action updates a #${id} routeMap`;
  }

  remove(id: number) {
    return `This action removes a #${id} routeMap`;
  }
}
