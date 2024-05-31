class Stack<T> {
  queue: T[] = [];
  stack: T[] = [];

  push(val: T) {
    this.queue.push(val);
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      this.stack.push(item!);
    }
    return this.stack
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }

  size() {
    console.log(this.stack.length);
  }

  print() {
    console.log(this.stack);
  }
}

const data = new Stack()
data.push('a')
data.push('b')
data.push('c')
data.print()
data.pop()
data.peek()
data.size()
data.print()