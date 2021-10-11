import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './modules/weather/weather.module';

@Module({
  //WeatherModule is a Module to wrap all funcionalities about the Endpoint Weather
  imports: [WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
