'use strict';

const Hashtable = require('../hashtable.js');

describe('Testing hashtable', () => {
  it('can create a hashtable', () => {
    let test = new Hashtable(5);
    expect(test).toEqual({ "size": 5, "table": [] });
  });

  it('can add can find value from key', () => {
    let test = new Hashtable(5)
    test.add('one', 1);
    test.add('two', 2);
    test.add('three', 3);
    expect(test.find('three')).toEqual(3);
  });
  it('can return true or false with .contains', () => {
    let test = new Hashtable(5)
    test.add('one', 1);
    test.add('two', 2);
    test.add('three', 3);
    expect(test.contains('three')).toEqual(true);
  });
})