'use strict'
const LinkedList = require ('../linked-list.js');

describe('running tests', ()=>{
    it('can add a item to list using insert function', () => {
        let list = new LinkedList();
        list.insert('tanner')
        expect(list.head.value).toEqual('tanner');
    });
    it(`can add a new value before the entered value in the list using insertBefore`,()=>{
        let list = new LinkedList();
        list.insert('tanner');
        list.insert('maria');
        list.insertBefore('maria','kona');
        expect(list.includes('kona')).toEqual(true);
    });
    it(`can add a new value after the entered value in the list using insertAfter`,()=>{
        let list = new LinkedList();
        list.insert('tanner');
        list.insert('maria');
        list.insert('ryli');
        list.insertAfter('maria','kona');
        expect(list.includes('kona')).toEqual(true);
    })


})