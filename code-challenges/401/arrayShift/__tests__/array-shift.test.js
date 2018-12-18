'use strict';

const codeChallange = require('../array-shift');

describe('running tests', ()=> {
  it('works with array with even length',()=>{
    let arr = [1,2,3,4];
    let val = 10;
    let expected = [1,2,10,3,4];
    let result = codeChallange.insertShiftArray(arr,val);
    expect(result).toEqual(expected);
  });
  it('works with array with odd length',()=>{
    let arr = [1,2,3];
    let val = 10;
    let expected = [1,2,10,3];
    let result = codeChallange.insertShiftArray(arr,val);
    expect(result).toEqual(expected);
  });
  it('works with empty array',()=>{
    let arr = [];
    let val = 10;
    let expected = [10];
    let result = codeChallange.insertShiftArray(arr,val);
    expect(result).toEqual(expected);
  });
});