'use strict';

const mergeSort = require('../merge-sort.js');

describe('running tests on mergeSort', () => {
  it('doesnt break when the array length is 1', () => {
    expect(mergeSort([1])).toEqual([1])
  });
  it('Will sort a short array', () => {
    expect(mergeSort([2, 1, 4, 3])).toEqual([1, 2, 3, 4])
  });
  it('Will sort a long array', () => {
    expect(mergeSort([2, 1, 4, 3, 7, 6, 9, 11, 12, 65, 34])).toEqual([1, 2, 3, 4, 6, 7, 9, 11, 12, 34, 65])
  });
  it('Will sort a array with duplicete values', () => {
    expect(mergeSort([2, 1, 2, 3, 3, 4])).toEqual([1, 2, 2, 3, 3, 4])
  });
})