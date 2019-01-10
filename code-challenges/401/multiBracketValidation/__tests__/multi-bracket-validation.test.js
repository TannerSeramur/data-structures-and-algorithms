'use strict';

const multiBracketValidation = require('../multi-bracket-validation');


describe('running tests on multiBracketValidation', () => {
  it('cant return false when string only has one value', () => {
    expect(multiBracketValidation('{')).toEqual(false);
  });
  it('cant return true on {[]()}', () => {
    expect(multiBracketValidation('{[]()}')).toEqual(true);
  });
  it('cant return true on {()3[](s())(5asdfa)}', () => {
    expect(multiBracketValidation('{()3[](s())(5asdfa)}')).toEqual(true);
  });
});