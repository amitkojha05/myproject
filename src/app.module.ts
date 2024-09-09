import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TradesModule } from './trades/trades.module';  // Import other modules as well
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://amitkojha2802:0ApIk3MwmWUv8yUk@clusteramit.2lgww.mongodb.net/circlepe?retryWrites=true&w=majority&appName=Clusteramit'), // Replace with your MongoDB connection string
    TradesModule, AuthModule,  // Ensure the TradesModule is imported here
    // Import other modules as needed (CargoModule, InventoryModule, etc.)
  ],
})
export class AppModule {}
