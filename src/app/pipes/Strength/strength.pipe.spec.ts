import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;

  beforeEach(() => {
    pipe = new StrengthPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return value + weak ', () => {
    expect(pipe.transform(5)).toBe('5 (Weak) ');
  });
  it('should return value + okay ', () => {
    expect(pipe.transform(11)).toBe('11 (Okay) ');
  });
  it('should return value + strong ', () => {
    expect(pipe.transform(23)).toBe('23 (Strong) ');
  });
});
