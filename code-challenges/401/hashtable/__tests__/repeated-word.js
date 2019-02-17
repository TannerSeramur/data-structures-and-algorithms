'use strict';

const repeatedWord = require('../repeated-word.js');

describe('running tests on repeatedWord function', () => {
  it('returns the first word to repeat', () => {
    expect(repeatedWord('hello I am hello')).toEqual('hello');
  });
  it('returns first repeated work even if case is different', () => {
    expect(repeatedWord('Hi my name is hi')).toEqual('hi');
  });
  it('returns repeated word even if has , next to it', () => {
    expect(repeatedWord('Hi, my name is hi')).toEqual('hi');
  });
  it('returns null if no repeated word', () => {
    expect(repeatedWord('Hi')).toEqual(null);
  });
})