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
  getMax(){
    let bigNum = 0;
    let current = this.top;
    while(current.next){
      console.log(current, ' ⭐️ ');
      
      if(current.value > bigNum){
        bigNum = current.value;
      }
      current = current.next;
    }
    // console.log(bigNum);
    
    return bigNum;

}
}
// module.exports = Stack;

let test = new Stack();
test.push(1);
test.push(2);
test.push(4);
test.push(2);
test.push(1);
test.getMax();

