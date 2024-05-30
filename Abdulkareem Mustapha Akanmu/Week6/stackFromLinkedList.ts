/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class SLNode<T> {
  data: T;
  next: SLNode<T> | null = null;

  constructor(value: T) {
      this.data = value;
  }
}

class StackLinkedList<T> {
  private head: SLNode<T> | null = null;
  private count: number = 0;

  push(value: T): void {
      const newNode = new SLNode(value);
      newNode.next = this.head;
      this.head = newNode;
      this.count++;
  }

  pop(): T | undefined {
      if (!this.head) return undefined;
      const value = this.head.data;
      this.head = this.head.next;
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
const stackFromLL = new StackLinkedList();
stackFromLL.push("a");
stackFromLL.push("b");
stackFromLL.push("c");
stackFromLL.print(); // "c, b, a" 

stackFromLL.peek(); // "a"
stackFromLL.size(); // 3
stackFromLL.pop(); // "a"
stackFromLL.size(); // 2

stackFromLL.push("d");
stackFromLL.print(); // "d, b, a" 