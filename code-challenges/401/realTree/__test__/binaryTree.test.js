'use strict';

let {BinaryTree, Node} = require('../binaryTree');


describe('running tests on binaryTree.js', () => {
  it('can find max value in binary tree', () => {
    let tree = new BinaryTree();
    let a = new Node(2);
    let b = new Node(1);
    let c = new Node(3);
    let d = new Node(12);
    let e = new Node(6);
    let f = new Node (7);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;
    expect(tree.fmv()).toEqual(12);
  });
  it('return null if tree is empty', () => {
    let tree = new BinaryTree();
    expect(tree.fmv()).toEqual(null);
  });
  it('returns correct value', () => {
    let tree = new BinaryTree();
    let a = new Node(99);
    let b = new Node(1);
    let c = new Node(3);
    let d = new Node(12);
    let e = new Node(6);
    let f = new Node (7);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;
    expect(tree.fmv()).toEqual(99);
  });
})