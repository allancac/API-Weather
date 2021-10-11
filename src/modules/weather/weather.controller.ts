import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

//Controller to the Endpoint weather
@Controller('weather')
export class WeatherController {
  //Injecting the service dependencie
  constructor(private readonly weatherService: WeatherService) {}
  //Get Method providing information about the weather
  @Get()
  async getTemp(): Promise<string> {
    return this.weatherService.getTempOfCity();
  }
}
