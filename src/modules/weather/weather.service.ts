import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  // Asynchronous Function to require the temperature
  async getTemp(): Promise<number> {
    return 20;
  }
}
