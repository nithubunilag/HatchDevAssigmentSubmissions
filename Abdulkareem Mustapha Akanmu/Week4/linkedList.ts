/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class LNode<T> {
  data: T;
  next: LNode<T> | null;

  constructor(value: T) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LNode<T> | null;

  constructor() {
    this.head = null;
  }

  add(value: T): void {
    const newNode = new LNode(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;

  }

  prepend(value: T): void {
    const newNode = new LNode(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
}


  search(value: T): LNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.data === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

  print(): void {
        let current = this.head;
        let result = '';
        const listArray: T[] = [];
        while (current !== null) {
            result += current.data + (current.next ? ' -> ' : '');
            listArray.push(current.data);
            current = current.next;
        }
        console.log(result);
        console.log(listArray);
    }
}

const myLinkedList = new LinkedList<number>();
myLinkedList.add(10);
myLinkedList.add(17);
myLinkedList.add(32);
myLinkedList.add(2);
myLinkedList.prepend(19);
myLinkedList.add(8);


console.log(myLinkedList);
myLinkedList.print();
console.log(myLinkedList.search(2));