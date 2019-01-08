'use strict';

const Stack = require('../stacks-and-queues.js');

describe('running tests on stack class', ()=>{
    it('push add value in correct spot', ()=>{
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        // let expected = 3;
        expect(stack.peek()).toEqual(3);

    });
    it('can pop out the last value', () => {
        let stack = new Stack();
        stack.push(3);
        stack.push(2);
        stack.push(4);
        expect(stack.pop()).toEqual(4);
      });
      it('can show you top value with peek', () => {
        let stack = new Stack();
        stack.push(3);
        stack.push(2);
        stack.push(4);
        expect(stack.peek()).toEqual(4);
      });

})