class Stack {
  constructor(capacity) {
    this.storage = [];
    this.capacity = capacity || Infinity;
    this.length = 0;
  }

  add(element) {
    if (this.storage.length >= this.capacity) {
      return alert('Stack is overflowing');
    } else {
      this.storage.push(element);
      this.length = this.storage.length;
      return element;
    }
  }
  remove() {
    let poppedElement = this.storage.pop();
    this.length = this.storage.length;
    return poppedElement;
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  printAll() {
    return this.storage.map((element) => console.log(element));
  }

  isEmpty() {
    return this.storage.length ? false : true;
  }
}

class Stack {
  constructor(capacity) {
    this.storage = {};
    this.capacity = capacity || Infinity;
    this.length = 0;
    this.counter = 0;
  }

  add(element) {
    if (this.length >= this.capacity) {
      return alert('Stack is overflowing');
    } else {
      this.storage[this.counter] = element;
      this.counter = this.counter + 1;
      this.length = this.counter;
      return element;
    }
  }

  remove() {
    let removedElement = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.length = this.counter - 1;
    this.counter = this.counter - 1;
    return removedElement;
  }

  peek() {
    return this.storage[this.counter - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
}
