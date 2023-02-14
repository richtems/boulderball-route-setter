import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateRouteMapDto } from './dto/create-route-map.dto';
import { UpdateRouteMapDto } from './dto/update-route-map.dto';
import { RouteMap } from './entities/route-map.entity';
import { GetRouteMapDto } from './dto/get-route-map.dto';

@Injectable()
export class RouteMapsService {
  constructor(
    @InjectRepository(RouteMap)
    private readonly repository: Repository<RouteMap>,

  ) {}

  create(createRouteMapDto: CreateRouteMapDto, userId: number) {
    return this.repository.save({
      name: createRouteMapDto.name,
      difficulty: createRouteMapDto.difficulty,
      routeDefinition: createRouteMapDto.routeDefinition.map(String),
      creator: {id: userId} as User,
      favorites: [],
    });
  }

  async findAll(): Promise<GetRouteMapDto[]>{
    let maps = await this.repository.find({relations: {creator: true}});
    return maps.map<GetRouteMapDto>(x => {
      const dto: GetRouteMapDto = {
        id: x.id,
        name: x.name,
        difficulty: x.difficulty,
        routeDefinition: x.routeDefinition.map(Number),
        creatorName: x.creator.displayname,
      }
      return dto;
    });
  }

  findFavorites(userId: number) {
    return this.repository.findBy({creator: {id: userId}});
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
