class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
  constructor(){ 
    this.top = null;
    this.next = null; 
    this.length = 0;
  }

  push(value){

    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop(){
    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  peek(){
    return this.top.value;
  }

}
module.exports = Stack;

