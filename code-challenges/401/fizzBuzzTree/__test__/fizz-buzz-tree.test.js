'use strict'

const {fizzBuzzTree, Tree} = require('../fizz-buzz-tree');




describe('running test', () => {
    it('fizzBuzzTree replaces all value divisible by 3,5 or 15', ()=> {
        let tree = new Tree();
        tree.addValue(5);
        tree.addValue(3);
        tree.addValue(9);
        tree.addValue(10);
        tree.addValue(15);
        tree.addValue(28);
        tree.addValue(30);
        fizzBuzzTree(tree);
        expect(tree.inOrder()).toEqual([ 'fizz', 'buzz', 'fizz', 'buzz', 'fizzbuzz', 28, 'fizzbuzz' ]);
    });

    it('will throw a error if input is not a binary tree', ()=> {
        expect(fizzBuzzTree('hi')).toEqual('error! must be a binary tree input');
    });
    it('changes the root correctly', () => {
        let tree = new Tree();
        tree.addValue(15);
        fizzBuzzTree(tree);
        expect(tree.inOrder()).toEqual(['fizzbuzz']);
    })
})