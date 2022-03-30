import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private loggerService: LoggerService) {}

  add(n1: number, n2: number) {
    let result = n1 + n2;
    this.loggerService.log(`add opertion was performed with ${n1} and ${n2}`);
    return result;
  }

  substract(n1: number, n2: number) {
    let result = n1 - n2;
    this.loggerService.log(
      `Substraction opertion was performed with ${n1} and ${n2}`
    );
    return result;
  }
}
