describe('#fizzBuzz', function() {
  it("prints number when not mutliples of 3 and 5", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("prints 'fizz' for multiples of 3", function() {
    expect(fizzBuzz(3)).toEqual('fizz');
  });

  it("prints 'buzz' for multiples of 5", function() {
    expect(fizzBuzz(5)).toBe('buzz');
  });

  it("prints 'fizzBuzz' for multiples of 3 and 5", function() {
    expect(fizzBuzz(15)).toBe('fizzBuzz');
  });
});
