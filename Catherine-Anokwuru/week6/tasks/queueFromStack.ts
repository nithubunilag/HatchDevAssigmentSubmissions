class Queue<T> {
  queue: T[] = [];
  stack: T[] = [];

  // constructor(){
  //   this.stack = []
  // }

  enqueue(val: T) {
    this.stack.push(val);
    while (this.stack.length > 0) {
      const item = this.stack.shift();
      this.queue.push(item!);
    }
    return this.queue
  }

  dequeue() {
    return this.queue.shift();
  }


  size() {
    console.log(this.queue.length);
  }

  print() {
    console.log(this.queue);
  }
}

const data = new Queue();
data.enqueue("a");
data.enqueue("b");
data.enqueue("c");
data.print();
data.dequeue();
data.size();
data.print();
