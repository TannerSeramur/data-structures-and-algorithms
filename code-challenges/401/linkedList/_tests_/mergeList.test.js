'use strict'
const LinkedList = require ('../linked-list.js');
const mergeList = require('../mergeList');

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
});