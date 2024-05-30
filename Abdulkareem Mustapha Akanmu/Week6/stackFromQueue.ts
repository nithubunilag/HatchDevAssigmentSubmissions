/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class StackFromQueue<T> {
  private queue1: Queue<T> = new Queue<T>();
  private queue2: Queue<T> = new Queue<T>();

  push(item: T): void {
      this.queue2.enqueue(item);
      while (!this.queue1.isEmpty()) {
          this.queue2.enqueue(this.queue1.dequeue()!);
      }
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  pop(): T | undefined {
      return this.queue1.dequeue();
  }

  peek(): T | undefined {
      return this.queue1.peek();
  }

  isEmpty(): boolean {
      return this.queue1.isEmpty();
  }

  size(): number {
      return this.queue1.size();
  }

  print(): void {
      this.queue1.print();
  }
}


// Example
const stackFromQueue = new StackFromQueue<number>();
stackFromQueue.push(1);
stackFromQueue.push(2);
stackFromQueue.push(3);
stackFromQueue.print(); // Output: 3, 2, 1
console.log(stackFromQueue.pop()); // Output: 3
stackFromQueue.print(); // Output: 2, 1