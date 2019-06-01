//find the middle node of a linked list
//two pointers, one that goes every two and one that goes every one. 
//By the time the faster one reaches the end, the slower one will be at the middle


/* This does not always need to be wrapped in a function. 
You can jsut figure out how to make it work.
Solution from https://coderbyte.com/algorithm/linked-list-middle-element
 */

function Node(data, next) {
    this.data = data;
    this.next = next;
}

const n1 = new Node('first', null);
const n2 = new Node('second', n1);
const n3 = new Node('third', n2);
const n4 = new Node('fourth', n3);
const n5 = new Node('fifth', n4);

const head = n5;

let slowPointer = head;
let fastPointer = head;

while (fastPointer.next !== null && fastPointer.next.next !== null){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
}

console.log(slowPointer.data); 

