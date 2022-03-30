import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';
describe('CalculatorService', () => {
  let mockLoggerService: LoggerService;
  let calculatorService: CalculatorService;

  beforeEach(() => {
    // loggerService = new LoggerService();
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);

    calculatorService = new CalculatorService(mockLoggerService);
    // spyOn(LoggerService, 'log'); // ! Making fake call to loggerService not running acutual method
    // spyOn(loggerService, 'log').and.callThrough(); // ! To make call to acutual method in loggerService *not recommended
  });

  it('should add two numbers', () => {
    let result = calculatorService.add(3, 5);
    expect(result).toBe(8);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    let result = calculatorService.substract(5, 6);
    expect(result).toBe(-1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
