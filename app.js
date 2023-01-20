// we made this file
// here where we will do manual testing on our LinkedList class

const LinkedList = require('./LinkedList');

const example = LinkedList.fromValues(10, 20, 30, 40);
console.log('the linked list:', example);
console.log('the index of 1:', example.getByIndex(1).value);
example.print();

example.insertAtIndex(2, 60);
example.print();

example.removeAtHead();
example.print();

example.removeAtIndex(2);
example.print();
console.log('the length:', example.length);


// cmd: "node app.js" to run
