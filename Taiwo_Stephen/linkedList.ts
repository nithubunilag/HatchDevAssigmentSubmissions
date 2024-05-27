class Nodes<T> {
  data: T;
  next: Nodes<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Nodes<T> | null;

  constructor() {
    this.head = null;
  }

  append(data: T): void {
    const newNode = new Nodes(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data: T): void {
    const newNode = new Nodes(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data: T): void {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  toArray(): T[] {
    const arr: T[] = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

const linkedList = new LinkedList<number>();
linkedList.append(5);
linkedList.append(10);
linkedList.append(10);
linkedList.prepend(1);
linkedList.delete(10);

const list = linkedList.toArray();
console.log(list);
