'use strict';

const Tree = require('../tree');

describe('Running Tests on Tree Class', () => {
    it("tree can add value", () => {
        let test = new Tree();
        test.addValue(5);
        expect(test).toEqual({"root": {"left": null, "right": null, "value": 5}})
    });
    it('preOrder works', () => {
        let tree = new Tree();
        tree.addValue(5)
        tree.addValue(3);
        tree.addValue(2);
        tree.addValue(6);
        expect(tree.preOrder()).toEqual([ 5, 3, 2, 6 ]);
    });
    it('postOrder works', () => {
        let tree = new Tree();
        tree.addValue(5)
        tree.addValue(3);
        tree.addValue(2);
        tree.addValue(6);
        expect(tree.postOrder()).toEqual([ 2, 3, 6, 5 ]);
    });
    it('inOrder works', () => {
        let tree = new Tree();
        tree.addValue(5)
        tree.addValue(3);
        tree.addValue(2);
        tree.addValue(6);
        expect(tree.inOrder()).toEqual([ 2, 3, 5, 6 ]);
    });

});

describe('Running tests on Breadth method', () => {
    it('will throw error if tree has no values', () => {
        let tree = new Tree();
        expect(tree.breadthFirst()).toEqual('no items in tree');
    });
    it('will log the int values in the correct order', () => {
        let tree = new Tree();
        tree.addValue(1);
        tree.addValue(2);
        tree.addValue(3);
        expect(tree.inOrder()).toEqual([ 1, 2, 3]);
    });
    it('will log the string values in the correct order', () => {
        let tree = new Tree();
        tree.addValue('hello');
        tree.addValue('hey');
        tree.addValue('hi');
        expect(tree.inOrder()).toEqual(["hello", "hey", "hi"]);
    });

})
