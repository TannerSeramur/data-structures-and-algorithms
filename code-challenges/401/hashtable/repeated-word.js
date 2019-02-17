'use strict';

let Hashtable = require('./hashtable');

function repeatedWord(str) {

  let arr = str.toLowerCase().split(/(?:,| )+/);

  let hash = new Hashtable(1024);

  for (let i = 0; i < arr.length; i++) {
    if (hash.contains(arr[i])) {
      console.log(arr[i]);

      return arr[i];
    }
    hash.add(arr[i], null);
  }

  return null;
}

console.log(repeatedWord('hi my name is hi and '));

