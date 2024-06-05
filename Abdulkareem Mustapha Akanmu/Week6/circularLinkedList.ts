/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class CNode<T> {
  data: T;
  next: CNode<T> | null = null;

  constructor(value: T) {
      this.data = value;
  }
}


class CircularLinkedList<T> {
  head: CNode<T> | null = null;

  add(value: T): void {
      const newNode = new CNode(value);

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

  prepend(value: T): void {
      const newNode = new CNode(value);

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
          this.head = newNode; 
      }
  }

  delete(value: T): void {
      if (!this.head) {
          console.log("List is empty, nothing to delete");
          return;
      }

      if (this.head.data === value) {
          if (this.head.next === this.head) {
              this.head = null;
          } else {
              let current = this.head;
              while (current.next !== this.head) {
                  current = current.next;
              }
              current.next = this.head.next;
              this.head = this.head.next;
          }
          return;
      }

      let current = this.head;
      do {
          if (current.next?.data === value) {
              current.next = current.next.next;
              return;
          }
          current = current.next!;
      } while (current !== this.head);

      console.log(`Value ${value} not found in the list`);
  }

  search(value: T): boolean {
      if (!this.head) {
          return false;
      }

      let current = this.head;
      do {
          if (current.data === value) {
              return true;
          }
          current = current.next!;
      } while (current !== this.head);

      return false;
  }

  print(): void {
      if (!this.head) {
          console.log("List is empty");
          return;
      }

      let current = this.head;
      const values: T[] = [];
      do {
          values.push(current.data);
          current = current.next!;
      } while (current !== this.head);

      console.log(values);
      console.log(values.join(" -> "));
  }
}

// Example 
const circularList = new CircularLinkedList<number>();
circularList.add(1);
circularList.add(2);
circularList.add(3);
circularList.prepend(0);

circularList.print(); // Output: 0 -> 1 -> 2 -> 3

console.log(circularList.search(2)); // Output: true
console.log(circularList.search(5)); // Output: false

circularList.delete(2);
circularList.print(); // Output: 0 -> 1 -> 3

circularList.delete(0);
circularList.print(); // Output: 1 -> 3

circularList.delete(3);
circularList.print(); // Output: 1

circularList.delete(1);
circularList.print(); // Output: List is empty
