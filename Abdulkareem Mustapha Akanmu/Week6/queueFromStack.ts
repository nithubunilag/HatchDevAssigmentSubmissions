/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class QueueFromStack<T> {
  private stack1: Stack<T> = new Stack<T>();
  private stack2: Stack<T> = new Stack<T>();

  enqueue(item: T): void {
      this.stack1.push(item);
  }

  dequeue(): T | undefined {
      if (this.stack2.isEmpty()) {
          while (!this.stack1.isEmpty()) {
              this.stack2.push(this.stack1.pop()!);
          }
      }
      return this.stack2.pop();
  }

  peek(): T | undefined {
      if (this.stack2.isEmpty()) {
          while (!this.stack1.isEmpty()) {
              this.stack2.push(this.stack1.pop()!);
          }
      }
      return this.stack2.peek();
  }

  isEmpty(): boolean {
      return this.stack1.isEmpty() && this.stack2.isEmpty();
  }

  size(): number {
      return this.stack1.size() + this.stack2.size();
  }

  print(): void {
      const tempStack = new Stack<T>();
      while (!this.stack2.isEmpty()) {
          tempStack.push(this.stack2.pop()!);
      }
      const items: T[] = [];
      while (!tempStack.isEmpty()) {
          const item = tempStack.pop()!;
          items.push(item);
          this.stack2.push(item);
      }
      while (!this.stack1.isEmpty()) {
          const item = this.stack1.pop()!;
          items.push(item);
          tempStack.push(item);
      }
      while (!tempStack.isEmpty()) {
          this.stack1.push(tempStack.pop()!);
      }
      console.log(items.join(", "));
  }
}


// Example
const queueFromStack = new QueueFromStack<number>();
queueFromStack.enqueue(1);
queueFromStack.enqueue(2);
queueFromStack.enqueue(3);
queueFromStack.print(); // Output: 1, 2, 3
console.log(queueFromStack.dequeue()); // Output: 1
queueFromStack.print(); // Output: 2, 3