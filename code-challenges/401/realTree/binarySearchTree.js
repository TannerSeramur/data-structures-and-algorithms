
class BinaryTree{
  constructor(){
      this.root = null;
  }

  addValue(val){
      let n = new Node(val);
      if(!this.root){
          this.root = n;
      }else{
          this.root.addNode(n);
      }
  }

  
}