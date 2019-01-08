let Stack = require('../stacks-and-queues.js');

class PseudoQueue {
  constructor(){
    this.s1 = new Stack(),
    this.s2 = new Stack();
  }

  enqueue(value){
    if(this.s1.length === 0 && this.s2.length === 0){
      this.s1.push(value);
    }
    else if(this.s1.length > 0){
      this.s2.push(value);
    }
  }

 dequeue(){
   if(this.s1.length >= 1 ){
     this.s1.pop();
   }
   else if(this.s1.length === 0 && this.s2.length > 0){
    while(this.s2.length !== 0){
      this.s1.push(this.s2.top);
      this.s2.pop();
    };
   }  
    return this.s1.pop();
    
 }
}
module.exports = PseudoQueue;

let test = new PseudoQueue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.dequeue();
