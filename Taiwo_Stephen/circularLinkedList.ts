class CircNode<T> {
  next: CircNode<T>;

  constructor(public data: T) {}
}

class CircularLinkedList<T> {
  private head: CircNode<T> | null = null;

  shuffle(): void {
    if (!this.head) return;
    let current = this.head;
    let size = 1;
    while (current.next !== this.head) {
      current = current.next;
      size++;
    }

    current = this.head;
    for (let i = 0; i < size - 1; i++) {
      const randomIndex = Math.floor(Math.random() * (size - i)) + i;
      const target = this.getNodeAtIndex(randomIndex);
      [current.data, target.data] = [target.data, current.data];
      current = current.next;
    }
  }

  add(data: T): void {
    const newNode = new CircNode(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  delete(data: T): void {
    if (!this.head) return;

    let current = this.head;
    let previous: CircNode<T> | null = null;

    do {
      if (current.data === data) {
        if (previous) {
          previous.next = current.next;
          if (current === this.head) {
            this.head = previous; 
          }
        } else {
          this.head = null;
        }
        return;
      }
      previous = current;
      current = current.next;
    } while (current !== this.head);
  }

  private getNodeAtIndex(index: number): CircNode<T> {
    if (!this.head) throw new Error("List is empty");
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  display(): void {
    if (!this.head) return;
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

const values = new CircularLinkedList<number>();
values.add(1);
values.add(2);
values.add(3);
values.add(0);
values.delete(2);

console.log("Original:");
values.display();

values.shuffle();
console.log("\nShuffled:");
values.display();
