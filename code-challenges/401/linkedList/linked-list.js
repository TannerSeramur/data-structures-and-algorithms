'use strict';

const util = require('util');

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor (){
    this.head = null;
  }
  insert(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }

    let lastNode = this.head;

    while(lastNode.next){
      lastNode = lastNode.next;
    }
    lastNode.next = node;
  }

  includes(value){
    let match = this.head;

    while(match.value !== value){
      match = match.next;
      if(!match){
        return false;
      }
    }
    return true;
  }

  print(){
    let endNode = this.head;
    let length = 1;

    while (endNode.next){
      endNode = endNode.next;
      length++;
    }
    console.log(util.inspect(this, {depth: length}));
    return this; 
  }
  insertBefore(value, newValue){
    let node = new Node(newValue);
    let current = this.head;
    while(current.next){
      if(current.next.value === value){
        node.next = current.next
        current.next = node;
        return this;
      }
      current = current.next;
    }
    current = current.next;
  }
  insertAfter(value, newValue){
    let node = new Node(newValue);
    let current = this.head;
    while(current.next){
      if(current.value === value){
        node.next = current.next
        current.next = node;

      }
      current = current.next;
    }
    current = current.next;
  }
}

module.exports = LinkedList;