'use strict'
const LinkedList = require ('../linked-list.js');
const mergeList = require('../mergeList');

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
    });
    it('kthFromEnd function working', ()=>{
        let list = new LinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        expect(list.kthFromEnd(2)).toEqual(2);
    });
    it('kthFromEnd function wont let you input a value bigger then the list', ()=>{
        let list = new LinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        expect(list.kthFromEnd(7)).toEqual('error list is not that big');
    });
});

describe('running tests for part 3 of code challange', ()=>{
    it('returns the correct list ziping the two together', ()=>{
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.insert(2);
        list1.insert(4);
        list1.insert(6);
        list1.insert(8);
        list2.insert(3);
        list2.insert(5);
        list2.insert(7);
        list2.insert(9);
        expect(mergeList(list1,list2)).toEqual({"head": {"next": {"next": {"next": {"next": {"next": {"next": {"next": null, "value": 8}, "value": 7}, "value": 6}, "value": 5}, "value": 4}, "value": 3}, "value": 2}})
    });
    it('will throw error if it gets 2 bad arguments', ()=>{
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        expect(mergeList(list1,list2)).toEqual('error');
    })
})