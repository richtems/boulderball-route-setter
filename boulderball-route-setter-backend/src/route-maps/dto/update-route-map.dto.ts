import { PartialType } from '@nestjs/swagger';
import { CreateRouteMapDto } from './create-route-map.dto';

export class UpdateRouteMapDto extends PartialType(CreateRouteMapDto) {}
