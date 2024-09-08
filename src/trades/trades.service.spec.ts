import { Test, TestingModule } from '@nestjs/testing';
import { TradesService } from './trades.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RealtimeGateway } from '../realtime/realtime.gateway';
import { CreateTradeDto } from './create-trade.dto';

describe('TradesService', () => {
  let service: TradesService;
  let tradeModel: Model<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TradesService,
        {
          provide: getModelToken('Trade'),
          useValue: {
            create: jest.fn(),  // Mock the model's create method
            save: jest.fn(),    // Mock save method
          },
        },
        {
          provide: RealtimeGateway,
          useValue: {
            emit: jest.fn(), // Mock any necessary methods
          },
        },
      ],
    }).compile();

    service = module.get<TradesService>(TradesService);
    tradeModel = module.get<Model<any>>(getModelToken('Trade'));
  });

  it('should create a trade', async () => {
    const tradeDto: CreateTradeDto = { transactionId: '1234', amount: 1000 };

    const newTrade = {
      ...tradeDto,
      timestamp: new Date(),
      
    };

    jest.spyOn(tradeModel, 'create').mockImplementationOnce(() => Promise.resolve([newTrade]));  // Ensure create returns newTrade
    
    const result = await service.create(tradeDto);

expect(result[0].transactionId).toBe('1234');  // Access the first element of the array
expect(result[0].amount).toBe(1000);

  });
});