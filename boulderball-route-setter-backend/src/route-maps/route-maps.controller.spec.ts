import { Test, TestingModule } from '@nestjs/testing';
import { RouteMapsController } from './route-maps.controller';
import { RouteMapsService } from './route-maps.service';

describe('RouteMapsController', () => {
  let controller: RouteMapsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteMapsController],
      providers: [RouteMapsService],
    }).compile();

    controller = module.get<RouteMapsController>(RouteMapsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
