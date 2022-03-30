describe('Firts Test case', () => {
  let variavbe: any;

  beforeEach(() => {
    variavbe = {};
  });

  it('when value of a is true return true', () => {
    variavbe.a = true;

    variavbe.a = false;

    expect(variavbe.a).toBe(false);
  });
});
