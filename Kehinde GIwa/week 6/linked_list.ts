//2 pointers algorithm, hackerrank

class LNode<T> {
  data: T;
  next: LNode<T>;

  constructor(value: T) {
    this.data = value;
  }
}

class LinkedList<T> {
  head: LNode<T>;
  tail: LNode<T>;
  delete() {
    
    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      
      
    }
    
  }
  prepend(val: T) {
    const newNode = new LNode(val);

    // if there is no head
    if (!this.head) {
      this.head = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  append(val: T) {
    const newNode = new LNode(val);

    // if there is no head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // if there is a head
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
  }

  search(val: T) {
    let counter = 1;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data != val) {
        currentNode = currentNode.next;
        counter++;
      } else return `Found at position ${counter}`;
    }
    return -1;
  }

  print() {}
}

const l = new LinkedList<number>();

l.append(3);

l.append(2);
l.append(1)
l.delete();
// l.append(22)
// console.log(l);
