class LLNode<T> {
  data: T;
  next: LLNode<T> | null;

  constructor(val: T) {
    this.data = val;
    this.next = null;
  }
}

class LL<T> {
  head: LLNode<T> | null;
  stack: T[] = [];

  constructor() {
    this.head = null;
    this.stack = [];
  }

  add(val: T) {
    const newNode = new LLNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.stack.push(val);
  }

  pushToStack() {
    return this.stack;
  }

  sizeOfStack() {
    return this.stack.length;
  }

  popFromStack() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(
        `value: ${currentNode.data}, next: ${
          currentNode.next && currentNode.next.data
        }`
      );
      currentNode = currentNode.next;
    }
  }
}

const item = new LL();
item.add("a");
item.add("b");
item.add("c");
// item.print()
const stack = item.pushToStack();
console.log(`first stack: ${stack}`);
const peek = item.peek();
console.log(`first peek: ${peek}`);
const size = item.sizeOfStack();
console.log(`initial size: ${size}`);
const pop = item.popFromStack();
console.log(`removedItem: ${pop}`);
console.log(`updated size: ${size}`);
console.log(`second peek: ${peek}`);
item.add("d");
item.add("e");
console.log(`last peek: ${peek}`);
console.log(`final stack: ${stack}`);
