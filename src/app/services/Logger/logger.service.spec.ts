import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let loggerService: LoggerService;
  beforeEach(() => {
    loggerService = new LoggerService();
  });

  it('lenth of messages array should be zero at start', () => {
    let count = loggerService.messages.length;

    expect(count).toBe(0);
  });

  it('lenth of messages array should be 1 after adding one message', () => {
    loggerService.log('hello world');

    expect(loggerService.messages.length).toBe(1);
  });
  it('lenth of messages array should be 0 after calling clear method', () => {
    loggerService.log('message');
    loggerService.clear();

    expect(loggerService.messages.length).toBe(0);
  });
});
