import { Test, TestingModule } from '@nestjs/testing';
import { CargoService } from './cargo.service';
import { getModelToken } from '@nestjs/mongoose';
import { RealtimeGateway } from '../realtime/realtime.gateway';

describe('CargoService', () => {
  let service: CargoService;
  const mockCargoModel = {};
  const mockRealtimeGateway = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CargoService,
        { provide: getModelToken('Cargo'), useValue: mockCargoModel },
        { provide: RealtimeGateway, useValue: mockRealtimeGateway },
      ],
    }).compile();

    service = module.get<CargoService>(CargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});