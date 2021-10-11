import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { TemperatureProvider } from 'src/openweather/temperature.provider';

//Module to wrap all funcionalities to the endpoint /weather
@Module({
  controllers: [WeatherController],
  providers: [WeatherService, TemperatureProvider],
})
export class WeatherModule {}
