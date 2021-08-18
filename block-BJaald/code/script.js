class Queue {
  constructor(capacity = Infinity) {
    this.storage = [];
    this.capacity = capacity;
    this.length = 0;
  }

  enqueue(element) {
    if (this.storage.length >= this.capacity) {
      return alert('Stack is overflowing');
    } else {
      this.storage.push(element);
      this.length = this.storage.length;
      return element;
    }
  }

  dequeue() {
    let poppedElement = this.storage.shift();
    this.length = this.storage.length;
    return poppedElement;
  }

  peek() {
    return this.storage[0];
  }

  printAll() {
    return this.storage.map((element) => console.log(element));
  }

  isEmpty() {
    return this.storage.length ? false : true;
  }
}

class Queue {
  constructor(capacity) {
    this.storage = {};
    this.capacity = capacity || Infinity;
    this.lengthOf = 0;
    this.counter = 0;
    this.deletingCounter = 0;
  }

  enqueue(element) {
    if (this.lengthOf >= this.capacity) {
      return alert('Stack is overflowing');
    } else {
      this.storage[this.counter] = element;
      this.counter = this.counter + 1;
      this.lengthOf = this.counter;
      return element;
    }
  }

  dequeue() {
    let removedElement = this.storage[this.deletingCounter];
    delete this.storage[0];
    this.deletingCounter = this.deletingCounter + 1;
    this.lengthOf = Object.keys('Queue').length;
    return removedElement;
  }

  peek() {
    return this.storage[this.deletingCounter];
  }
  isEmpty() {
    return this.lengthOf === 0;
  }
}
