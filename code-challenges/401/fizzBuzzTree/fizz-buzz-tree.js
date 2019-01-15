'use strict';

class Node{ 
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    };
    addNode(n){
        if(n.value < this.value){
            if(this.left == null){
                this.left = n;
            }else{
                this.left.addNode(n);
            }
        }else if(n.value > this.value){
            if(this.right == null){
                this.right = n;
            }else{
                this.right.addNode(n);
            }
        }
    }
};

class Tree {
    constructor(){
        this.root = null;
    };
    addValue(val){
        let n = new Node(val);
        if(!this.root){
            this.root = n;
        }else{
            this.root.addNode(n);
        }
    };
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
        return nodes;
    };
}

function check(node){
    if(node.value % 15 == 0){
        node.value = 'fizzbuzz';
    }else if(node.value % 3 == 0){
        node.value = 'fizz';
    }else if(node.value %  5 == 0){
        node.value = 'buzz';
    }else{ 
        node.value = node.value;
    }
    return node.value;
}

function fizzBuzzTree(tree){
    if(!tree.root){
        return 'error! must be a binary tree input';
    }
    check(tree.root);
    let _walk = (n) => {
        if(n.left){
            _walk(n.left);
            check(n.left);
        };
        if(n.right){
            _walk(n.right);
            check(n.right);
        }
    }
    _walk(tree.root);
}

let tree = new Tree();
tree.addValue(5);
tree.addValue(3);
tree.addValue(9);
tree.addValue(10);
tree.addValue(10);
tree.addValue(15);
tree.addValue(28);
tree.addValue(30);

tree.inOrder();

console.log('FizzBuzzed! 😜 ');
fizzBuzzTree(tree)
tree.inOrder();


module.exports = {fizzBuzzTree, Node, Tree};
