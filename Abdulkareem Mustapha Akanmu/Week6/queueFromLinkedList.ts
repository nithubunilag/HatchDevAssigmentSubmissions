/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class QLNode<T> {
  data: T;
  next: QLNode<T> | null = null;

  constructor(value: T) {
      this.data = value;
  }
}

class QueueLinkedList<T> {
  private head: QLNode<T> | null = null;
  private tail: QLNode<T> | null = null;
  private count: number = 0;

  enqueue(value: T): void {
      const newNode = new QLNode(value);
      if (this.tail) {
          this.tail.next = newNode;
      }
      this.tail = newNode;
      if (!this.head) {
          this.head = newNode;
      }
      this.count++;
  }

  dequeue(): T | undefined {
      if (!this.head) return undefined;
      const value = this.head.data;
      this.head = this.head.next;
      if (!this.head) {
          this.tail = null;
      }
      this.count--;
      return value;
  }

  peek(): T | undefined {
      if (!this.head) return undefined;
      return this.head.data;
  }

  isEmpty(): boolean {
      return this.count === 0;
  }

  size(): number {
      return this.count;
  }

  print(): void {
      let current = this.head;
      const values: T[] = [];
      while (current) {
          values.push(current.data);
          current = current.next;
      }
      console.log(values.join(", "));
  }
}


// Example
const queueFromLL = new QueueLinkedList();
queueFromLL.enqueue("a");
queueFromLL.enqueue("b");
queueFromLL.enqueue("c");
queueFromLL.print();

queueFromLL.dequeue();
queueFromLL.size();

queueFromLL.print();