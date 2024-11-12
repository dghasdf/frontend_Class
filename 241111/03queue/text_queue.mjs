import { Queue } from "./queue.mjs";

let queue = new Queue();

console.log("==== enquer() ====");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());

console.log("====enqueue() ====");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpt: ${queue.isEmpty()}`);
