// // modelling a link node with generic <T>
// class LNode<T> {
//   data: T;
//   next: LNode<T>;

//   constructor(val: T) {
//     this.data = val;
//   }
// }

// // a singly linked list
// class LinkedList<T> {
//   head: LNode<T>;

//   add(val: T) {
//     const newNode = new LNode(val);

//     //if we don't have an "head"
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }

//     let currentNode = this.head;
//     while (currentNode.next != undefined) {
//       //null
//       currentNode = currentNode.next;
//     }

//     currentNode.next = newNode;

//     //if we have an "head"
//   }
//   print() {}
// }
// const l = new LinkedList<number>();
// l.add(1);
// l.add(2);
// l.add(3);
// console.log(l);

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

  print() {
    const listArray: T[] = [];

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

console.log(l);
console.log(l.print());
