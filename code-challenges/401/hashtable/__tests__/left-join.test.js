'use strict'

const Hashtable = require('../hashtable.js');
const leftJoin = require('../left-join.js');

describe('running tests on left join function', () => {
  it('can left join 2 hashtables', () => {
    let h1 = new Hashtable(20);
    let h2 = new Hashtable(20);

    h1.add('love', 'adores');
    h2.add('love', 'hate');
    h1.add('pale', 'fair');
    h2.add('pale', 'tan');

    expect(leftJoin(h1, h2)).toEqual([['pale', 'fair', 'tan'], ['love', 'adores', 'hate']])
  });
  it('adds null to array if right hashmap does not have value matching key', () => {
    let h1 = new Hashtable(20);
    let h2 = new Hashtable(20);

    h1.add('love', 'adores');
    h2.add('love', 'hate');
    h1.add('pale', 'fair');
    h2.add('pale', 'tan');
    h1.add('fun', 'joyous');

    expect(leftJoin(h1, h2)).toEqual([['pale', 'fair', 'tan'], ['love', 'adores', 'hate'], ['fun', 'joyous', null]])
  });
  it('only takes hashmaps as inputs', () => {
    expect(leftJoin('hi', 'hey')).toEqual('inputs must be hashtables')
  })

})