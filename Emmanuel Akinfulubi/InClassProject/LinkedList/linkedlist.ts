class LNode<T> {
  data: T;
  next: LNode<T> | null = null;

  constructor(val: T) {
    this.data = val;
  }
}

class LinkedList<T> {
  head: LNode<T> | null = null;

  add(val: T) {
    const newNode = new LNode(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const l = new LinkedList<number>();
l.add(1);
l.add(2);
l.add(3);

l.print();
