class QueueNode<T> {
  data: T;
  next: QueueNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Queue<T> {
  private front: QueueNode<T> | null;
  private rear: QueueNode<T> | null;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enQueue(data: T) {
    const newNode = new QueueNode(data);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear!.next = newNode;
      this.rear = newNode;
    }
  }

  deQueue(): T | null {
    if (!this.front) return null;
    const removedData = this.front.data;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return removedData;
  }

  peek(): T | null {
    return this.front ? this.front.data : null;
  }

  isEmpty(): boolean {
    return this.front === null;
  }
}

const queue = new Queue<number>();
queue.enQueue(10);
queue.enQueue(20);
queue.deQueue();
console.log("Front of queue:", queue.peek());
