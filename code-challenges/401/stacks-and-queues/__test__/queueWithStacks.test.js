'use strict';

const Stack = require('../stacks-and-queues.js');
const PseudoQueue = require('../queueWithStacks/queueWithStacks');

describe('running tests on PseudoQueue class', () => {
    it('it can add a value with enqueue', ()=> {
        let test = new PseudoQueue();
        test.enqueue(1);
        test.enqueue(2);
        expect(test).toEqual({"s1": {"length": 0, "next": null, "size": NaN, "top": {"next": {"next": null, "value": 1}, "value": 2}}, "s2": {"length": 0, "next": null, "top": null}});
    });
    it('it can grab the front value with dequeue', ()=> {
        let test = new PseudoQueue();
        test.enqueue(1);
        test.enqueue(2);
        expect(test.dequeue()).toEqual(2);
    })
})