import { Injectable } from '@nestjs/common';
import { TemperatureProvider } from 'src/openweather/temperature.provider';

@Injectable()
export class WeatherService {
  //Dependency injection of the Temperature
  constructor(private readonly temperatura: TemperatureProvider) {}
  // Asynchronous Function to require the temperature from the provider.
  async getTempOfCity(): Promise<string> {
    const infoWeather = this.temperatura.getTemp('Rio de Janeiro');
    return infoWeather;
  }
}
