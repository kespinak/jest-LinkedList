// we made this file
// here is the testing code for LinkedList.js
// cmd: npm test


const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
  test('it adds the element to the beginning of the list', () => {
    const example = new LinkedList();
    example.insertAtHead(10);
    const oldHead = example.head;
    example.insertAtHead(20);

    expect(example.head.value).toBe(20);
    expect(example.head.next).toBe(oldHead);
    expect(example.length).toBe(2);
  })
})

describe('#getByIndex', () => {
  describe('with index less that 0', () => {
    test('it returns null', () => {
      const example = LinkedList.fromValues(10, 20)

      expect(example.getByIndex(-1)).toBeNull()
    })
  })

  
  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const example = LinkedList.fromValues(10, 20)

      expect(example.getByIndex(5)).toBeNull()
    })
  })

  describe('with index 0', () => {
    test('it returns the head', () => {
      const example = LinkedList.fromValues(10, 20)

      expect(example.getByIndex(0).value).toBe(10)
    })
  })

  describe('with index in the middle', () => {
    test('it returns the element at the index', () => {
      const example = LinkedList.fromValues(10, 20, 30, 40)

      expect(example.getByIndex(2).value).toBe(30)
    })
  })
})

describe('#insertAtIndex', () => {
  describe('with index less that 0', () => {
    test('it does not insert anything', () => {
      const example = LinkedList.fromValues(10, 20)
      example.insertAtIndex(-1, 30)

      expect(example.length).toBe(2)
    })
  })

  
  describe('with index greater than list length', () => {
    test('it should not insert anything', () => {
      const example = LinkedList.fromValues(10, 20)
      example.insertAtIndex(5, 30);

      expect(example.length).toBe(2);
    })
  })

  describe('with index 0', () => {
    test('insert at head', () => {
      const example = LinkedList.fromValues(10, 20)
      example.insertAtIndex(0, 30);

      expect(example.head.value).toBe(30);
      expect(example.head.next.value).toBe(10);
      expect(example.length).toBe(3);
    })
  })

  describe('with index in the middle', () => {
    test('insert at the given index', () => {
      const example = LinkedList.fromValues(10, 20, 30, 40)
      example.insertAtIndex(2, 50);
      const node = example.getByIndex(2)

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(example.length).toBe(5);
    })
  })
})

describe('#removeAtHead', () => {
  test('removes the head', () => {
    const example = LinkedList.fromValues(10, 20, 30);
    example.removeAtHead();

    expect(example.head.value).toBe(20);
    expect(example.length).toBe(2);
  })
})

describe('#removeAtIndex', () => {
  describe('with index less that 0', () => {
    test('it does not remove anything', () => {
      const example = LinkedList.fromValues(10, 20)
      example.removeAtIndex(-1)

      expect(example.length).toBe(2)
    })
  })

  
  describe('with index greater than list length', () => {
    test('it should not remove anything', () => {
      const example = LinkedList.fromValues(10, 20)
      example.removeAtIndex(23)

      expect(example.length).toBe(2);
    })
  })

  describe('with index 0', () => {
    test('remove at head', () => {
      const example = LinkedList.fromValues(10, 20, 30)
      example.removeAtIndex(0);

      expect(example.head.value).toBe(20);
      expect(example.head.next.value).toBe(30);
      expect(example.length).toBe(2);
    })
  })

  describe('with index in the middle', () => {
    test('remove at the given index', () => {
      const example = LinkedList.fromValues(10, 20, 30, 40)
      example.removeAtIndex(2);
      const node = example.getByIndex(1)

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(example.length).toBe(3);
    })
  })

})