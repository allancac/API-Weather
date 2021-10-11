import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { response } from 'express';

//A provider to connect to the OpenWeatherMap API and retrieve a temperature.
@Injectable()
export class TemperatureProvider {
  private clientAxios: AxiosInstance;
  constructor() {
    this.clientAxios = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      params: {
        APPID: 'f917bf98b67c604863fb4143a4633648',
      },
    });
  }
  async getTemp(city: string): Promise<string> {
    const response = await this.clientAxios.get('weather', {
      params: { q: city },
    });
    console.log(typeof response.data)
    const temperaturas = {
      kelvin: response.data['main']['temp'],
      celsius: (response.data['main']['temp'] - 273.15).toFixed(2),
    }

    return JSON.parse(JSON.stringify(temperaturas));
  }
}

/* 
OPENWEATHER API KEYS
  DEFAULT KEY:                f917bf98b67c604863fb4143a4633648
  fasters-interview KEY:      b8b3ba9ebe2deb29bcf05b01bd9395b7

*/
