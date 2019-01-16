
class BinaryTree{
  constructor(){
    this.root = null
  }
  preOrder(){
    let nodes = [];

    let _walk = (n) => {
        nodes.push(n.value);
        if(n.left !== null){
            _walk(n.left);
        }
        if(n.right !== null){
            _walk(n.right);
        }
    };
        _walk(this.root);
        console.log(nodes);
        return nodes;
}

inOrder(){
    let nodes = [];

    let _walk = (n) => {
      if(n.left !== null){
           _walk(n.left);
        }
        nodes.push(n.value);
        if(n.right !== null){
           _walk(n.right);
        }
    };
    _walk(this.root);
    console.log(nodes);
    return nodes;
}

postOrder(){
    let nodes = [];

    let _walk = (n) => {
        if(n.left !== null){
            _walk(n.left);
        }
        if(n.right !== null){
            _walk(n.right);
        }
        nodes.push(n.value);
    };
        _walk(this.root);
        console.log(nodes);
        return nodes;
}
}