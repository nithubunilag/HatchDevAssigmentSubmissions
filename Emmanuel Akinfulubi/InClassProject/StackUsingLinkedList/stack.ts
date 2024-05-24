class StackNode<T> {
  data: T;
  next: StackNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Stack<T> {
  private top: StackNode<T> | null;

  constructor() {
    this.top = null;
  }

  push(data: T) {
    const newNode = new StackNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): T | null {
    if (!this.top) return null;
    const removedData = this.top.data;
    this.top = this.top.next;
    return removedData;
  }

  peek(): T | null {
    return this.top ? this.top.data : null;
  }

  isEmpty(): boolean {
    return this.top === null;
  }
}

const stack = new Stack<string>();
stack.push("A");
stack.push("B");
stack.pop();
console.log("Top of stack:", stack.peek());
