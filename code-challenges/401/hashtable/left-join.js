'use strict';

let Hashtable = require('./hashtable.js');

// let h1 = new Hashtable(20);
// let h2 = new Hashtable(20);

// h1.add('love', 'adores');
// h2.add('love', 'hate');
// h1.add('pale', 'fair');
// h2.add('pale', 'tan');
// h1.add('fun', 'joyous');


function leftJoin(h1, h2) {
  if (!h1.size) {
    return 'inputs must be hashtables'
  }
  if (!h2.size) {
    return 'inputs must be hashtables'
  }
  let results = [];
  for (let i = 0; i < h1.size; i++) {
    if (h1.table[i]) {
      let arr = [];

      arr.push(Object.keys(h1.table[i].head.value)[0]);
      arr.push(h1.find(arr[0]));

      if (h2.contains(arr[0])) {
        arr.push(h2.find(arr[0]));
      }
      else {
        arr.push(null);
      }
      results.push(arr);
    }
  }
  return results;
}

module.exports = leftJoin;