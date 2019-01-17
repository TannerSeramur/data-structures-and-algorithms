class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
};

class BinaryTree {
    constructor() {
        this.root = null
    }
    preOrder() {
        let nodes = [];

        let _walk = (n) => {
            nodes.push(n.value);
            if (n.left !== null) {
                _walk(n.left);
            }
            if (n.right !== null) {
                _walk(n.right);
            }
        };
        _walk(this.root);
        console.log(nodes);
        return nodes;
    }

    inOrder() {
        let nodes = [];

        let _walk = (n) => {
            if (n.left !== null) {
                _walk(n.left);
            }
            nodes.push(n.value);
            if (n.right !== null) {
                _walk(n.right);
            }
        };
        _walk(this.root);
        console.log(nodes);
        return nodes;
    }

    postOrder() {
        let nodes = [];

        let _walk = (n) => {
            if (n.left !== null) {
                _walk(n.left);
            }
            if (n.right !== null) {
                _walk(n.right);
            }
            nodes.push(n.value);
        };
        _walk(this.root);
        console.log(nodes);
        return nodes;
    }
    fmv() {
        if(this.root === null){
            return null;
        };
        let q = [];
        q.push(this.root);
        let highNum = 0;
        if (this.root.value < 0) {
            highNum = this.root.value;
        }
        while (q.length > 0) {
            let current = q[0];
            if (current.value > highNum) {
                highNum = current.value;
            }
            if (current.left) {
                q.push(current.left);
            }
            if (current.right) {
                q.push(current.right);
            }
            q.shift();
        }
        // console.log(highNum);
        return highNum;

    };
}


    let tree = new BinaryTree();
    let a = new Node(1);
    let b = new Node(3);
    let c = new Node(4);
    let d = new Node(6);
    let e = new Node(12);
    let f = new Node(2);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;
    console.log(tree.fmv());

    module.exports = {BinaryTree, Node}