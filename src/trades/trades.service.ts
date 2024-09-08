import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trade } from './trades.interface';
import { RealtimeGateway } from '../realtime/realtime.gateway';  // Import WebSocket Gateway

@Injectable()
export class TradesService {
  constructor(
    @InjectModel('Trade') private readonly tradeModel: Model<Trade>,
    private readonly realtimeGateway: RealtimeGateway,  // Inject RealtimeGateway
  ) {}

  async create(tradeData: Trade): Promise<Trade> {
    const newTrade = await this.tradeModel.create({
      ...tradeData,
      timestamp: new Date(),  // Automatically set the timestamp to the current date
    });
    return newTrade;
  }

  async findOne(transactionId: string): Promise<Trade> {
    return this.tradeModel.findOne({ transactionId }).exec();
  }
}