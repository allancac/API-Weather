import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Param } from '@nestjs/common';

//Controller to the Endpoint weather
@Controller('weather')
export class WeatherController {
  //Injecting the service dependencie
  constructor(private readonly weatherService: WeatherService) {}
  //Get Method providing information about the weather
  @Get(':city')
  async getTemp(@Param() params): Promise<string> {
    // console.log(params.city);
    return this.weatherService.getTempOfCity(params.city);
  }
}
