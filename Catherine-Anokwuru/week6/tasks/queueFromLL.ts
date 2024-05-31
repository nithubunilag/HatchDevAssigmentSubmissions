class LNode<T> {
  data: T;
  next: LNode<T> | null;

  constructor(val: T) {
    this.data = val;
    this.next = null;
  }
}

class LLNode<T> {
  head: LNode<T> | null;
  queue: T[];

  constructor() {
    this.head = null;
    this.queue = [];
  }

  enqueue(val: T) {
    let currentNode = this.head;
    let newNode = new LNode(val);
    if (!currentNode) {
      currentNode = newNode;
    }

    while (currentNode) {
      this.queue.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return this.queue;
  }

  dequeue() {
    this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  print() {
    return this.queue;
  }
}

const LL = new LLNode();
LL.enqueue("a");
LL.enqueue("b");
LL.enqueue("c");
LL.print();

// LL.size();
LL.dequeue();
LL.size();

// LL.enqueue("d");
LL.print();
