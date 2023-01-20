//npm init -y
//npm i --save-dev jest
// we made this file
//our 1st made file: here is the home of our linked list class code

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  insertAtHead(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;    
  };

  removeAtHead() {
    this.head = this.head.next;
    this.length--;
  };

  insertAtIndex(index, value) {
    if (index === 0) {return this.insertAtHead(value)}
  
    const prev = this.getByIndex(index - 1)
    if (prev == null ) {return null}    
    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  };

  removeAtIndex(index) {
    if (index === 0) {return this.removeAtHead()}
  
    const prev = this.getByIndex(index - 1)
    if (prev == null ) {return null}    
    prev.next = prev.next.next;
    this.length--;
  };

  getByIndex(index) {
    if (index >= this.length || index < 0) {return null};

    let current = this.head;
    for (let i=0; i<index; i++) {
      current = current.next;
    }
    return current;
  };

  print() {
    let output = ''
    let current = this.head;
    while (current) {
      output = `${output}${current.value} ->`
      current = current.next;
    }

    console.log(`${output}null`)
  }
};

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  };
};

// ALTERNATIVE TO LINKEDLISTNODE CLASS:
// const linkedListNode = {
//   node = null;
//   next = null;
// };

LinkedList.fromValues = function(...values) {
  const example = new LinkedList()
  for (let i=values.length-1; i>=0; i--) {
    example.insertAtHead(values[i])
  }

  return example
}

module.exports = LinkedList;