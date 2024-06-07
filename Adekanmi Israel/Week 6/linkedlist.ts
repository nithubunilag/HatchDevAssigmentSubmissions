//Generics <T>
class LNode<T> {
  data: T;
  next: LNode<T>;

  constructor(val: T) {
    this.data = val;
  }
}

//A Singly Linked List
class LinkedList<T> {
  head: LNode<T>;

  add(val: T) {
    const newNode = new LNode(val);
    //If we don't have 'head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next != undefined) {
      // null
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    //     //If we have an 'head'
    //     else {
    //       this.head.next = newNode;
    //       newNode.next = "NULL";
    //     }
  }

  prepend(val: T) {
    const newNode = new LNode(val);

    //If we don't have 'head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    const oldHead = this.head;

    this.head = newNode;

    newNode.next = oldHead;

    let currentNode = this.head;
  }

  search(val: T) {
    if (!this.head) {
      return;
    }

    // const listArray: T[] = [];

    // let currentNode = this.head;
    // while (currentNode != undefined) {
    //   listArray.push(currentNode.data);
    //   currentNode = currentNode.next;
    // }

    // for (let i = 0; i < listArray.length; i++) {
    //   if (listArray[i] == val) {
    //     console.log(`Found at this position ${i + 1}`);
    //   }
    // }

    let currNode = this.head;
    let position = 1;

    while (currNode) {
      if (currNode.data == val) {
        console.log(`Found at this position ${position}`);
        return;
      }
      position += 1;
      currNode = currNode.next;
    }
  }

  print() {
    const listArray: T[] = [];

    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    while (currentNode != undefined) {
      listArray.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return listArray;
  }
}

const l = new LinkedList<number>();
l.add(12);
l.add(7);
l.add(4);
l.add(5);
l.prepend(10);
l.add(3);


console.log(l);
console.log(l.print());
l.search(7);
