import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Fasters - Entrevista. Utilize o endpoint "/weather" para obter a temperatura de uma cidade.';
  }
}
