'use strict';

class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }

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
}

class Tree{
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
    contains(value){
        let isTrue = false;

        let _walk = (node) => {
          if(value === node.value){ 
            isTrue = true;
            return; 
          }if(node.left && value < node.value){
            _walk(node.left);
          }if(node.right && value > node.value){
            _walk(node.right);
          }
    
        };
    
        _walk(this.root);
        return isTrue;
    
      }
    
}

module.exports = Tree;

let tree = new Tree();





