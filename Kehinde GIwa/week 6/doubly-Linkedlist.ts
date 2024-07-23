class DNode<T> {
  data: T;

  previous: DNode<T>;
  next: DNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class DLinkedList<T> {
  head: DNode<T>;

  prepend(value: T) {
    const newNode = new DNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }

  insert(value: T, pos: number) {
    let i = 1;
    const newNode = new DNode(value);

    let currentNode = this.head;
    while (currentNode.next) {
      if (i == pos) {
        newNode.next = currentNode;
        newNode.previous = currentNode.previous;
        currentNode.previous.next = newNode;
        currentNode.previous = newNode;
      }
      i++;
      currentNode = currentNode.next;
    }

  }

  append(value: T) {
    const newNode = new DNode(value);

    // if there is no head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.previous = currentNode;
  }
  print() {}
}

const li = new DLinkedList<number>();


li.append(3);
li.append(4);
li.prepend(1);
li.insert(2, 2);
console.log(li);
