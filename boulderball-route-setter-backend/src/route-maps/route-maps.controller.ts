import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { RouteMapsService } from './route-maps.service';
import { CreateRouteMapDto } from './dto/create-route-map.dto';
import { UpdateRouteMapDto } from './dto/update-route-map.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('route-maps')
@Controller('route-maps')
export class RouteMapsController {
  constructor(private readonly routeMapsService: RouteMapsService) {}

  @Post()
  create(@Req() req: any, @Body() createRouteMapDto: CreateRouteMapDto) {
    return this.routeMapsService.create(createRouteMapDto, req.user.sub);
  }

  @Get()
  findAll() {
    return this.routeMapsService.findAll();
  }

  @Get('favorites')
  findFavorites(@Req() req: any) {
    return this.routeMapsService.findFavorites(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeMapsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteMapDto: UpdateRouteMapDto) {
    return this.routeMapsService.update(+id, updateRouteMapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeMapsService.remove(+id);
  }
}
