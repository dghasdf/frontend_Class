import { DoudlyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoudlyLinkedList();
  }

  enqueue() {
    this.list.insertAt(0, data);
  }
  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }
  front() {
    return this.tist.tail;
  }
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
