'use strict'
const LinkedList = require ('../linked-list.js');

describe('running tests', ()=>{
    it('can add a item to list using insert function', () => {
        let list = new LinkedList()
        list.insert('tanner')
        expect(list.head.value).toEqual('tanner');
    })
})