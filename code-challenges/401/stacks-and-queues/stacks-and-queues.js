'use strict';
class Node{
    constuctor(value){
      this.value = value;
      this.next = null;
    }
}

class Stack{
    constuctor(){
        this.top = null;
        this.next = null
    }

    push(value){
      let node = new Node(value);
      node.next = this.top;
      this.top = node;      
      console.log(this.top);
    }

    pop(){
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp;
    }
    peek(){
        return this.top;
    }
};

class Queue{
    constuctor(){
        this.front = null;
        this.end = null;
    }

    enqueue(value){
      if(this.rear){
      this.rear.next = node;
    } else {
      this.front = node;
      this.rear = node;
    }
    }

    dequeue(){
    
    }

    peek(){
        return this.front;
    }
  // return this.stack;
}