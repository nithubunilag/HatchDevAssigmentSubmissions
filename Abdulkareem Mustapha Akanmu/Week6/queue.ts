/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
      this.items.push(item);
  }

  dequeue(): T | undefined {
      return this.items.shift();
  }

  peek(): T | undefined {
      return this.items[0];
  }

  isEmpty(): boolean {
      return this.items.length === 0;
  }

  size(): number {
      return this.items.length;
  }

  print(): void {
      console.log(this.items.join(", "));
  }
}


// Example
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1, 2, 3
console.log(queue.dequeue()); // Output: 1
queue.print(); // Output: 2, 3