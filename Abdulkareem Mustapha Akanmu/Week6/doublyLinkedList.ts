/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class DNode<T> {
  data: T;
  next: DNode<T> | null = null;
  prev: DNode<T> | null = null;

  constructor(value: T) {
      this.data = value;
  }
}

class DoublyLinkedList<T> {
  head: DNode<T> | null = null;
  tail: DNode<T> | null = null;

  add(value: T): void {
      const newNode = new DNode(value);

      if (!this.tail) {
          this.head = this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
  }

  prepend(value: T): void {
      const newNode = new DNode(value);

      if (!this.head) {
          this.head = this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
  }

  delete(value: T): void {
      if (!this.head) {
          console.log("List is empty, nothing to delete");
          return;
      }

      let current = this.head;

      while (current) {
          if (current.data === value) {
              if (current === this.head && current === this.tail) {
                  this.head = this.tail = null;
              } else if (current === this.head) {
                  this.head = current.next;
                  if (this.head) {
                      this.head.prev = null;
                  }
              } else if (current === this.tail) {
                  this.tail = current.prev;
                  if (this.tail) {
                      this.tail.next = null;
                  }
              } else {
                  current.prev!.next = current.next;
                  current.next!.prev = current.prev;
              }
              return;
          }
          current = current.next;
      }

      console.log(`Value ${value} not found in the list`);
  }

  search(value: T): boolean {
      let current = this.head;

      while (current) {
          if (current.data === value) {
              return true;
          }
          current = current.next;
      }

      return false;
  }

  print(): void {
      let current = this.head;
      const values: T[] = [];

      while (current) {
          values.push(current.data);
          current = current.next;
      }

      console.log(values);
      console.log(values.join(" <-> "));
  }
}

// Example Usage
const doublyLinkedList = new DoublyLinkedList<number>();
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.prepend(0);

doublyLinkedList.print(); // Output: 0 <-> 1 <-> 2 <-> 3

console.log(doublyLinkedList.search(2)); // Output: true
console.log(doublyLinkedList.search(5)); // Output: false

doublyLinkedList.delete(2);
doublyLinkedList.print(); // Output: 0 <-> 1 <-> 3

doublyLinkedList.delete(0);
doublyLinkedList.print(); // Output: 1 <-> 3

doublyLinkedList.delete(3);
doublyLinkedList.print(); // Output: 1

doublyLinkedList.delete(1);
doublyLinkedList.print(); // Output: List is empty
