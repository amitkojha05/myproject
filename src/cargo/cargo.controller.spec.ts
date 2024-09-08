import { Test, TestingModule } from '@nestjs/testing';
import { CargoController } from './cargo.controller';
import { CargoService } from './cargo.service';

describe('CargoController', () => {
  let controller: CargoController;
  const mockCargoService = { createCargo: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CargoController],
      providers: [{ provide: CargoService, useValue: mockCargoService }],
    }).compile();

    controller = module.get<CargoController>(CargoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});