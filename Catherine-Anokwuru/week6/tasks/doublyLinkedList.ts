class ElNode<T> {
  data: T;
  next: ElNode<T> | null;
  prev: ElNode<T> | null;

  constructor(val: T) {
    this.data = val;
    this.next = null;
    this.prev = null
  }
}

class DoublyLinkedList<T> {
  head: ElNode<T> | null;
  tail: ElNode<T> | null;
  size: number = 0;

  add(val: T) {
    const newNode = new ElNode(val);

    // if we don't have 'head'
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    this.tail!.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.size++;
  }

  remove(position: number) {
    if (position < 0 || position >= this.size) {
      return;
    }

    let removeNode: ElNode<T> | null = null;

    if (position === 0) {
      removeNode = this.head;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        if (this.head) {
          this.head.prev = null;
        }
      }
    } else if (position === this.size - 1) {
      removeNode = this.tail;
      this.tail = this.tail!.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < position; i++) {
        currentNode = currentNode!.next;
      }
      removeNode = currentNode;
      let prevNode = currentNode!.prev;
      let nextNode = currentNode!.next;
      if (prevNode) {
        prevNode.next = nextNode;
      }
      if (nextNode) {
        nextNode.prev = prevNode;
      }
    }
    this.size--;
    return removeNode;
  }

  insert(val: T, position: number) {
    if (position < 0 || position > this.size) {
      return;
    }

    const newNode = new ElNode(val);

    if (position === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < position - 1; i++) {
        currentNode = currentNode!.next;
      }
      newNode.next = currentNode!.next;
      newNode.prev = currentNode;
      if (currentNode!.next) {
        currentNode!.next.prev = newNode;
      } else {
        this.tail = newNode;
      }
      currentNode!.next = newNode;
    }
    this.size++;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(
        `Data: ${currentNode.data}, Prev: ${
          currentNode.prev ? currentNode.prev.data : null
        }, Next: ${currentNode.next ? currentNode.next.data : null}`
      );
      console.log(this.size);
      currentNode = currentNode.next!;
    }
  }
}

const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
// list.print();
list.remove(4)
list.insert(7, 3)
list.print();
// list.remove(2)
// list.print();
