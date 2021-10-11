import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';

//Module to wrap all funcionalities to the endpoint /weather
@Module({
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
