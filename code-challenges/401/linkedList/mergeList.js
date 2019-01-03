'use strict';

function mergeList(list1,list2){
    let current1 = list1.head;
    let current2 = list2.head;
    if(!(current1 && current2)){
      return 'error';
    }
    while(current1.next || current2.next){
      let prev = current2.next;
      current2.next = current1.next;
      current1.next = current2;
      current1 = current2.next;
      current2 = prev; 
    }

    return list1;
  }

  module.exports = mergeList;