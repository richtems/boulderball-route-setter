import { Test, TestingModule } from '@nestjs/testing';
import { RouteMapsService } from './route-maps.service';

describe('RouteMapsService', () => {
  let service: RouteMapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteMapsService],
    }).compile();

    service = module.get<RouteMapsService>(RouteMapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
