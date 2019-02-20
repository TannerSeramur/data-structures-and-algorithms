'use strict';
const qSort = require('../quickSort.js');

describe('running tests on quickSort', () => {
  it('has a base case for array less then 2', () => {
    expect(qSort([1])).toEqual([1]);
  });
  it('will sort a array', () => {
    expect(qSort([3, 2, 1, 5, 4, 8, 7, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it('will sort a array with duplacte valuses ', () => {
    expect(qSort([3, 2, 1, 3, 5, 4, 8, 7, 6])).toEqual([1, 2, 3, 3, 4, 5, 6, 7, 8]);
  });
})